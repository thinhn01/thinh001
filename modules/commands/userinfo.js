module.exports.config = {
    name: "userinfo",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Shiron",
    description: "",
    commandCategory: "image",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "request": "",
        "axios": ""
    }, 
    envConfig: {
        APIKEY: "LUVMIN"
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
        if (!io.userinfo.find(i => i.toString() == APIKEY)) { 
            return api.sendMessage('⚠️ APIKEY MODULES ĐÃ HẾT HẠN VUI LÒNG LIÊN HỆ FACEBOOK: https://www.facebook.com/HoangDoGiaNguyenOwO/ ĐỂ CẬP NHẬT KEY MỚI⚠️', threadID, messageID);
        }
     else {
    return api.sendMessage(`Vui lòng reply tin nhắn này để nhập tên của bạn`, event.threadID, (err, info) => {
        return global.client.handleReply.push({
            type: "vanity",
            name: this.config.name,
            author: senderID,
            messageID: info.messageID
        });
    }, event.messageID);
}
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
          
        case "vanity": { 
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(`🔍Bạn đã chọn tên là ${event.body}\n(Reply tin nhắn này nhập vào địa chỉ)`,threadID , function (err, info) { 
              return global.client.handleReply.push({ 
                type: 'gender',
                name: 'userinfo',
                author: senderID,
                vanity: event.body,
                messageID: info.messageID
              })
            }, messageID);
        }
        case "gender": { 
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(`🔍Bạn đã chọn địa chỉ là ${event.body}\n(Reply tin nhắn này nhập vào giới tính của bạn)`,threadID , function (err, info) { 
              return global.client.handleReply.push({ 
                type: 'create',
                name: 'userinfo',
                author: senderID,
                vanity: handleReply.vanity,
                location: event.body,
                messageID: info.messageID
              })
            }, messageID);
        }
        case "create": {
            var vanity = handleReply.vanity;
            var location = handleReply.location;
            var gender = event.body;
            api.unsendMessage(handleReply.messageID);
            api.sendMessage(`⏳ Đang khởi tạo chương trình tạo ảnh!`,threadID, (err, info) => {
            setTimeout(() => {
                api.unsendMessage(info.messageID);
                var callback = () => api.sendMessage({body:`Đây là ảnh của ${nameSender}\nHọ Và Tên: ${vanity}\nGiới tính: ${gender}\nĐịa chỉ: ${location}\nUid: ${senderID}`,mentions: arraytag,attachment: fs.createReadStream(__dirname + "/cache/fbcover.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/fbcover.png"),event.messageID);
                return request(encodeURI(`https://api-ttk.herokuapp.com/canvas/userinfo?location=${location}&name=${vanity}&gender=${gender}&vanity=${senderID}&uid=${senderID}`)).pipe(fs.createWriteStream(__dirname + '/cache/fbcover.png')).on('close', () => callback());
            }, 1000);
          }, messageID);
        }
    }} 