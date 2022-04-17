module.exports.config = {
    name: "banner",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie convert từ Goat",
    description: "<prefix> banner <facebook> | <zalo> | <phone> | <momo> | <title> | <subtitle> | <titlefacebook> | <info> | [<link ảnh> | hoặc reply hình ảnh]",
    commandCategory: "Tiện ích",
    usages: "",
    cooldowns: 5,
};

module.exports.run = async function ({
    api,
    event,
    args
}) {
    const axios = global.nodemodule['axios'];
    const fs = global.nodemodule["fs-extra"];
    const {
        threadID,
        messageID,
    } = event;
    const senderID = "4"
    const content = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|");
    const apikey = "ntkhangGoatBot";
    const facebook = content[0],
        zalo = content[1],
        phone = content[2],
        momo = content[3],
        title = content[4],
        subtitle = content[5],
        titlefacebook = content[6],
        info = content[7];
    const avatarurl = event.messageReply.attachments[0].url || content[8]
    if (!avatarurl) return api.sendMessage('Vui lòng reply hoặc nhập link hình ảnh', event.threadID);
    const params = {
        facebook,
        zalo,
        phone,
        momo,
        title,
        subtitle,
        titlefacebook,
        info,
        avatarurl,
        apikey
    };
    for (let i in params)
        if (!params[i]) return api.sendMessage(SyntaxError(), event.threadID)
    api.sendMessage('Đang khởi tạo hình ảnh, vui lòng chờ trong giây lát', event.threadID);
    const pathsave = __dirname + `/cache/banner${event.senderID}.jpg`;
    let imageBuffer;
    try {
        const response = await axios.get("https://goatbot.tk/taoanhdep/banner1", {
            params,
            responseType: "arraybuffer"
        });
        imageBuffer = response.data;

    } catch (error) {
        console.log(error);
        const err = JSON.parse(error.response.data.toString());
        return api.sendMessage(`Đã xảy ra lỗi ${err.error} ${err.message}`, event.threadID);
    }
    fs.writeFileSync(pathsave, Buffer.from(imageBuffer, "utf-8"));
    api.sendMessage({
        body: `Banner <3`,
        attachment: fs.createReadStream(pathsave)
    }, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);
}