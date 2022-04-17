module.exports.config = {
	name: "doublestruck",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Shiron",
	description: "doublestruck thui",
	commandCategory: "ll",
	usages: "uk",
	cooldowns: 5,
	dependencies: {"axios" : ""}

	
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let decode = args.join(" ");
const res = await axios.get(`https://api.popcat.xyz/doublestruck?text=${decode}`);
var text = res.data.text;
if (!decode) return api.sendMessage("đéo nhập chữ thì cút", event.threadID, event.messageID);

return api.sendMessage(`${text}`, event.threadID, event.messageID)
}