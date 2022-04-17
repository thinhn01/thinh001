module.exports.config = {
name: "emoji",
version: "1.0.0",
hasPermssion: 0,
credits: "Shiron",
description: "Chuyển đổi emoji sang png ",
commandCategory: "pts",
usages: "emoji",
cooldowns: 5
};
module.exports.run = async function ({ api, args, event }) {
  const axios = require("axios");
  const fs = require("fs-extra");
  const request = require("request");
  try {
    let type = args[0];
    if (!args[0]) {
      return api.sendMessage("Vui lòng nhập emoji", event.threadID, event.messageID);
    } else {
      const res = await axios.get(`https://api-ttk.herokuapp.com/other/emoji2png?text=${encodeURIComponent(type)}&apikey=lawerteam`);
      var data = res.data.result;
      let callback = function () {
        return api.sendMessage({ attachment: fs.createReadStream(__dirname + `/cache/emoji2png.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/emoji2png.png`), event.messageID);
      };
      return request(encodeURI(data))
        .pipe(fs.createWriteStream(__dirname + `/cache/emoji2png.png`))
        .on("close", callback);
    }
  } catch (err) {
    return api.sendMessage("Không tìm thấy emoji này", event.threadID);
  }
}