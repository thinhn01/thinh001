module.exports.config = {
	name: "mock",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "tdunguwu",
	description: "just mock",
	commandCategory: "Other",
	usages: "mock",
	cooldowns: 5,
	dependencies: {"axios" : ""}

	
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let mock = args.join(" ");
const res = await axios.get(`https://api.popcat.xyz/mock?text=${mock}`);
var text = res.data.text;

return api.sendMessage(`${text}`, event.threadID, event.messageID)
}