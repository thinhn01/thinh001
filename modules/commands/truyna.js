module.exports.config = {
    name: "truyna",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Thiệu Trung Kiên",
    description: "Truy nã",
    commandCategory: "image",
    usages: " @tag",
    cooldowns: 5,
    dependencies: {"fs-extra": "","discord.js": "","discord-image-generation" :"","node-superfetch": ""}
};

module.exports.run = async ({ event, api, args, Users }) => {
  try{
  const axios = require("axios");
  const fs = require("fs-extra");
  const request = require("request");
  var id = Object.keys(event.mentions)[0] || event.senderID;
  const avatar = event.messageReply.attachments[0].url;
  const params = { avatar };
        const pathsave = __dirname + `/cache/wanted.jpg`;
        let imageBuffer;
        axios.get("https://api-ttk.herokuapp.com/other/wanted?avatar=", {
            params,
            responseType: "arraybuffer"
        })
        .then(data => {
            const imageBuffer = data.data;
            fs.writeFileSync(pathsave, Buffer.from(imageBuffer));
            api.sendMessage({
                attachment: fs.createReadStream(pathsave)
            }, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);
        })
        }catch(err) {
            return api.sendMessage(`Đã xảy ra lỗi`, event.threadID);
        };
}