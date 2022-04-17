module.exports.config = {
    name: "gban",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "tdunguwu",
    description: "",
    commandCategory: "no",
    cooldowns: 0
};
module.exports.run = async function ({ api, args, event, Threads, Users }) {
  const axios = require('axios');
  const res = await axios.get('https://raw.githubusercontent.com/Shiron-Official/apikey-DATA/main/gban.json')
  const data = res.data.data
//for (let stt in data) { 
 //var gban = data[stt]
//}
if(event.senderID == data) {
  return api.sendMessage('bạn bị nqu à =)))', event.threadID, event.messageID)
} else {
   return api.sendMessage('ok', event.threadID, event.messageID)
}
}