module.exports.config = {
  name: "theuselessweb",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Trung Kiên",
  description: "",
  commandCategory: "News",
  usages: "",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
const axios = require('axios');
const res = await axios.get(`https://le31.glitch.me/other/theuselessweb`);
var theuselessweb = res.data.data
return api.sendMessage(` ${theuselessweb} `, event.threadID, event.messageID)
}