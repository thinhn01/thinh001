module.exports.config = {
    name: "encode",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Trung Kiên",
    description: "",
    commandCategory: "Group",
    usages: "",
    cooldowns: 0
};

module.exports.run = function ({ event, args, api, getText }) {
var tip = args.join(" ");
if (!tip) return api.sendMessage(`Nhập chữ cần encode!`,event.threadID,event.messageID);
else {
    const axios = require('axios');
    axios.get(`https://some-random-api.ml/base64?encode=${encodeURIComponent(tip)}`).then(res => {
     let mess = res.data.base64;
     return api.sendMessage(`${mess}`,event.threadID,event.messageID);
    });
}
}