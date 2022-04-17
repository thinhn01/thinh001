module.exports.config = {
    name: "moon",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "tdunguwu",
    description: "Tạo ra một avt trên taoanhdep.",
    commandCategory: "image",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "request": "",
        "axios": ""
    }, 
	envConfig: {
        APIKEY: "tdunguwu"
	}  
};
 
module.exports.run = async function ({ api, args, event, permssion }) {
    const request = require('request');
  const fs = require("fs-extra")
  const axios = require("axios")
  const { threadID, messageID, senderID, body } = event;
	  
    return api.sendMessage(`Vui lòng reply tin nhắn này để nhập Tên`, event.threadID, (err, info) => {
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
        	return api.sendMessage(`🔍Bạn đã chọn Tên là ${event.body}\n(Reply tin nhắn này nhập vào ngày của bạn)`,threadID , function (err, info) { 
        	  return global.client.handleReply.push({ 
        	  	type: 'text2',
        	  	name: 'moon',
        	  	author: senderID,
        	  	text1: event.body,
        	  	messageID: info.messageID
        	  })
        	}, messageID);
        }
        case "text2": { 
        	api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`🔍Bạn đã chọn ngày là ${event.body}\n(Reply tin nhắn này nhập vào tháng của bạn)`,threadID , function (err, info) { 
        		return global.client.handleReply.push({ 
        			type: 'text3',
        			name: 'moon',
        			author: senderID,
        			text1: handleReply.text1,
        			text2: event.body,
        			messageID: info.messageID
        		})
        	}, messageID);
        }
        case "text3": { 
        	api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`🔍Bạn đã chọn tháng là ${event.body}\n(Reply tin nhắn này nhập vào năm)`,threadID , function (err, info) { 
        		return global.client.handleReply.push({ 
        			type: 'text4',
        			name: 'moon',
        			author: senderID,
        			text1: handleReply.text1,
        			text2: handleReply.text2,
              text3: event.body,
        			messageID: info.messageID
        		})
        	}, messageID);
        }
        case "text4": { 
        	api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`🔍Bạn đã chọn năm là ${event.body}\n(Reply true / false tin nhắn này để hiện năm sinh của bạn)`,threadID , function (err, info) { 
        		return global.client.handleReply.push({ 
        			type: 'create',
        			name: 'moon',
        			author: senderID,
        			text1: handleReply.text1,
        			text2: handleReply.text2,
              text3: handleReply.text3,
              text4: event.body,
        			messageID: info.messageID
        		})
        	}, messageID);
        }
         
        case "create": {
            var text1 = handleReply.text1;
            var text2 = handleReply.text2;
            var text3 = handleReply.text3;
            var text4 = handleReply.text4;
            var text5 = event.body;
            
            api.unsendMessage(handleReply.messageID);
            api.sendMessage(`⏳ Đang khởi tạo chương trình tạo ảnh!`,threadID, (err, info) => {
            setTimeout(() => {
            	api.unsendMessage(info.messageID);
            	var callback = () => api.sendMessage({body:`Đây là ảnh của  ${nameSender} đây 🐧\nNgày tháng năm: ${text2}/${text3}/${text4}\nHiện ngày sinh? \n->${text5}`,mentions: arraytag,attachment: fs.createReadStream(__dirname + "/cache/moon.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/moon.png"),event.messageID);
                return request(encodeURI(`https://database-test.bangprocode.repl.co/edit/moon?apikey=DVB&name=${text1}&ngay=${text2}&thang=${text3}&nam=${text4}&namsinh=${text5}`)).pipe(fs.createWriteStream(__dirname + '/cache/moon.png')).on('close', () => callback());
            }, 1000);
          }, messageID);
        }
    }} 
					