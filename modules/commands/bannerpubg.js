module.exports.config = {
    name: "bannerpubg",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "tdunguwu",
    description: "tao banner tren api lawerpr0ject",
    commandCategory: "banner",
    usages: "bannerlw",
    cooldowns: 5,
	 dependencies: {
        "fs-extra": "",
		"axios":"",
        "request": ""
    }
	
};

module.exports.run = async function({ api, event, args }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  const { threadID, messageID } = event;
  let text = args.join(" ")
  if (!text) return api.sendMessage('Vui lòng nhập đúng định dạng [text1 | text2 | text3]!', event.threadID, event.messageID);
  const text1 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[0];
	if (!text1) return api.sendMessage('Vui lòng nhập đúng định dạng [text1 | text2 | text3]!', event.threadID, event.messageID); 
  const text2 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[1];
	if (!text2) return api.sendMessage('Vui lòng nhập đúng định dạng [text1 | text2 | text3]!', event.threadID, event.messageID); 
var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/pubg1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/pubg1.jpg"),event.messageID);
	 return request(encodeURI(`https://api-ttk.herokuapp.com/banner/pubg?text1=${text1}&text2=${text2}&apikey=lawerteam`)).pipe(fs.createWriteStream(__dirname+'/cache/pubg1.jpg')).on('close',() => callback());     
}