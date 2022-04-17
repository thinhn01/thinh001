module.exports.config = {
    name: "bannerbw",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "HĐGN convert từ Goat",
    description: "<name> | <facebook> | <phone> | <mail> | <location> | [<link ảnh/reply>",
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
        messageID
    } = event;
    const senderID = "4"
    const content = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|");

    const apikey = "ntkhangGoatBot";
    const name = content[0],
        facebook = content[1],
        phone = content[2],
        mail = content[3],
        location = content[4],
        avatarurl = event.messageReply.attachments[0].url || content[6]
    if (!avatarurl) return api.sendMessage('Vui lòng reply hoặc nhập link hình ảnh', event.threadID);
    const params = {
        apikey,
        name,
        facebook,
        phone,
        mail,
        location,
        avatarurl
    };
    for (let i in params)
        if (!params[i]) return api.sendMessage(SyntaxError(), event.threadID)
    api.sendMessage('Đang khởi tạo hình ảnh, vui lòng chờ trong giây lát', event.threadID);
    const pathsave = __dirname + `/cache/bannerbw${Date.now()}.jpg`;
    let imageBuffer;
    axios.get("https://goatbot.tk/taoanhdep/banner-black-white", {
            params,
            responseType: "arraybuffer"
        })
        .then(data => {
            const imageBuffer = data.data;
            fs.writeFileSync(pathsave, Buffer.from(imageBuffer));
            api.sendMessage({
                body: `Banner <3`,
                attachment: fs.createReadStream(pathsave)
            }, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);
        })
        .catch(error => {
            const err = JSON.parse(error.response.data.toString());
            return api.sendMessage(`Đã xảy ra lỗi ${err.error} ${err.message}`, event.threadID);
        });
}