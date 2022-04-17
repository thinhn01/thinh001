module.exports.config = {
	name: "waifu",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Shiron",
	description: "Xem ảnh từ api Kadeer",
	commandCategory: "random-img",
	usages: "waifu",
	cooldowns: 5
};

module.exports.run = async({ api, event, Currencies }) => {
      const axios = require("axios");
      const fs = require("fs-extra");
      const request = require("request");
      const {
        threadID,
        messageID,
        senderID
      } = event;
      return api.sendMessage(`===Danh sách waifu===\n 1/Chitanda\n2/Violet\n3/Sagiri\n4/Lucy\n5/Kurumi\n6/Rem\n7/Kanna\n8/Umaru\n——————————\nReply số thứ tự để xem ảnh!`, event.threadID, (err, info) => {
        global.client.handleReply.push({
          type: "create",
          name: "waifu",
          author: senderID,
          messageID: info.messageID
        });
      }, event.messageID);
    }
module.exports.handleReply = async function({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
      const axios = require("axios");
      const fs = require("fs-extra");
      const request = require("request");
      const timeStart = Date.now();
      const {
        threadID,
        messageID,
        senderID
      } = event;
      switch (handleReply.type) {
      case "create": {
        switch (event.body) {
        case "1":
          const res = await axios.get(`https://apichitanda.khoahoang3.repl.co/`);
          api.unsendMessage(handleReply.messageID);
          let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
          var callback = () => api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/waifu.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/waifu.${ext}`), event.messageID);
          request(res.data.data)
            .pipe(fs.createWriteStream(__dirname + `/cache/waifu.${ext}`))
            .on('close', () => callback());
          break;
        case "2":
          const res1 = await axios.get(`https://apiviolet.khoahoang3.repl.co/`);
          api.unsendMessage(handleReply.messageID);
          let ext1 = res1.data.data.substring(res1.data.data.lastIndexOf(".") + 1);
          var callback = () => api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/waifu.${ext1}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/waifu.${ext1}`), event.messageID);
          request(res1.data.data)
            .pipe(fs.createWriteStream(__dirname + `/cache/waifu.${ext1}`))
            .on('close', () => callback());
          break;
        case "3":
          const res2 = await axios.get(`https://apisagiri.khoahoang3.repl.co/`);
          api.unsendMessage(handleReply.messageID);
          let ext2 = res2.data.data.substring(res2.data.data.lastIndexOf(".") + 1);
          var callback = () => api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/waifu.${ext2}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/waifu.${ext2}`), event.messageID);
          request(res2.data.data)
            .pipe(fs.createWriteStream(__dirname + `/cache/waifu.${ext2}`))
            .on('close', () => callback());
          break;
        case "4":
          const res3 = await axios.get(`https://apilucy.khoahoang3.repl.co/`);
          api.unsendMessage(handleReply.messageID);
          let ext3 = res3.data.data.substring(res3.data.data.lastIndexOf(".") + 1);
          var callback = () => api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/waifu.${ext3}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/waifu.${ext3}`), event.messageID);
          request(res3.data.data)
            .pipe(fs.createWriteStream(__dirname + `/cache/waifu.${ext3}`))
            .on('close', () => callback());
          break;
        case "5":
          const res4 = await axios.get(`https://apikurumi.khoahoang3.repl.co/`);
          let ext4 = res4.data.data.substring(res4.data.data.lastIndexOf(".") + 1);
          api.unsendMessage(handleReply.messageID);
          var callback = () => api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/waifu.${ext4}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/waifu.${ext4}`), event.messageID);
          request(res4.data.data)
            .pipe(fs.createWriteStream(__dirname + `/cache/waifu.${ext4}`))
            .on('close', () => callback());
          break;
        case "6":
          const res5 = await axios.get(`https://apirem.khoahoang3.repl.co/`);
          api.unsendMessage(handleReply.messageID);
          let ext5 = res5.data.data.substring(res5.data.data.lastIndexOf(".") + 1);
          var callback = () => api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/waifu.${ext5}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/waifu.${ext5}`), event.messageID);
          request(res5.data.data)
            .pipe(fs.createWriteStream(__dirname + `/cache/waifu.${ext5}`))
            .on('close', () => callback());
          break;
        case "7":
          const res6 = await axios.get(`https://apikanna.khoahoang3.repl.co/`);
          api.unsendMessage(handleReply.messageID);
          let ext6 = res6.data.data.substring(res6.data.data.lastIndexOf(".") + 1);
          var callback = () => api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/waifu.${ext6}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/waifu.${ext6}`), event.messageID);
          request(res6.data.data)
            .pipe(fs.createWriteStream(__dirname + `/cache/waifu.${ext6}`))
            .on('close', () => callback());
          break;
          case "8":
          const res7 = await axios.get(`https://apiumaru.khoahoang3.repl.co/`);
          let ext7 = res7.data.data.substring(res7.data.data.lastIndexOf(".") + 1);
          api.unsendMessage(handleReply.messageID);
          var callback = () => api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/waifu.${ext7}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/waifu.${ext7}`), event.messageID);
          request(res7.data.data)
            .pipe(fs.createWriteStream(__dirname + `/cache/waifu.${ext7}`))
            .on('close', () => callback());
          break;
        default:
        }
      }
      }
    }
