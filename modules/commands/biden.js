module.exports.config = {
  name: "biden",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Shiron",
  description: "biden",
  commandCategory: "game",
  usages: "[text]",
  cooldowns: 3
};

module.exports.run = async ({ api, event, args }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  let type = args.join(" ");
  if (!type) return api.sendMessage(`Vui lòng nhập chữ !`,event.threadID,event.messageID);
  else {
  let callback = function () {
          api.sendMessage({
            attachment: fs.createReadStream(__dirname + `/cache/biden.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/biden.png`), event.messageID);
        };
        return request(encodeURI(`https://api.popcat.xyz/biden?text=${type}`)).pipe(fs.createWriteStream(__dirname + `/cache/biden.png`)).on("close", callback);
      }
    }