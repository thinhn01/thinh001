module.exports.config = {
	name: "emojify",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Trung Kiên",
	description: "Text Generator",
	commandCategory: "Game",
	usages: "[text]",
	cooldowns: 0
};

module.exports.run = function ({ event, args, api, getText }) {
var tip = args.join(" ");
if (!tip) return api.sendMessage(`Vui lòng nhập chữ`,event.threadID,event.messageID);
else {
	const axios = require('axios');
	const moment = require("moment-timezone");
	axios.get(`https://api.devs-hub.xyz/emojify?text=${encodeURIComponent(tip)}`).then(res => {
     let text = res.data.emojify;
     return api.sendMessage(`${text}`,event.threadID,event.messageID);
	});
}
}