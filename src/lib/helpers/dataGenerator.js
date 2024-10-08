/**
 * Import necessary packages and functions.
 */
import { json2csv } from "json-2-csv";

import { AUTHOR_PREFIX } from "./constants.js";
import { joinPath, writeFile } from "./fileSystemUtils.js";

/**
 * Generates a suffix string with the author information if available.
 *
 * @param {string} author - The author of the dataSet.
 * @return {string} The generated suffix string.
 */
const generateSuffix = (author) => (author ? `\n\n${AUTHOR_PREFIX} ${author}` : "");

/**
 * Sorts an array of objects by the 'id' field in ascending order.
 *
 * @param {Array<Object>} data - The array of objects to be sorted.
 * @return {Array<Object>} - The sorted array of objects.
 */
export const sortData = (data) => data.sort((a, b) => (a.id > b.id ? 1 : -1));

/**
 * Generate JSON data from input data.
 * @param {Array} data - Input data.
 * @return {Array} - Formatted JSON data.
 */
export function generateJson(data) {
	return data.map((dataSet) => {
		const content = dataSet.content.join("\n");
		return { ...dataSet, content };
	});
}

/**
 * Generate text data from input data.
 * @param {Array}   data                 - Input data.
 * @param {boolean} [appendNumber=false] - Whether to append index number to content. Default is false.
 * @return {string} - Formatted text data.
 */
export function generateTxt(data, appendNumber = false) {
	return data
		.map((dataSet, index) => {
			const content = dataSet.content.join("\n");
			const indexSuffix = appendNumber ? `${latinToHindiNumber(padIndex(index + 1, 2))}।। ` : "";
			return `${content}${indexSuffix}${generateSuffix(dataSet.author)}`;
		})
		.join("\n\n================================\n\n");
}

/**
 * Generate markdown data from input data.
 * @param {Array}   data                 - Input data.
 * @param {string}  [title]              - Optional title to prepend to document. Default is an empty string.
 * @param {boolean} [appendNumber=false] - Whether to append index number to content. Default is false.
 * @return {string} - Formatted markdown data.
 */
export function generateMd(data, title = "", appendNumber = false) {
	const titlePrefix = title ? `# ${title}\n\n` : "";

	const output = data
		.map((dataSet, index) => {
			const content = dataSet.content.join("\\\n");
			const indexSuffix = appendNumber ? `${latinToHindiNumber(padIndex(index + 1, 2))}।। ` : "";
			return `${content}${indexSuffix}${generateSuffix(dataSet.author)}`;
		})
		.join("\n\n---\n\n");

	return titlePrefix + output;
}

/**
 * Generate CSV data from JSON data.
 * @param {Array} data - JSON data.
 * @return {Promise<string>} - CSV data.
 */
export async function generateCSV(data) {
	const jsonData = data.map((dataSet) => [dataSet.content.join("\n") + generateSuffix(dataSet.author)]);
	const csvData = await json2csv(jsonData);
	return csvData;
}

/**
 * Generate data in specified format and write to file.
 * @param {Object} builder - Builder object containing data and configuration.
 * @param {string} type    - Type of data to generate (e.g., "raw.json", "json", "txt", "md", "csmv").
 * @return {Promise<void>}
 */
export const generateData = async (builder, type) => {
	const { outputDir, fileName, data, mdTitle, appendNumber } = builder;
	const path = joinPath(outputDir, `${fileName}.${type}`);
	let fileData;

	switch (type) {
		case "raw.json":
			fileData = JSON.stringify(data, null, 2);
			break;
		case "json":
			fileData = JSON.stringify(generateJson(data), null, 2);
			break;
		case "txt":
			fileData = generateTxt(data, appendNumber);
			break;
		case "md":
			fileData = generateMd(data, mdTitle, appendNumber);
			break;
		case "csv":
			fileData = await generateCSV(data);
			break;
		default:
			throw new Error(`Unsupported build type: ${type}`);
	}

	await writeFile(path, fileData);

	return Promise.resolve();
};

/**
 * Pads the index with leading zeros or a specified character to ensure a desired length.
 * @param {number} index      - The index to pad.
 * @param {number} [length=3] - The desired length of the resulting string. Default is 3.
 * @param {string} [char="0"] - The character to use for padding. Default is "0".
 * @return {string} - The padded index as a string.
 */
export const padIndex = (index, length = 3, char = 0) => {
	return index.toString().padStart(length, char);
};

/**
 * Converts a Latin number to a Hindi number.
 *
 * @param {number|string} latinNumber - The Latin number to be converted. Can be a number or a string.
 * @return {string} The Hindi representation of the input number.
 */
export const latinToHindiNumber = (latinNumber) => {
	const hindiDigits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];

	return latinNumber
		.toString()
		.split("")
		.map((digit) => {
			const num = parseInt(digit, 10);
			return hindiDigits[num];
		})
		.join("");
};
