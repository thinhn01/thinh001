module.exports.config = {
	name: "mong",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Shiron",
	description: "Xem ảnh mông UwU",
	commandCategory: "Hình Ảnh",
	usages: "mong",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://hoangdogianguyenofficial.herokuapp.com/images/mong').then(res => {
	let ext = res.data.image.substring(res.data.image.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: `Số ảnh: ${res.data.count}\nAuthor: ${res.data.author}\nLink: ${res.data.image}`,
						attachment: fs.createReadStream(__dirname + `/cache/mong.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/mong.${ext}`), event.messageID);
				};
				request(res.data.image).pipe(fs.createWriteStream(__dirname + `/cache/mong.${ext}`)).on("close", callback);
			})
}