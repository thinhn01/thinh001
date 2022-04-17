module.exports.config = {
    name: "kanna",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "Trung Kiên",
    description: "Lô",
    commandCategory: "Game", 
    cooldowns: 5,
    dependencies: {
    "axios": "",
    "request": "",
    "fs-extra": ""
    }
};

module.exports.run = async function ({ args, api, event, Currencies, client, Users}) {
const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
let type = args.join(" ");
axios.get(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${encodeURIComponent(type)}`).then(res => {
    let img = res.data.message;
    let ext = res.data.message.substring(res.data.message.lastIndexOf(".") + 1);
    let callback = function () {
        api.sendMessage({
                        body: ``,
                        attachment: fs.createReadStream(__dirname + `/cache/kannagen.${ext}`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/kannagen.${ext}`), event.messageID);
    };
       request(res.data.message).pipe(fs.createWriteStream(__dirname + `/cache/kannagen.${ext}`)).on("close", callback);
})
}