module.exports.config = {
    name: "captcha",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "tdunguwu",
    description: "nhảm +1",
    commandCategory: "Other",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  const { threadID, messageID } = event;
  const text1 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[0];
var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/gen.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/gen.png"),event.messageID);
	 return request(encodeURI(`https://api.willz.repl.co/image/captcha?code=${text1}`)).pipe(fs.createWriteStream(__dirname+'/cache/gen.png')).on('close',() => callback());     
}