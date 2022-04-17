module.exports.config = {
        name: "douyin",
        version: "1.0.0",
        hasPermssion: 0,
        credits: "Lawer Team",
        description: "Tiktok douyin",
        commandCategory: "Phương tiện",
	    usages: "douyin",
	    cooldowns: 0,
        envConfig: {
        APIKEY: "KeyTest" //Nhập APIKey của bạn ở đây hoặc file config.json
    }
};
var getLink = "https://manhict.tech/tiktok/douyin?link=";
var numberSize = 52000000;
var sizeN = "50MB";
var rdPath = `tikdouyin` + Math.floor(Math.random() * 99999999999);
module.exports.run = async function({ event, api, args, global }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const { APIKEY } = global.config[this.config.name];
    if (!args.join(" ").indexOf("https://") == 0) { return api.sendMessage("Bạn phải nhập url video tiktok douyin !"); }
    api.sendMessage(`Đang tải, vui lòng đợi...`, (err, info) => setTimeout(() => { api.unsendMessage(info.messageID) }, 20000));
    const linkurl = (args.join(" ")).trim();
    try {
        let { data } = await axios.get(`${getLink}${linkurl}&apikey=${APIKEY}`);
        if (data.error) return api.sendMessage(data.error);
        let desc = data.data.desc;
        let link = data.url[1].vnmhd;
        let linkSD = data.url[0].vnm;
        var shortLink = await require("tinyurl").shorten(link);
        var path = __dirname + `/cache/${rdPath}.mp4`;
        const getms = (await axios.get(link, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(path, Buffer.from(getms, "utf-8"));
        if (fs.statSync(path).size > numberSize) {
            api.sendMessage(`Link Tải Full HD: ${shortLink}\n\nKhông thể gửi video chất lượng HD vì dung lượng lớn hơn ${sizeN}\n\nTiến hành tải video có chất lượng SD...`, () => fs.unlinkSync(path));
            const getms = (await axios.get(linkSD, { responseType: "arraybuffer" })).data;
            fs.writeFileSync(path, Buffer.from(getms, "utf-8"));
            const msg = await api.sendMessage({ body: desc, attachment: fs.createReadStream(path) }, () => fs.unlinkSync(path));
            return msg;
        } else {
            api.sendMessage(`Tiến hành gửi video Full HD...\n\nGửi được hay không tuỳ video vch:))`, (err, info) => setTimeout(() => { api.unsendMessage(info.messageID) }, 35000));
            const msg = await api.sendMessage({ body: `Link Tải Full HD: ${shortLink}`, attachment: fs.createReadStream(path) }, () => fs.unlinkSync(path));
            return msg;
        }
    } catch (e) {
        return api.sendMessage('Không thể xử lý yêu cầu của bạn!!!');
    }
}