module.exports.config = {
	name: "black",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Thiệu Trung Kiên",
	description: "black",
	commandCategory: "game",
	usages: "[text]",
	cooldowns: 3
};

module.exports.run = async ({ api, event, args }) => {
	const axios = require("axios");
    const request = require("request");
    const fs = require("fs-extra");
	let text = args.join(" ");
	if (!text) return api.sendMessage(`Vui lòng nhập chữ !`,event.threadID,event.messageID);
    else {
				const res1 = await axios.get(`https://api-ttk.herokuapp.com/textpro/blackpink?text=${text}`);
				var url1 = res1.data.url;
				let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/black.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/black.png`), event.messageID);
                };
                return request(encodeURI(url1))
                    .pipe(fs.createWriteStream(__dirname + `/cache/black.png`))
                    .on("close", callback);
			}
        }