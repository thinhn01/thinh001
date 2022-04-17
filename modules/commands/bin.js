module.exports.config = {
	name: "bin",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "HĐGN",
	description: "Chuyển văn bản thành hệ nhị phânUwU",
	commandCategory: "Văn Bản",
	dependencies: {},
	usages: "text",
	cooldowns: 5
};

module.exports.run = ({ api, event, args }) => {
 let a = args.join(" ");
var msg = ""
for ( var i=0; i <a.length;i++) {
msg += a.charCodeAt(i).toString(2) + " "

}
api.sendMessage(msg,event.threadID,event.messageID)
};