const fs = require("fs");
module.exports.config = {
name: "prefix",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Shiron",
	description: "",
	commandCategory: "noprefix",
	usages: "",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event,Threads, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	var { threadID, messageID, body, senderID } = event; const thread = global.data.threadData.get(threadID) || {};
	if (typeof thread["prefix"] !== "undefined" && thread["prefix"] == false) return;
var time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
		hours = hours < 10 ? "0" + hours : hours
		minutes = minutes < 10 ? "0" + minutes : minutes
		seconds = seconds < 10 ? "0" + seconds : seconds
const timeStart = Date.now();

	if (event.body.indexOf("prefix")==0 || (event.body.indexOf("Prefix")==0)) {
			api.sendMessage("",threadID, () => api.sendMessage(`Bot của Hoàng Đỗ Gia Nguyên đã hoạt động được: ${hours}:${minutes}:${seconds} 💙\nPing: ${Date.now() - timeStart}ms \nPrefix của bot là: \n ${global.config.PREFIX}`, threadID, messageID));
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": "prefix thành công",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "prefix success!",
  }
}

module.exports.run = async function ({ api, event, Threads, getText }) {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["prefix"] == "undefined" || data["prefix"] == true) data["prefix"] = false;
  else data["prefix"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["prefix"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}