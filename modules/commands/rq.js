module.exports.config = {
	name: "rq",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "banledangyeuu",
	description: "",
	commandCategory: "1",
	usages: "",
	cooldowns: 10
};

module.exports.run = async ({ api, event }) => {
	const fs = require("fs-extra");
	const request = require("request");

var callback = () => api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/bg_ghep.png")}, event.threadID)
    return request(encodeURI(`https://i.imgur.com/0AVgRHK.png`)).pipe(fs.createWriteStream(__dirname+'/cache/bg_ghep.png')).on('close',() => callback())
}