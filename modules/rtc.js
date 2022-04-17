module.exports.config = {
    name: "rtc",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "tdunguwu",
    description: "API DVB",// đừng đổi tên module nếu không muốn nó đứng càng không nên đổi credits nêu không muốn bị mất appstate và bay file <3
    commandCategory: "image",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "request": "",
        "axios": ""
    }
};
 
module.exports.run = async function ({ api, args, event, permssion }) {
    const request = require('request');
  const fs = require("fs-extra")
  const axios = require("axios")
  const { threadID, messageID, senderID, body } = event;
	  
    return api.sendMessage(`Vui lòng reply tin nhắn này để nhập họ và tên của bạn`, event.threadID, (err, info) => {
        return global.client.handleReply.push({
            type: "text1",
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
          
        case "text1": { 
        	api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`🔍Bạn đã chọn họ và tên là ${event.body}\n(Reply tin nhắn này nhập vào năm sinh của bạn)`,threadID , function (err, info) { 
        	  return global.client.handleReply.push({ 
        	  	type: 'text2',
        	  	name: 'rtc',
        	  	author: senderID,
        	  	text1: event.body,
        	  	messageID: info.messageID
        	  })
        	}, messageID);
        }
        case "text2": { 
        	api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`🔍Bạn đã chọn năm sinh là ${event.body}\n(Reply tin nhắn này nhập kiểu ảnh của bạn)\n(Chọn số 1 hoặc số 2)`,threadID , function (err, info) { 
        		return global.client.handleReply.push({ 
        			type: 'create',
        			name: 'rtc',
        			author: senderID,
        			text1: handleReply.text1,
        			text2: event.body,
        			messageID: info.messageID
        		})
        	}, messageID);
        }
        //xog rui ne pri
        
        case "create": {
            var text1 = handleReply.text1;
            var text2 = handleReply.text2;
            var text3 = event.body;
            const choose = parseInt(text3);
            	if (isNaN(choose)) return api.sendMessage("Vui lòng nhập 1 con số", event.threadID, event.messageID);
            	if (choose > 2 || choose < 1) return api.sendMessage("Lựa chọn không nằm trong danh sách.", event.threadID, event.messageID); 
            
            api.unsendMessage(handleReply.messageID);
            api.sendMessage(`⏳ Đang khởi tạo chương trình tạo ảnh!`,threadID, (err, info) => {
            setTimeout(() => {
            	api.unsendMessage(info.messageID);
            	var callback = () => api.sendMessage({body:`Đây là ảnh bìa của ${nameSender} 🐧\nUid: ${event.senderID}\nHọ Và Tên: ${text1}\nNăm sinh: ${text2}\nKiểu ảnh: ${text3}`,mentions: arraytag,attachment: fs.createReadStream(__dirname + "/cache/fbcover.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/fbcover.png"),event.messageID);
                return request(encodeURI(`https://database-test.bangprocode.repl.co/edit/bannertc?apikey=DVB&name=${text1}&age=${text2}&kieu=${text3}`)).pipe(fs.createWriteStream(__dirname + '/cache/fbcover.png')).on('close', () => callback());
            }, 1000);
          }, messageID);
        }
    }} 