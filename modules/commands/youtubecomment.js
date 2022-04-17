module.exports.config = {
	name: "youtubecomment",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Thiệu Trung Kiên",
	description: "Fake youtube-comment",
	commandCategory: "Game",
	usages: "[username | text]",
	cooldowns: 0,
	dependencies: {
		"canvas": "",
		"axios": "",
		"fs-extra": ""
	}
};

module.exports.circle = async (image) => {
	const jimp = global.nodemodule["jimp"];
	image = await jimp.read(image);
	image.circle();
	return await image.getBufferAsync("image/png");
}
module.exports.run = async function({
	api,
	event,
	args,
	Users
}) {
	let name1 = await Users.getNameUser(event.senderID);
	let {
		senderID,
		threadID,
		messageID
	} = event;
	const {
		loadImage,
		createCanvas
	} = require("canvas");
	const request = require('request');
	const credits1 = this.config.credits
	if (credits1 != "Thiệu Trung Kiên") {
		return api.sendMessage("Credits của anh đâu rồi alo ?", event.threadID, event.messageID);
	}
	const fs = global.nodemodule["fs-extra"];
	const axios = global.nodemodule["axios"];
	let pathImg = __dirname + "/cache/avt1.png";
	let pathAva = __dirname + "/cache/avt2.png";
	var ag = args.join(" ").split(' | ');
	if (!ag[0]) return api.sendMessage(`Vui lòng nhập nội dung comment!`, event.threadID, event.messageID);
	var text2 = ag[0];
	let Avatar = (
		await axios.get(
			`https://graph.facebook.com/${event.senderID}/picture?height=500&width=500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, {
				responseType: "arraybuffer"
			}
		)
	).data;
	fs.writeFileSync(pathAva, Buffer.from(Avatar, "utf-8"));
	avatar = await this.circle(pathAva);
	let name = await Users.getNameUser(event.senderID)
	let ytbcmt = (
		await axios.get(
			`https://some-random-api.ml/canvas/youtube-comment?username=${encodeURIComponent(name)}&comment=${encodeURIComponent(text2)}&avatar=https://i.imgur.com/nToSGkI.png&dark=true`, {
				responseType: "arraybuffer",
			})
	).data;
	fs.writeFileSync(pathImg, Buffer.from(ytbcmt, "utf-8"));
	let baseImage = await loadImage(pathImg);
	let baseAva = await loadImage(avatar);
	let canvas = createCanvas(baseImage.width, baseImage.height);
	let ctx = canvas.getContext("2d");
	ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
	ctx.drawImage(baseAva, 49, 49, 90, 90);
	ctx.beginPath();
	const imageBuffer = canvas.toBuffer();
	fs.writeFileSync(pathImg, imageBuffer);
	fs.removeSync(pathAva);
	return api.sendMessage({
			attachment: fs.createReadStream(pathImg)
		},
		threadID,
		() => fs.unlinkSync(pathImg),
		messageID
	);
};