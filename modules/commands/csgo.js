module.exports.config = {
  name: "csgo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Shiron",
  description: "Chọn đáp án đúng về item CSGO",
  commandCategory: "game-sp",
  usages: "csgo [type]",
  cooldowns: 10,
  dependencies: {
        "axios": ""
    },
  info: [
		{
			key: "type => rỗng",
			prompt: "Lấy câu hỏi random (sẽ nhận được tiền nếu trả lời đúng)",
      type: "AIR",
      example: ""
		},
    {
			key: "key => rifle/heavy/smg/pistol/grenade/knife",
			prompt: "Lấy câu hỏi theo type",
      type: "",
      example: "rifle"
		}
	],
};

module.exports.handleReply = async function({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
    if (event.senderID == api.getCurrentUserID()) return;
    const moment = require("moment-timezone");
    let { senderID, messageID, threadID } = event;
    let name = (await Users.getData(senderID)).name;
    var money = parseInt(Math.floor(Math.random() * 50))
    switch (handleReply.type) {
		case "rifle": 
		case "heavy":               
		case "smg":
    case "piston":
    case "grenade":
    case "knife":{
      if(event.body.toUpperCase() == handleReply.answer_) return api.sendMessage({body :`Chúc mừng ${name} đã trả lời đúng`}, handleReply.threadID, () => api.unsendMessage(handleReply.messageID));    
      else return api.sendMessage({body :`Sai rồi đáp án ${handleReply.answer_} mới đúng!`}, handleReply.threadID, () => api.unsendMessage(handleReply.messageID));    
    }
    default: {
      if(event.body.toUpperCase() == handleReply.answer_) return api.sendMessage({body :`Chúc mừng ${name} đã trả lời đúng, bạn nhận được ${money} đô`}, handleReply.threadID, () => api.unsendMessage(handleReply.messageID) + Currencies.increaseMoney(event.senderID, money));    
      else return api.sendMessage({body :`Sai rồi đáp án ${handleReply.answer_} mới đúng!`}, handleReply.threadID, () => api.unsendMessage(handleReply.messageID));    
     }
    }
};


module.exports.run = async function({api, event, args, client}) {
  const axios = require('axios');
  const fs = require("fs-extra");
  const {senderID, threadID, messageID} = event;
  	switch (args[0]) {
		case "rifle": 
		case "heavy":               
		case "smg":
    case "piston":
    case "grenade":
    case "knife":{
      let res = (await	axios.get(encodeURI(`https://ginxkin-api.herokuapp.com/api/csgo_quiz/${args[0]}`))).data;
      let csgo = (await axios.get(`${res.link}`, { responseType: "arraybuffer" } )).data;
      fs.writeFileSync( __dirname + "/cache/csgo.png", Buffer.from(csgo, "utf-8"));
      api.sendMessage({body:`=====[CSGO QUIZ]=====\n${res.body}\n=====[${args[0].toUpperCase()}]=====\n\nReply tin nhắn này với đáp án bạn đưa ra`,attachment: fs.createReadStream(__dirname + `/cache/csgo.png`)}, event.threadID, async (err, info) => {
                    global.client.handleReply.push({
                        type: args[0],
                        name: this.config.name,
                        senderID: event.senderID,
                        messageID:  info.messageID,
                        replyID: event.messageID, 
                        threadID: event.threadID,
                        answer_:res.answer
                    },event.messageID);
        await new Promise(resolve => setTimeout(resolve, 1000))
        })  
      /*api.sendMessage({body:`reply tin nhắn này với đáp án bạn đưa ra`}, event.threadID, async (err, info) => {
                    client.handleReply.push({
                        type: args[0],
                        name: this.config.name,
                        senderID: event.senderID,
                        messageID:  info.messageID,
                        replyID: event.messageID, 
                        threadID: event.threadID,
                        answer_:res.answer
                    },event.messageID);
        await new Promise(resolve => setTimeout(resolve, 1000))
        })*/     
      return fs.unlinkSync(__dirname + `/cache/csgo.png`);
		}
    default: {
      let res = (await	axios.get(encodeURI(`https://ginxkin-api.herokuapp.com/api/csgo_quiz/random`))).data;
      let csgo = (await axios.get(`${res.link}`, { responseType: "arraybuffer" } )).data;
      fs.writeFileSync( __dirname + "/cache/csgo.png", Buffer.from(csgo, "utf-8"));
      api.sendMessage({body:`=====[CSGO QUIZ]=====\n${res.body}\n=====[RANDOM]=====\n\nReply tin nhắn này với đáp án bạn đưa ra`,attachment: fs.createReadStream(__dirname + `/cache/csgo.png`)}, event.threadID, async (err, info) => {
                    global.client.handleReply.push({
                        type: "random",
                        name: this.config.name,
                        senderID: event.senderID,
                        messageID:  info.messageID,
                        replyID: event.messageID, 
                        threadID: event.threadID,
                        answer_:res.answer
                    },event.messageID);
        await new Promise(resolve => setTimeout(resolve, 1000))
        })  
      /*api.sendMessage({body:`reply tin nhắn này với đáp án bạn đưa ra`}, event.threadID, async (err, info) => {
                    client.handleReply.push({
                        type: "random",
                        name: this.config.name,
                        senderID: event.senderID,
                        messageID:  info.messageID,
                        replyID: event.messageID, 
                        threadID: event.threadID,
                        answer_:res.answer
                    },event.messageID);
        await new Promise(resolve => setTimeout(resolve, 1000))
        }) */     
      return fs.unlinkSync(__dirname + `/cache/csgo.png`);
    }
    }
}