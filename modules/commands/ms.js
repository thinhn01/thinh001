module.exports.config = {
    name: "ms",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Shiron",
    description: "checking ping",
    commandCategory: "system",
    cooldowns: 0,
    dependencies: {
		"fast-speedtest-api": ""
	}
};

module.exports.run = async function({ api, event, args }) {
	const moment = require("moment-timezone");
  var time = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
  const timeStart = Date.now();
  return api.sendMessage('OK !', event.threadID, (err, info) => {
    setTimeout(() => {
      api.sendMessage(`Ping: ${(Date.now() - timeStart)}ms \n(TimeStart: ${time})`, event.threadID, event.messageID);
    }, 200);
  }, event.messageID);
}