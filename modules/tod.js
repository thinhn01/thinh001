 module.exports.config = {
  name: "tod",
  version: "0.0.1",
  hasPermssion: 0,
  credits: "banledangyeuu",
  description: "Chơi trò truth or dare",
  commandCategory: "game-sp",
  usages: "tod [truth] [dare]",
  cooldowns: 5,
  dependencies:{
        "axios": ""
  },
};

module.exports.run = async function({ api, event, args }) {
    const axios = require('axios');
  if (args[0] == "dare" || args[0] == "thach" || args[0] == "thách") {
    const res = await axios.get(`https://le31.glitch.me/other/truthordare/dare/play`);
    return api.sendMessage(`=====DARE=====\n\n${res.data.data}`, event.threadID, event.messageID)
}
if (args[0] == "truth" || args[0] == "that" || args[0] == "thật") {
    const res = await axios.get(`https://le31.glitch.me/other/truthordare/truth/play`);
    return api.sendMessage(`=====TRUTH=====\n\n${res.data.data}`, event.threadID, event.messageID)
}
else if (args.join() == "") { 
    return api.sendMessage(`SAI ĐỊNH DẠNG?\n\n=====MEO BOT=====`, event.threadID, event.messageID)} 
}