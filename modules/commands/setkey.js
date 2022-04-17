module.exports.config = {
	name: "setkey",	
    version: "1.0.0",
	hasPermssion: 2,
	credits: "Shiron",
	description: "Chỉnh sửa APIKEY config.json",
	commandCategory: "config.json",
	usages: "setkey [apikey]",
	cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
const fs = require("fs-extra");
const configPath  = global.client.configPath
const config = require(configPath);
    config.video.YOUTUBE_API = args.join(" ");
    config.sing.YOUTUBE_API = args.join(" ");
    config.ytbmp4.YOUTUBE_API = args.join(" ");
    fs.writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
    api.sendMessage("Đã thay APIKEY vào config.json", event.threadID, () => require("node-cmd").run("pm2 restart 0")); 
}