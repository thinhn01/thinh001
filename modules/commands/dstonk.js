module.exports.config = {
	name: "dstonk",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "tdunguwu",
	description: "dstonk",
	commandCategory: "image",
	usages: "dstonk",
	cooldowns: 5,
	dependencies: { "fs-extra": "", "discord.js": "", "discord-image-generation": "", "node-superfetch": "" }
};

module.exports.run = async ({ event, api, args, Users }) => {
	const DIG = global.nodemodule["discord-image-generation"];
	const Discord = global.nodemodule['discord.js'];
	const request = global.nodemodule["node-superfetch"];
	const fs = global.nodemodule["fs-extra"];
	if (this.config.credits != 'tdunguwu') {
		console.log('\x1b[33m[ WARN ]\x1b[37m » Đổi credits con cặc đjt mẹ mày luôn đấy con chó:))');
		return api.sendMessage('[ WARN ] Phát hiện người điều hành bot ', event.threadID, event.messageID);
	}
	let { senderID, threadID, messageID } = event;
	var id = Object.keys(event.mentions)[0] || event.senderID;

	var namee = (await Users.getData(senderID)).name
	var avatar1 = (await request.get(`https://graph.facebook.com/${senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
	var avatar2 = (await request.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;


	let img = await new DIG.DoubleStonk().getImage(avatar1, avatar2);
	let attach = new Discord.MessageAttachment(img);
	var path_DoubleStonk = __dirname + "/cache/DoubleStonk.png";
	fs.writeFileSync(path_DoubleStonk, attach.attachment);
	api.sendMessage({ attachment: fs.createReadStream(path_DoubleStonk) }, event.threadID, () => fs.unlinkSync(path_DoubleStonk), event.messageID);
}