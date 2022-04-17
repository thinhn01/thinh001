module.exports.config = {
name: "roblox",
version: "1.0.0",
hasPermssion: 0,
credits: "Shiron",
description: "Tìm thông tin roblox thông qua UID",
commandCategory: "media",
usages: "Tìm thông tin roblox thông qua UID",
cooldowns: 5
};
module.exports.run = async function ({ api, args, event, Threads, Users }) {
try {
   const axios = require("axios")
   const uid = parseInt(args[0]);
   if(!parseInt(args[0])) return api.sendMessage("Nhập uid chứ không phải kí tự!", event.threadID, event.messageID);
   const res = await axios.get(`https://users.roblox.com/v1/users/${uid}`);
   return api.sendMessage(`Tên : ${res.data.name}\nID : ${res.data.id}\nNgày tạo : ${res.data.created}\nBiệt danh : ${res.data.displayName}\nTiểu sử : ${res.data.description}`, event.threadID, event.messageID);
 } catch(err){ return api.sendMessage("Không tìm thấy uid người dùng!",event.threadID, event.messageID)
}
}


