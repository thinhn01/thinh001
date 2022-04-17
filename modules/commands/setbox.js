module.exports.config = {
    name: "setbox",
  version: "1.0.0",
    hasPermssion: 1,
    credits: "Shiron",
    description: "Chỉnh sửa cài đặt trong nhóm.",
    commandCategory: "box",
    usages: "Chỉnh sửa cài đặt trong nhóm.",
    cooldowns: 5,
    dependencies: {"request":"",
                 "fs-extra":""},
};

module.exports.run = async function({ api, event, args, Threads, Users }) {
    const fs = require("fs-extra");
const axios = require("axios");

/////////////////////////////////////////////////////

if (args[0] == "name") {
    const nameJoin = args.join(" ").slice(args[0].length)
      api.setTitle(nameJoin, event.threadID, async function (err) {
    if (err) return api.sendMessage("» Đã xảy ra lỗi!!", event.threadID, event.messageID);
       return api.sendMessage(`» Đã đổi tên nhóm thành ${nameJoin}`, event.threadID, event.messageID);
      });
    }
    else if ( args[0] == "emoji" || args[0] == "emj" || args[0] == "icon" ) {
      const iconBox = args[1];
      api.changeThreadEmoji(iconBox, event.threadID, async function (err) {
        if (err) return api.sendMessage("» Đã xảy ra lỗi!!", event.threadID, event.messageID);
        return api.sendMessage(`» Đã đổi emoji box thành ${iconBox}`, event.threadID, event.messageID);
      }); 
    }
    else if (args[0] == "avatar" || args[0] == "avt" || args[0] == "img" ) {

      const urlImage = event.messageReply.attachments[0].url || args.join(" ").slice(args[0].length)
      if (!urlImage) return api.sendMessage("» Vui lòng reply hoặc dán link 1 ảnh", event.threadID, event.messageID);
        let Avatar = (await axios.get( `${urlImage}`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + `/avatar${event.threadID}.png`, Buffer.from(Avatar, "utf-8") );
        api.changeGroupImage(fs.createReadStream(__dirname + `/avatar${event.threadID}.png`), event.threadID, async function (err) {
        if (err) return api.sendMessage("» Đã xảy ra lỗi!!", event.threadID, event.messageID);
        return api.sendMessage("» Thay đổi ảnh nhóm thành công", event.threadID, event.messageID);
        fs.unlinkSync(__dirname + `/avatar${event.threadID}.png`);
      });
    }
    else if (args[0] == "ad" || args[0] == 'admin') {
      if (!args[1]) return api.sendMessage(`» Vui lòng thêm các tag: [add/remove] [reply/tag] để thay đổi vai trò của người đó`, event.threadID, event.messageID); 
      if (args[1] == "add") {
        if (Object.keys(event.mentions) == 0) return api.changeAdminStatus(event.threadID, args.join(" "), true);
        else {
          for (var i = 0; i < Object.keys(event.mentions)
            .length; i++) api.changeAdminStatus(event.threadID, `${Object.keys(event.mentions)[i]}`, true)
          return;
        }
      } else if (args[1] == "del") {
        if (Object.keys(event.mentions) == 0) return api.changeAdminStatus(event.threadID, args.join(" "), true);
        else {
          for (var i = 0; i < Object.keys(event.mentions)
            .length; i++) api.changeAdminStatus(event.threadID, `${Object.keys(event.mentions)[i]}`, false)
          return;
        }
      }
      else return
    }
 else return api.sendMessage(`
» Cài đặt các tính năng trong nhóm:
setbox name | thay  đổi tên box
setbox emoji/icon | thay đổi emoji box
setbox avt/img | thay đổi ảnh box
setbox admin/ad add/remove | thêm hoặc xóa quản trị viên`
      , event.threadID, event.messageID);
}
