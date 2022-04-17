module.exports.config = {
	name: "selflisten",	
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Shiron",
	description: "Bật tắt chế độ selfListen (acc bot đem chat lệnh vẫn chạy được lệnh đó)",
	commandCategory: "Group",
	usages: "selflisten on/off",
	cooldowns: 0,
};

module.exports.run = async function({ api, event, args }) {
	const permission = ["100006622276498"];
if (!permission.includes(event.senderID)) return api.sendMessage("đéo có tuổi hihi UwU", event.threadID, event.messageID);
  const { writeFileSync, readFileSync } = require("fs-extra");
  const { threadID, senderID, messageID } = event;
  const fs = require("fs-extra");
  const configPath = global.client.configPath;
  const config = require(configPath);
  const { selfListen } = global.config;
  if (config.FCAOption.selfListen == false) {
    config.FCAOption.selfListen = true;
    api.sendMessage("Đã bật chế độ selfListen.", threadID, messageID);
  } else {
    config.FCAOption.selfListen = false;
    api.sendMessage("Đã tắt chế độ selfListen.", threadID, messageID);
  }
  fs.writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
  return;
}