module.exports.config = {
name: "fbcoverv2",
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
    const {
        threadID,
        messageID,
        senderID,
        body
    } = event;
    var io = (await axios.get('https://shiron-official.github.io/apikey-DATA/apikey_module.json')).data;
      if (!io.fbcoverv2.find(i => i.toString() == APIKEY)) { 
        return api.sendMessage('⚠️ APIKEY MODULES ĐÃ HẾT HẠN VUI LÒNG LIÊN HỆ FACEBOOK: https://www.facebook.com/HoangDoGiaNguyenOwO/ ĐỂ CẬP NHẬT KEY MỚI⚠️', threadID, messageID);
      }
    return api.sendMessage(`[!]Vui lòng reply tin nhắn này để nhập họ và tên[!]`, event.threadID, (err, info) => {
        return global.client.handleReply.push({
            type: "name",
            name: this.config.name,
            author: senderID,
            messageID: info.messageID
        });
    }, event.messageID);
}
module.exports.handleReply = async function({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
    var nameSender = (await Users.getData(event.senderID)).name
    var arraytag = [];
        arraytag.push({id: event.senderID, tag: nameSender});
    if (handleReply.author != event.senderID) return;
    const {
        threadID,
        messageID,
        senderID
    } = event;
    switch (handleReply.type) {
        case "name": {
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(`🔍Bạn đã chọn họ và tên là ${event.body}\n\nReply tin nhắn này để nhập ngày sinh`, threadID, function(err, info) {
                return global.client.handleReply.push({
                    type: "sinhnhat",
                    name: "fbcoverv2",
                    author: senderID,
                    name1: event.body,
                    messageID: info.messageID
                });
            }, messageID)
        }
        case "sinhnhat": {
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(`🔍Bạn đã chọn ngày sinh là ${event.body}\n\nReply tin nhắn này để nhập tình trạng`, threadID, function(err, info) {
                return global.client.handleReply.push({
                    type: "status",
                    name: "fbcoverv2",
                    author: senderID,
                    name1: handleReply.name1,
                    sinhnhat: event.body,
                    messageID: info.messageID
                });
            }, messageID)
        }
        case "status": {
            const text = handleReply.text;
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(`🔍Bạn đã chọn tình trạng là ${event.body}\n\nReply tin nhắn này để nhập địa chỉ hiện tại`, threadID, function(err, info) {
                return global.client.handleReply.push({
                    type: "diachi",
                    name: "fbcoverv2",
                    author: senderID,
                    name1: handleReply.name1,
                    sinhnhat: handleReply.sinhnhat,
                    status: event.body,
                    messageID: info.messageID
                });
            }, messageID)
        }
        case "diachi": {
            const text = handleReply.text;
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(`🔍Bạn đã chọn địa chỉ hiện tại là ${event.body}\n\nReply tin nhắn này để nhập quê quán`, threadID, function(err, info) {
                return global.client.handleReply.push({
                    type: "hometown",
                    name: "fbcoverv2",
                    author: senderID,
                    name1: handleReply.name1,
                    sinhnhat: handleReply.sinhnhat,
                    status: handleReply.status,
                    diachi: event.body,
                    messageID: info.messageID
                });
            }, messageID)
        }
        case "hometown": {
            const text = handleReply.text;
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(`🔍Bạn đã chọn quê quán của bạn là ${event.body}\n\nReply tin nhắn này để nhập số người theo dõi`, threadID, function(err, info) {
                return global.client.handleReply.push({
                    type: "follow",
                    name: "fbcoverv2",
                    author: senderID,
                    name1: handleReply.name1,
                    sinhnhat: handleReply.sinhnhat,
                    status: handleReply.status,
                    diachi: handleReply.diachi,
                    hometown: event.body,
                    messageID: info.messageID
                });
            }, messageID)
        }
        case "follow": {
            const text = handleReply.text;
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(`🔍Bạn đã nhập số người theo dõi là ${event.body}\n\nReply tin nhắn này để nhập giới tính`, threadID, function(err, info) {
                return global.client.handleReply.push({
                    type: "create",
                    name: "fbcoverv2",
                    author: senderID,
                    name1: handleReply.name1,
                    sinhnhat: handleReply.sinhnhat,
                    status: handleReply.status,
                    diachi: handleReply.diachi,
                    hometown: handleReply.hometown,
                    follow: event.body,
                    messageID: info.messageID
                });
            }, messageID)
        }
        case "create": {
            var name2 = handleReply.name1;
            var sinhnhat = handleReply.sinhnhat;
            var status = handleReply.status;
            var diachi = handleReply.diachi;
            var hometown = handleReply.hometown;
            var follow = handleReply.follow;
            var gender = event.body;
            api.unsendMessage(handleReply.messageID);
            api.sendMessage(`⏳ Đang khởi tạo chương trình tạo ảnh!`,threadID, (err, info) => {
            setTimeout(() => {
              api.unsendMessage(info.messageID);
            var callback = () => api.sendMessage({body:`Đây là ảnh bìa của ${nameSender}\nID: ${event.senderID}\nHọ và Tên: ${name2}\nNgày Sinh: ${sinhnhat}\nTình trạng: ${status}\nSống tại: ${diachi}\nĐến từ: ${hometown}\nFollow: ${follow}\nGiới tính: ${gender}`,mentions: arraytag,attachment: fs.createReadStream(__dirname + "/cache/fbcoverv2.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/fbcoverv2.png"),event.messageID);
            return request(encodeURI(`https://hoangdogianguyenofficial.herokuapp.com/fbcover/v3?uid=${event.senderID}&name=${name2}&birthday=${sinhnhat}&love=${status}&location=${diachi}&hometown=${hometown}&follow=${follow}&gender=${gender}`)).pipe(fs.createWriteStream(__dirname + '/cache/fbcoverv2.png')).on('close', () => callback());
            }, 1000);
          }, messageID);
        }
    }
}