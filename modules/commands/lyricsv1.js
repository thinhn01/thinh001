module.exports.config = {
	name: "lyricsv1",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Shiron",
	description: "Xem lời bài hát",
	commandCategory: "Phương tiện",
	usages: "lyricsv1 [tên bài hát]",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
const axios = require("axios");
      const fs = require("fs-extra");
      const request = require("request");
      const { threadID, messageID, senderID } = event;
      return api.sendMessage(`Vui lòng reply tên bài hát!`, event.threadID, (err, info) => {
        global.client.handleReply.push({
          type: "lyrics1",
          name: "lyricsv1",
          author: senderID,
          messageID: info.messageID
        });
      }, event.messageID);
    }
module.exports.handleReply = async function ({ event, api, handleReply }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
    const timeStart = Date.now();
    if (handleReply.author != event.senderID) return;
    const { threadID, messageID, senderID } = event;
    var lyrics1 = handleReply.lyrics1;
    switch (handleReply.type) {
    case "lyrics1": {
    var lr = handleReply.lr;
    const res = await axios.get(encodeURI(`https://some-random-api.ml/lyrics?title=${event.body}`));
    const data = res.data
    var loibaihat = data.lyrics
    api.unsendMessage(handleReply.messageID);
    return api.sendMessage(`${loibaihat}`, event.threadID, event.messageID);
  }
}
}