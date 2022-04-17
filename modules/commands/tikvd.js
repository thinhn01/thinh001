module.exports.config = {
  name: "tikvd",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Shiron",
  description: "tải video hoặc audio tóc tai",
  commandCategory: "download",
  usages: "tikvd video <link video tóc tai> tikvd audio <link video tóc tai>",
  cooldowns: 5
};
module.exports.run = async ({ event, api, args }) => {
var all = args.join(" ").split(" ");
var link1 = all[0];
    link2 = all[1];
  if (!link2) return api.sendMessage('Vui lòng nhập link video tóc tai!', event.threadID, event.messageID);
const axios = require('axios');
const request = require('request');
const fs = require('fs-extra');

    if (args[0] == "video") {
      try {
      const res = await axios.get
(`http://api.leanhtruong.net/api-no-key/tiktok?url=${link2}`);

   var callback = () => api.sendMessage({body:`🪧ID:${res.data.id}\n👀Description:${res.data.title}`,attachment: fs.createReadStream(__dirname + "/cache/toptop.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/toptop.mp4"),event.messageID);
   return request(encodeURI(`${res.data.data_nowatermark[0].url}`)).pipe(fs.createWriteStream(__dirname + "/cache/toptop.mp4")).on('close',() => callback());     
}
catch (err) {
        console.log(err)
        return api.sendMessage("Yêu cầu của bạn không thể được xử lý!", event.threadID);
    }
} 
  
   else if (args[0] == "audio") {
     try {
      const res = await axios.get
(`http://api.leanhtruong.net/api-no-key/tiktok?url=${link2}`);

   var callback = () => api.sendMessage({body:`🪧ID:${res.data.id}\n👀Music:${res.data.data_music.title}`,attachment: fs.createReadStream(__dirname + "/cache/toptop.mp3")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/toptop.mp3"),event.messageID);
   return request(encodeURI(`${res.data.data_music.url}`)).pipe(fs.createWriteStream(__dirname + "/cache/toptop.mp3")).on('close',() => callback());     
}
catch (err) {
        console.log(err)        
        return api.sendMessage("Yêu cầu của bạn không thể được xử lý!", event.threadID);
    }
   }
}
                                         