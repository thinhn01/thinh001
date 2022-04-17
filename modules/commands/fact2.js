module.exports.config = {
    name: "fact2",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Trung Kiên",
    description: "Lô",
    commandCategory: "Game", 
    cooldowns: 5,
    dependencies: {
    "axios": "",
    "request": "",
    "canvas":"",
    "fs-extra": ""
    }
};

module.exports.run = async function ({ args, api, event, Currencies, client, Users, text}) {
const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
 var type = args.join(" ");
axios.get(`https://nekobot.xyz/api/imagegen?type=fact&text=${encodeURIComponent(type)}`).then(res => {
    let img = res.data.message;
    let ext = res.data.message.substring(res.data.message.lastIndexOf(".") + 1);
    let callback = function () {
        api.sendMessage({
                        body: ``,
                        attachment: fs.createReadStream(__dirname + `/cache/type111.${ext}`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/type111.${ext}`), event.messageID);
    };
       request(res.data.message).pipe(fs.createWriteStream(__dirname + `/cache/type111.${ext}`)).on("close", callback);
})
}