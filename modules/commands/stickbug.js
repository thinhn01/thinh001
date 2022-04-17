module.exports.config = {
name: "stickbug",
version: "1.0.0",
hasPermssion: 0,
credits: "Shiron",
description: "Tạo video stickbug",
commandCategory: "video",
usages: "[stickbug]",
cooldowns: 5
};
module.exports.run = async function ({ api, args, event }) {
  const axios = require("axios");
  const fs = require("fs-extra");
  const request = require("request");
  const content = `${args.join(" ")}`;
  const avatar = event.messageReply ? ((event.messageReply.attachments.length > 0) ? event.messageReply.attachments[0].url : content[0]) : content[0];
  let callback = function () {
  return api.sendMessage({
          attachment: fs.createReadStream(__dirname + `/cache/pokemon.mp4`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pokemon.mp4`), event.messageID);
      };
      return request(`https://api-ttk.herokuapp.com/other/stickbug?url=${encodeURIComponent(avatar)}`)
        .pipe(fs.createWriteStream(__dirname + `/cache/pokemon.mp4`))
        .on("close", callback);
      }