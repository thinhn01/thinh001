module.exports.config = {
  name: "giangsinh",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Shiron",
  description: "giangsinh",
  commandCategory: "game",
  usages: "[text]",
  cooldowns: 3
};

module.exports.run = async ({ api, event, args, Users }) => {
if ((this.config.credits) != "Shiron") { return api.sendMessage(`[ WARNING ] - Phát hiện credits modules ${this.config.name} đã bị thay đổi thành ${this.config.credits} bởi ADMINBOT ${global.config.BOTNAME} 😐 Dừng lại ngay!!!`, event.threadID, event.messageID)}
	  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
let { senderID, threadID, messageID, mentions } = event;
let menton = Object.keys(mentions);
if (menton.length == 0 && event.type != 'message_reply') {
  var name = (await Users.getData(senderID)).name
  var namee = args.join(" ") || name
}
else if (menton.length == 0 && event.type == 'message_reply') {
var name = (await Users.getData(event.messageReply.senderID)).name
  var namee = args.join(" ") || name;
}
else {
var name = (await Users.getData(menton[0])).name.split('@')[0];
  var namee = args.join(" ") || name;
}
  let callback = function () {
          api.sendMessage({
            attachment: fs.createReadStream(__dirname + `/cache/giangsinh.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/giangsinh.png`), event.messageID);
        };
        return request(encodeURI(`https://hoangdogianguyenofficial.herokuapp.com/giangsinh?text=${namee}`)).pipe(fs.createWriteStream(__dirname + `/cache/giangsinh.png`)).on("close", callback);
      }