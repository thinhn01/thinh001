module.exports.config = {
	name: "linkfb",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mirai Team",//mod by sen
	description: "Lấy linkfb.",
	commandCategory: "Tiện ích",
	cooldowns: 5
};

module.exports.run = async function({ api, event, args, Users }) {
	let { senderID, threadID, messageID, mentions } = event;
	let menton = Object.keys(mentions);
if (menton.length == 0 && event.type != 'message_reply') {
  var name = (await Users.getData(senderID)).name
  var namee = args.join(" ") || name
}
else if (menton.length == 0 && event.type == 'message_reply') {
var name = (await Users.getData(event.messageReply.senderID)).name
  var namee = args.join(" ") || name;
}
else {
var name = (await Users.getData(menton[0])).name.split('@')[0];
  var namee = args.join(" ") || name;
}
	if(event.type == "message_reply") { 
	uid = event.messageReply.senderID
	return api.sendMessage(`Name: ${namee}\nLinkFB: https://facebook.com/${uid}`, event.threadID, event.messageID) }
	if (Object.keys(event.mentions) == 0) return api.sendMessage(`Name: ${namee}\nLinkFB: https://facebook.com/${event.senderID}`, event.threadID, event.messageID);
	else {
		for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`Name: ${Object.values(event.mentions)[i].replace('@', '')}\nLinkFB: https://facebook.com/${Object.keys(event.mentions)[i]}`, event.threadID);
		return;
	}
}