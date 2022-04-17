module.exports.config = {
	name: "texttomorse",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Shiron",
	description: "texttomorse thui",
	commandCategory: "ủmg",
	usages: "ủmg",
	cooldowns: 5,
	dependencies: {"axios" : ""}

	
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let texttomorse = args.join(" ");
const res = await axios.get(`https://api.popcat.xyz/texttomorse?text=${texttomorse}`);
var morse = res.data.morse;
if (!texttomorse) return api.sendMessage("đéo nhập chữ thì cút", event.threadID, event.messageID);

return api.sendMessage(`${morse}`, event.threadID, event.messageID)
}