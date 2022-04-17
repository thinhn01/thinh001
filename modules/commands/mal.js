module.exports.config = {
    name: "mal",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Shiron",
    description: "Tìm kiếm anime thông qua MyAnimeList",
    commandCategory: "searchanime",
    usages: "[tên anime]",
    cooldowns: 5,
    dependencies: {
        "mal-scraper": "",
        "axios": "",
        "request": "",
        "fs": ""
    }
};
    module.exports.run = async function ({ api, args, event, Threads, Users }) {
        const malScraper = require('mal-scraper');
        const axios = require("axios");
        const request = require("request");
        const fs = require("fs-extra")
        const search = malScraper.search;
        let type = args[0];
    try {
        if (!args[0]) {
            return api.sendMessage("Vui lòng nhập tên anime", event.threadID, event.messageID);
        } else {
        const info = await malScraper.getInfoFromName(type);
        const content = [];
        content[0] = info.title;
        content[1] = info.url;
        content[2] = info.synopsis;
        content[3] = info.ranked;
        content[4] = info.episodes;
        const picture = info.picture;
        const trans = await axios.get(encodeURI(`https://api.popcat.xyz/translate?text=${content[2]}&to=vi`));
        var des = trans.data.translated;
        let callback = function() {
            return api.sendMessage({
                body: `Name: ${content[0]}\nUrl: ${content[1]}\nSố tập: ${content[4]}\nXếp hạng: ${content[3]}\nTóm tắt nội dung: ${des}`,
                attachment: fs.createReadStream(__dirname + `/cache/mal.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/mal.png`), event.messageID);
        };
        return request(encodeURI(picture))
            .pipe(fs.createWriteStream(__dirname + `/cache/mal.png`))
            .on("close", callback);
    }
  } catch (err) {
        return api.sendMessage("Đã xảy ra lỗi", event.threadID);
    }
}