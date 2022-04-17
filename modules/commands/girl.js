module.exports.config = {
	name: "girl",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Shiron",
	description: "Xem ảnh gái UwU",
	commandCategory: "Hình Ảnh",
	usages: "girl",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://hoangdogianguyenofficial.herokuapp.com/images/girl').then(res => {
	let ext = res.data.image.substring(res.data.image.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: `Số ảnh: ${res.data.count}\nAuthor: ${res.data.author}\nLink: ${res.data.image}`,
						attachment: fs.createReadStream(__dirname + `/cache/girl.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/girl.${ext}`), event.messageID);
				};
				request(res.data.image).pipe(fs.createWriteStream(__dirname + `/cache/girl.${ext}`)).on("close", callback);
			})
}