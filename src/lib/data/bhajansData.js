const dataSet = [
  [
    "राम भजा सो जीता जग में,",
    "राम भजा सो जीता।।",
    "",
    "हाथ सुमरनी, पेट कतरनी,",
    "पढ़त भगवत गीता।।",
    "",
    "हृदय शुद्ध किया नहीं बौरे,",
    "कहत सुनत दिन बीता।।",
    "",
    "न देव की पूजा किन्ही,",
    "गुरु से रहा अमीता।।",
    "",
    "धन यौवन सब यहीं रहेगा,",
    "अंत समय चले रीता।।",
    "",
    "बावरिया ने भाँवर डारी,",
    "मोह डाल सब कीता।।",
    "",
    "कहें कबीर काल धर खैय्हें,",
    "जैसे मृग को चीता।।",
    "",
    "~ गुरु कबीर साहब",
  ],
  [
    "तोहि मोहि लगन लगाय रे फकीरवा।।",
    "",
    "सोबत ही मैं अपने मंदिर में,",
    "सबद बान मारि जगाये रे फकीरवा।।",
    "",
    "डूबत ही भव के सागर में,",
    "बहियां पकरि समुझाये रे फकीरवा।।",
    "",
    "एकै बचन बचन नहिं दूजा,",
    "तुम मोसे बंद छुड़ाये रे फकीरवा।।",
    "",
    "कहैं कबीर सुनो भाई साधो,",
    "प्राणन प्राण लगाये रे फकीरवा।।",
    "",
    "~ गुरु कबीर साहब",
  ],
  [
    "मन मस्त हुआ तब क्यों बोले।।",
    "",
    "हीरा पायो गाँठ गँठियायो, बार बार वाको क्यों खोले।।",
    "हलकी थी तब चढ़ी तराजू, पूर भई तब क्यों तोले।।",
    "",
    "सुरत कलारी भइ मतवारी, मदवा पी गई बिन तोले।।",
    "हंसा पाये मान सरोवर, ताल तलैया क्यों डोले।।",
    "",
    "तेरा साहेब है घट माहीं, बाहर नैना क्यों खोले।।",
    "कहैं कबीर सुनो भाई साधो, साहेब मिल गये तिल ओले।।",
    "",
    "~ गुरु कबीर साहब",
  ],
  [
    "तेरा मेरा मनुवा कैसे एक होई रे।।",
    "",
    "मैं कहता हौं आँखन देखी, तू कहता कागद की लेखी।।",
    "मैं कहता सुरझावनहारी, तू राखयो उरझाई रे।।",
    "",
    "मैं कहता कि जागत रहियो, तू रहता है सोई रे।।",
    "मैं कहता निर्मोही रहियो, तू जाता है मोही रे।।",
    "",
    "जुगन जुगन समझावत हारा, कहा न माने कोई रे।।",
    "तू तो रंगी फिरै बिहंगी, सब धन डारा खोई रे।।",
    "",
    "सदगुरु धारा निर्मल बाहै, बा में काया धोई रे।।",
    "कहत कबीर सुनो भाई साधो, तब ही वैसा होई रे।।",
    "",
    "~ गुरु कबीर साहब",
  ],
  [
    "पिया मेरा जागे मैं कैसे सोई री।।",
    "",
    "पाँच सखि मेरे सँग की सहेली,",
    "उन रँग रँगी पिया रंग न मिली री।।",
    "",
    "सास सयानी ननद-बोरानी,",
    "उन डर डरी पिय सार न जानी री।।",
    "",
    "दादस ऊपर सेज बिछानी,",
    "चढ़ न सकौ मारी लाज लजानी री।।",
    "",
    "रात दिवस मोहिं कूका मारे,",
    "मैं न सुना रचि रहि संग जानी री।।",
    "",
    "कहै कबीर सुन सखी सयानी,",
    "बिन सतगुरु पिया मिले न मिलानी री।।",
    "",
    "~ गुरु कबीर साहब",
  ],
  [
    "हमन है इश्क मस्ताना, हमन को होशियारी क्या?",
    "रहें आज़ाद या जग से, हमन दुनिया से यारी क्या?",
    "",
    "जो बिछुड़े हैं पियारे से, भटकते दर-ब-दर फिरते,",
    "हमारा यार है हम में, हमन को इंतजारी क्या?",
    "",
    "खलक सब नाम अपने को, बहुत कर सिर पटकता है,",
    "हमन गुरनाम साँचा है, हमन दुनिया से यारी क्या?",
    "",
    "न पल बिछुड़े पिया हमसे, न हम बिछड़े पियारे से,",
    "उन्हीं से नेह लागी है, हमन को बेकरारी क्या?",
    "",
    "कबीरा इश्क का माता, दुई को दूर कर दिल से,",
    "जो चलना राह नाजुक है, हमन सिर बोझ भारी क्या?",
    "",
    "~ गुरु कबीर साहब",
  ],
  [
    "मोको कहां ढूँढ़े रे बन्दे, मैं तो तेरे पास में।।",
    "",
    "ना तीरथ में, ना मूरत में, ना एकान्त निवास में।।",
    "ना मंदिर में, ना मस्जिद में, ना काबे कैलास में।।",
    "",
    "मैं तो तेरे पास में बन्दे, मैं तो तेरे पास में।।",
    "",
    "ना मैं जप में, ना मैं तप में, ना मैं व्रत उपवास में।।",
    "ना मैं क्रिया करम में रहता, नहीं जोग सन्यास में।।",
    "",
    "मैं तो तेरे पास में बन्दे, मैं तो तेरे पास में।।",
    "",
    "नहीं प्राण में, नहीं पिंड में, ना ब्रह्याण्ड आकाश में।।",
    "ना मैं प्रकृति प्रवार गुफा में, नहीं स्वांसों की स्वांस में।।",
    "",
    "खोजि होए तुरत मिल जाऊं, इक पल की तलाश में।।",
    "कहत कबीर सुनो भई साधो, मैं तो हूं विश्वास में।।",
    "",
    "~ गुरु कबीर साहब",
  ],
  [
    "राम निरंजन न्यारा रे, अंजन सकल पसारा रे।।",
    "",
    "अंजन उतपति, ॐ कार, अंजन मांगे सब विस्तार,",
    "अंजन ब्रह्मा, शंकर, इन्द्र, अंजन गोपी संगि गोविंद रे।।",
    "",
    "अंजन वाणी, अंजन वेद, अंजन किया नाना भेद,",
    "अंजन विद्या, पाठ-पुराण, अंजन वो घट घटहिं ज्ञान रे।।",
    "",
    "अंजन पाती, अंजन देव, अंजन ही करे, अंजन सेव,",
    "अंजन नाचै, अंजन गावै, अंजन भेष अनंत दिखावै रे।।",
    "",
    "अंजन कहों कहां लग केता? दान-पुनि-तप-तीरथ जेथा,",
    "कहे कबीर कोई बिरला जागे, अंजन छाड़ि निरंजन लागे।।",
    "",
    "~ गुरु कबीर साहब",
  ],
  [
    "राम बिन तन की ताप न जाई,",
    "जल मे अग्नि उठी अधिकाई।।",
    "",
    "तुम्ह जलनिधि मैं जलकर मीना,",
    "जल में रही जलही बिन पीना।।",
    "",
    "तुम्ह पिंजरा मैं सुवना तोरा,",
    "दरसन देहु भाग बड़ मोरा।।",
    "",
    "तुम्ह सतगुरू मैं नौतम चेला,",
    "कहै कबीर राम रमु अकेला।।",
    "",
    "~ गुरु कबीर साहब",
  ],
  [
    "अमरपुर ले चलो सजना,",
    "अमरपुर ले चलो सजना।।",
    "",
    "अमरपुर की साँकर गलियाँ,",
    "अड़बड़ है चलना।।",
    "",
    "गुरु ज्ञान शब्द की ठोकर,",
    "उघर गये झपना।।",
    "",
    "वहीं अमरपुर लागि बज़रिया,",
    "सौदा है करना।।",
    "",
    "अमरपुर संत बसत है वहीं,",
    "दर्शन है लहना।।",
    "",
    "संत समाज जहाँ बैठी,",
    "वहीं पुरुष अपना।।",
    "",
    "कहत कबीर सुनो भाई साधो,",
    "भवसागर तरना।।",
    "",
    "~ गुरु कबीर साहब",
  ],
  [
    "जो मैं बौरा तो राम तोरा,",
    "लोग मरम का जाने मोरा।।",
    "",
    "मैं बौरी मेरे राम भरतार,",
    "ता कारण रचि करो स्यंगार।।",
    "",
    "माला तिलक पहरि मन माना,",
    "लोगनि राम खिलौना जाना।।",
    "",
    "थोड़ी भगति बहुत अहंकारा,",
    "ऐसे भगता मिलै अपारा।।",
    "",
    "लोग कहें कबीर बौराना,",
    "कबीर का मरम राम जाना।।",
    "",
    "~ गुरु कबीर साहब",
  ],
  [
    "पानी में मीन पियासी,",
    "मोहे सुन सुन आवत हासी।।",
    "",
    "आतम ज्ञान बिना नर भटके,",
    "कोई मथुरा कोई काशी।।",
    "",
    "जैसे मृगा नाभि कस्तूरी,",
    "बन बन फिरत उदासी।।",
    "",
    "जल बिछ कमल, कमल बिछ कलियाँ,",
    "तापर भँवर निवासी।।",
    "",
    "सो मन बस त्रेलोक भयो है,",
    "यति सती सन्यासी।।",
    "",
    "जाको ध्यान धरे विधि हरिहर,",
    "मुनि जन सहस अठासी।।",
    "",
    "सो तेरे घट माहि बिराजे,",
    "परम पुरुष अविनाशी।।",
    "",
    "हैं हाजिर तोहि दूर दिखावे,",
    "दूर की बात निरासी।।",
    "",
    "कहैं कबीर सुनों भाई साधो,",
    "गुरु बिन भरम न जासी।।",
    "",
    "पानी में मीन पियासी,",
    "मोहे सुन सुन आवत हाँसी।।",
    "",
    "~ गुरु कबीर साहब",
  ],
];

const BhajanMeta = {
  id: "kabir-bhajan",
  fileName: "kabir-ke-bhajan",
  txtSuffix: "",
  mdTitle: "संत कबीर दास जी के भजन",
  data: dataSet,
};

export default BhajanMeta;
