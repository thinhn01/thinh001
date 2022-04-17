module.exports.config = {
    name: "spongebob",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Thiệu Trung Kiên",
    description: "spongebob",
    commandCategory: "game",
    usages: "[text]",
    cooldowns: 3
};

module.exports.run = async ({ api, event, args }) => {
    const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
    let type = args.join(" ");
    if (!type) return api.sendMessage(`Vui lòng nhập chữ !`,event.threadID,event.messageID);
    else {
    let callback = function () {
                    api.sendMessage({ body : `Your text : ${type}`,
                        attachment: fs.createReadStream(__dirname + `/cache/sponge.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sponge.png`), event.messageID);
                };
                return request(encodeURI(`https://api.devs-hub.xyz/spongebob-timecard?text=${type}`)).pipe(fs.createWriteStream(__dirname + `/cache/sponge.png`)).on("close", callback);
            }
        }