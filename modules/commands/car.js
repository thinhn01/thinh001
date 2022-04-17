module.exports.config = {
	name: "car",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Trung Kien",
	description: "Random ảnh car :))",
	commandCategory: "random-img",
	usages: "car",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://api.popcat.xyz/car').then(res => {
	let ext = res.data.image.substring(res.data.image.lastIndexOf(".") + 1);
	let title = res.data.title;
	let callback = function () {
					api.sendMessage({
						body : `${title}`,
						attachment: fs.createReadStream(__dirname + `/cache/tw.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/tw.${ext}`), event.messageID);
				};
				request(res.data.image).pipe(fs.createWriteStream(__dirname + `/cache/tw.${ext}`)).on("close", callback);
			})
}