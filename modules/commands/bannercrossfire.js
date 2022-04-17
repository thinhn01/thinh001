module.exports.config = {
    name: "bannercrossfire",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "tdunguwu",
    description: "tao banner tren api lawerpr0ject",
    commandCategory: "banner",
    usages: "bannercrossfire",
    cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
  const axios = require('axios');
  const request = require('request');
  	const fs = require("fs"); 
  const { threadID, messageID } = event;
	
  const text1 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[0];
var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/bannerwe.jpeg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/bannerwe.jpeg"),event.messageID);
	 return request(encodeURI(`https://api-ttk.herokuapp.com/banner/crossfire?text=${text1}`)).pipe(fs.createWriteStream(__dirname+'/cache/bannerwe.jpeg')).on('close',() => callback());     
}