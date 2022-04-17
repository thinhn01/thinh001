module.exports.config = {
	name: "decodebin",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "tdunguwu",
	description: "decode pin thoi",
	commandCategory: "Other",
	usages: "Pin",
	cooldowns: 5,
	dependencies: {"axios" : ""}

	
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let decode = args.join(" ");
const res = await axios.get(`https://api.popcat.xyz/decode?binary=${decode}`);
var text = res.data.text;
if (!decode) return api.sendMessage("địt mẹ chưa nhập nội dung để coi kìa ", event.threadID, event.messageID);

return api.sendMessage(`${text}`, event.threadID, event.messageID)
}