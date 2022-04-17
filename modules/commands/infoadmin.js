const request = require('request');
const fs = global.nodemodule["fs-extra"]
module.exports.config = {
  name: "infoadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho fix by VĐT&NTH",
  description: "Kiểm tra thông tin ngơời dùng.",
  commandCategory: "Info",
  usages: "info",
  cooldowns: 1,
  dependencies: {
"request": ""
}
};

module.exports.run = async({api,event,args,client,Users,global,Currencies}) => {
var callback = () => api.sendMessage(
  {body:`梁Admin Bot梁\n
\n👀 Tên Admin: Hoàng Đỗ Gia Nguyên
❎ Tuổi: 17
👤Giới tính: Nam
💫 Chiều cao cân nặng: 1m70 60 kg
🐶 Username: Nguyên Trùm Florentino
☎️Phone Number: 0335953652
🐧UID: 100006622276498
🥺Zalo: 0335953652
😎 Quê quán: Hải Dương
👫 Gu: Dễ Thương + Hiền lành=)))
🌸 Tính cách: Lạnh lùng ít nói
🌀 Sở thích: Chơi game,ngủ,ăn
💘 Mối quan hệ: Hẹn Hò
🔗Profile: https://www.facebook.com/HoangDoGiaNguyenOwO`,
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(
        encodeURI(`https://graph.facebook.com/${100006622276498}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
       fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
       };