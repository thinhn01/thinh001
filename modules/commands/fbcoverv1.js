module.exports.config = {
name: "fbcoverv1",
version: "1.0.0",
hasPermssion: 0,
credits: "Shiron",
description: "Tạo ảnh bìa trên api taoanhdep của D-Jukie",
commandCategory: "image",
usages: "Tạo ảnh bìa trên api taoanhdep của D-Jukie",
cooldowns: 0,
dependencies: {
    "fs-extra": "",
    "request": "",
    "axios": "",
 },
 envConfig: { 
 	'APIKEY': 'LUVMIN'
 }
};
module.exports.run = async function ({ api, args, event, permssion }) {
	const { APIKEY } = global.config[this.config.name];
if ((this.config.credits) != "Shiron") { return api.sendMessage(`[ WARNING ] - Phát hiện credits modules ${this.config.name} đã bị thay đổi thành ${this.config.credits} bởi ADMINBOT ${global.config.BOTNAME} 😐 Dừng lại ngay!!!`, event.threadID, event.messageID)}
    const request = require('request');
  const fs = require("fs-extra")
  const axios = require("axios")
  const { threadID, messageID, senderID, body } = event;
  var io = (await axios.get('https://shiron-official.github.io/apikey-DATA/apikey_module.json')).data;
    	if (!io.fbcoverv1.find(i => i.toString() == APIKEY)) { 
    		return api.sendMessage('⚠️ APIKEY MODULES ĐÃ HẾT HẠN VUI LÒNG LIÊN HỆ FACEBOOK: https://www.facebook.com/HoangDoGiaNguyenOwO/ ĐỂ CẬP NHẬT KEY MỚI⚠️', threadID, messageID);
    	}
  if(!args[0]) return api.sendMessage('Vui lòng nhập tên chính?', threadID, messageID)
  else return api.sendMessage(`🔍 Bạn đã chọn tên chính là: ${args.join(" ").toUpperCase()}\n\n(Reply tin nhắn này và chọn tên phụ của bạn)`,event.threadID, (err, info) => {
     return global.client.handleReply.push({
        type: "tenphu",
        name: this.config.name,
        author: senderID,
        tenchinh: args.join(" ").toUpperCase(),
        messageID: info.messageID
      });
  },event.messageID);
}
module.exports.handleReply = async function ({ event, api, handleReply, Users }) {
	 if (handleReply.author != event.senderID) return;
  const { threadID, messageID, senderID, body } = event;
  const request = require('request');
  const fs = require("fs-extra");
  const axios = require("axios");
  var nameSender = (await Users.getData(event.senderID)).name
    var arraytag = [];
        arraytag.push({id: event.senderID, tag: nameSender});
   var tenchinh = handleReply.tenchinh;
  switch (handleReply.type) {
    case "tenphu": {
      var tenphu = handleReply.tenphu;
      var tenchinh = handleReply.tenchinh;
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`🔍 Bạn đã chọn tên phụ là ${event.body.toUpperCase()}\n\n(Reply tin nhắn này nhập vào số điện thoại của bạn)`,event.threadID, (err, info) => {
        return global.client.handleReply.push({
          type: "sdt",
          name: this.config.name,
          author: senderID,
          tenphu: event.body,
          tenchinh: tenchinh,
          messageID: info.messageID
        });
      },messageID)
    }
    case "sdt": {
      var sdt = handleReply.sdt;
      var tenchinh = handleReply.tenchinh;
      var tenphu = handleReply.tenphu;
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`🔍 Bạn đã chọn SDT là : ${event.body.toUpperCase()}\n\(Reply tin nhắn này để nhập email của bạn)`,event.threadID, (err, info) => {
        return global.client.handleReply.push({
          type: "email",
          name: this.config.name,
          author: senderID,
          sdt: event.body,
          tenchinh: tenchinh,
          tenphu: tenphu,
          messageID: info.messageID
        });
      },messageID) 
    }
	case "email": {
      var sdt = handleReply.sdt;
      var tenchinh = handleReply.tenchinh;
      var tenphu = handleReply.tenphu;
      var email = handleReply.email;
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`🔍 Bạn đã chọn email là : ${event.body.toUpperCase()}\n\(Reply tin nhắn này để nhập màu nền của bạn)`,event.threadID, (err, info) => {
        return global.client.handleReply.push({
          type: "color",
          name: this.config.name,
          author: senderID,
          sdt: sdt,
          tenchinh: tenchinh,
          tenphu: tenphu,
          email: event.body,
          messageID: info.messageID
        });
      },messageID) 
    }
    case "color": {
      var sdt = handleReply.sdt;
      var tenchinh = handleReply.tenchinh;
      var tenphu = handleReply.tenphu;
      var email = handleReply.email;
	  var color = handleReply.color;
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`🔍 Bạn đã chọn màu nền là : ${event.body.toUpperCase()}\n\(Reply tin nhắn này để nhập địa chỉ của bạn)`,event.threadID, (err, info) => {
        return global.client.handleReply.push({
          type: "create",
          name: this.config.name,
          author: senderID,
          sdt: sdt,
          tenchinh: tenchinh,
		  email: email,
          tenphu: tenphu,
          color: event.body,
          messageID: info.messageID
        });
      },messageID) 
    }
    case "create": {
      var address = event.body.toUpperCase()
      var name = handleReply.tenchinh.toUpperCase()
      var email = handleReply.email.toUpperCase()
      var subname = handleReply.tenphu.toUpperCase()
      var phoneNumber = handleReply.sdt.toUpperCase()
	  var color = handleReply.color.toUpperCase()
       api.unsendMessage(handleReply.messageID);
            api.sendMessage(`⏳ Đang khởi tạo chương trình tạo ảnh!`,threadID, (err, info) => {
            setTimeout(() => {
            	api.unsendMessage(info.messageID);
            	var callback = () => api.sendMessage({body:`Đây là ảnh bìa của ${nameSender}\nTên chính: ${name}\nID: ${senderID}\nĐịa chỉ: ${address}\nEmail: ${email}\nTên phụ: ${subname}\nSĐT: ${phoneNumber}\nMàu nền: ${color}`,mentions: arraytag,attachment: fs.createReadStream(__dirname + "/cache/fbcoverv1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/fbcoverv1.png"),event.messageID);
                return request(encodeURI(`https://hoangdogianguyenofficial.herokuapp.com/fbcover/v1?name=${name}&uid=${senderID}&address=${address}&email=${email}&subname=${subname}&sdt=${phoneNumber}&color=${color}`)).pipe(fs.createWriteStream(__dirname + '/cache/fbcoverv1.png')).on('close', () => callback());
            }, 1000);
          }, messageID);
        }
    }}