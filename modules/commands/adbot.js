const request = require('request');
const fs = global.nodemodule["fs-extra"]
module.exports.config = {
  name: "adbot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho fix by VĐT&NTH",
  description: "Kiểm tra thông tin của các ADMINBOT",
  commandCategory: "Info",
  usages: "info",
  cooldowns: 0,
  dependencies: {
"request": ""
}
};

module.exports.run = async({ api, event, args ,client, Users, global, Currencies }) => {
   if (args.join() == "") {api.sendMessage("Bot hiện đang có  3 admin\n👉Sử dụng .adbot 1 để xem tt admin 1\n👉Sử dụng .adbot 2 để xem tt admin 2\n👉Sử dụng .adbot 3 để xem tt admin 3",event.threadID, event.messageID);
    }
    const moment = require("moment");
    const fs = require("fs");
  var time = moment.tz("Asia/Ho_Chi_minh").format("HH:mm:ss || DD/MM/YYYY");
    var data = await api.getUserInfo(event.senderID);
     var name = await data[event.senderID].name
if (args[0] == "1") {
  api.sendMessage({
    body:`👋Hi ${name}\n\n🕐Bây giờ là: ${time}\n\n💭Và Bạn đang xem thông tin admin Trinh\n\n梁ɴɢườɪ ʏêᴜ ᴄʜủ ʙᴏᴛ梁\n
    \n👀 Tên: Nguyễn Ngọc Diễm Trinh
    \n👤 😶 Giới tính: Nữ
    \n🐶 Username: Dtrinnn
    \n🐧UID: 100039247640166
    \n✅Liên hệ: https://www.facebook.com/Dtrinnn`,
    attachment: fs.createReadStream(__dirname + "/cache/admin/1.png")}, event.threadID)
       }
       else if (args[0] == "2") {
         api.sendMessage({
    body:`👋Hi ${name}\n\n🕐Bây giờ là: ${time}\n\n💭Và Bạn đang xem thông tin admin Nguyên\n\n梁𝙘𝙝𝙪̉ 𝙗𝙤𝙩梁\n
    \n👀 Tên: Hoàng Đỗ Gia Nguyên(Shiron)
    \n👤 😶Giới tính: Nam
    \n🐶 Username: HoangDoGiaNguyenOwO
    \n🐧UID: 100006622276498
    \n✅Liên hệ: https://www.facebook.com/HoangDoGiaNguyenOwO`,
    attachment: fs.createReadStream(__dirname + "/cache/admin/2.png")}, event.threadID)
       }
       else if (args[0] == "3") {
        api.sendMessage({
    body:`👋Hi ${name}\n\n🕐Bây giờ là: ${time}\n\n💭Và Bạn đang xem thông tin admin Min\n\n梁ɴɢườɪ ʏêᴜ ᴄʜủ ʙᴏᴛ梁\n
    👀 Tên: Diễm Trinh(Min) 
    \n👤 😶 Giới tính: Nữ
    \n🐶 Username: 100056544837260 
    \n🐧UID: 100056544837260 
    \n✅Liên hệ: https://www.facebook.com/profile.php?id=100056544837260`,
      attachment: fs.createReadStream(__dirname + "/cache/admin/3.png")}, event.threadID)
       };
     }