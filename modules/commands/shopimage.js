module.exports.config = {
	name: "shopimage",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Shiron",
	description: "Xem ảnh từ api leanhtruong",
	commandCategory: "random-img",
	usages: "shopimage",
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
      return api.sendMessage(`🖼Danh sách hình ảnh\n[1]Nobra- 1000$\n[2]Dú - 2000$\n[3]Memevn - 1000$\n[4]Girlvn - 2000$\n[5]Boy - 1000$\n[6]Vitamin - 2000$\n[7]Cosplay - 2000$\n[8]Sexy - 2000$\n[9]Nude - 2000$\n[10]Bú cu - 2000$\n——————————\nReply số thứ tự để xem ảnh!`, event.threadID, (err, info) => {
        global.client.handleReply.push({
          type: "create",
          name: "shopimage",
          author: senderID,
          messageID: info.messageID
        });
      }, event.messageID);
    }
module.exports.handleReply = async function({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
      const axios = require("axios");
      const leanhtruong = "leanhtruong_KPKniWRgee0IXPt8qunw";
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
          var data = await Currencies.getData(event.senderID);
          var exp =  data.exp;
          var money = (await Currencies.getData(event.senderID)).money
          if(money < 1000) return api.sendMessage("Bạn cần 1000 đô để xem ảnh ?",event.threadID,event.messageID)
          Currencies.setData(event.senderID, options = {money: money - 1000})
          api.unsendMessage(handleReply.messageID);
          var callback = () => api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/waifu.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/waifu.png`), event.messageID);
          request(encodeURI(`http://api.leanhtruong.net/api/image?api_key=${leanhtruong}&image=nobra`))
            .pipe(fs.createWriteStream(__dirname + `/cache/waifu.png`))
            .on('close', () => callback());
          break;
        case "2":
          var data = await Currencies.getData(event.senderID);
          var exp =  data.exp;
          var money = (await Currencies.getData(event.senderID)).money
          if(money < 2000) return api.sendMessage("Bạn cần 2000 đô để xem ảnh ?",event.threadID,event.messageID)
          Currencies.setData(event.senderID, options = {money: money - 2000})
          api.unsendMessage(handleReply.messageID);
          var callback = () => api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/waifu.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/waifu.png`), event.messageID);
          request(encodeURI(`http://api.leanhtruong.net/api/image?api_key=${leanhtruong}&image=du`))
            .pipe(fs.createWriteStream(__dirname + `/cache/waifu.png`))
            .on('close', () => callback());
          break;
        case "3":
          var data = await Currencies.getData(event.senderID);
          var exp =  data.exp;
          var money = (await Currencies.getData(event.senderID)).money
          if(money < 1000) return api.sendMessage("Bạn cần 1000 đô để xem ảnh ?",event.threadID,event.messageID)
          Currencies.setData(event.senderID, options = {money: money - 1000})
          api.unsendMessage(handleReply.messageID);
          var callback = () => api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/waifu.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/waifu.png`), event.messageID);
          request(encodeURI(`http://api.leanhtruong.net/api/image?api_key=${leanhtruong}&image=memevn`))
            .pipe(fs.createWriteStream(__dirname + `/cache/waifu.png`))
            .on('close', () => callback());
          break;
        case "4":
                var data = await Currencies.getData(event.senderID);
                var exp =  data.exp;
                var money = (await Currencies.getData(event.senderID)).money
          if(money < 2000) return api.sendMessage("Bạn cần 2000 đô để xem ảnh ?",event.threadID,event.messageID)
          Currencies.setData(event.senderID, options = {money: money - 2000})
          api.unsendMessage(handleReply.messageID);
          var callback = () => api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/waifu.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/waifu.png`), event.messageID);
          request(encodeURI(`http://api.leanhtruong.net/api/image?api_key=${leanhtruong}&image=girlvn`))
            .pipe(fs.createWriteStream(__dirname + `/cache/waifu.png`))
            .on('close', () => callback());
          break;
        case "5":
                var data = await Currencies.getData(event.senderID);
          var exp =  data.exp;
                var money = (await Currencies.getData(event.senderID)).money
          if(money < 1000) return api.sendMessage("Bạn cần 1000 đô để xem ảnh ?",event.threadID,event.messageID)
          Currencies.setData(event.senderID, options = {money: money - 1000})
          api.unsendMessage(handleReply.messageID);
          var callback = () => api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/waifu.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/waifu.png`), event.messageID);
          request(`http://api.leanhtruong.net/api/image?api_key=${leanhtruong}&image=boy`)
            .pipe(fs.createWriteStream(__dirname + `/cache/waifu.png`))
            .on('close', () => callback());
          break;
        case "6":
        var data = await Currencies.getData(event.senderID);
          var exp =  data.exp;
        var money = (await Currencies.getData(event.senderID)).money
          if(money < 2000) return api.sendMessage("Bạn cần 2000 đô để xem ảnh ?",event.threadID,event.messageID)
          Currencies.setData(event.senderID, options = {money: money - 2000})
          api.unsendMessage(handleReply.messageID);
          var callback = () => api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/waifu.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/waifu.png`), event.messageID);
          request(encodeURI(`http://api.leanhtruong.net/api/image?api_key=${leanhtruong}&image=vitamin`))
            .pipe(fs.createWriteStream(__dirname + `/cache/waifu.png`))
            .on('close', () => callback());
          break;
        case "7":
        var data = await Currencies.getData(event.senderID);
          var exp =  data.exp;
        var money = (await Currencies.getData(event.senderID)).money
          if(money < 2000) return api.sendMessage("Bạn cần 2000 đô để xem ảnh ?",event.threadID,event.messageID)
          Currencies.setData(event.senderID, options = {money: money - 2000})
          api.unsendMessage(handleReply.messageID);
          var callback = () => api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/waifu.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/waifu.png`), event.messageID);
          request(encodeURI(`http://api.leanhtruong.net/api/image?api_key=${leanhtruong}&image=cosplay`))
            .pipe(fs.createWriteStream(__dirname + `/cache/waifu.png`))
            .on('close', () => callback());
          break;
        case "8":
        var data = await Currencies.getData(event.senderID);
          var exp =  data.exp;
        var money = (await Currencies.getData(event.senderID)).money
          if(money < 2000) return api.sendMessage("Bạn cần 2000 đô để xem ảnh ?",event.threadID,event.messageID)
          Currencies.setData(event.senderID, options = {money: money - 2000})
          api.unsendMessage(handleReply.messageID);
          var callback = () => api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/waifu.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/waifu.png`), event.messageID);
          request(encodeURI(`http://api.leanhtruong.net/api/image?api_key=${leanhtruong}&image=sexy`))
            .pipe(fs.createWriteStream(__dirname + `/cache/waifu.png`))
            .on('close', () => callback());
          break;
        case "9":
        var data = await Currencies.getData(event.senderID);
          var exp =  data.exp;
        var money = (await Currencies.getData(event.senderID)).money
          if(money < 2000) return api.sendMessage("Bạn cần 2000 đô để xem ảnh ?",event.threadID,event.messageID)
          Currencies.setData(event.senderID, options = {money: money - 2000})
          api.unsendMessage(handleReply.messageID);
          var callback = () => api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/waifu.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/waifu.png`), event.messageID);
          request(encodeURI(`http://api.leanhtruong.net/api/image?api_key=${leanhtruong}&image=nude`))
            .pipe(fs.createWriteStream(__dirname + `/cache/waifu.png`))
            .on('close', () => callback());
          break;
        case "10":
        var data = await Currencies.getData(event.senderID);
          var exp =  data.exp;
        var money = (await Currencies.getData(event.senderID)).money
          if(money < 2000) return api.sendMessage("Bạn cần 2000 đô để xem ảnh ?",event.threadID,event.messageID)
          Currencies.setData(event.senderID, options = {money: money - 2000})
          api.unsendMessage(handleReply.messageID);
          var callback = () => api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/waifu.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/waifu.png`), event.messageID);
          request(encodeURI(`http://api.leanhtruong.net/api/image?api_key=${leanhtruong}&image=bucu`))
            .pipe(fs.createWriteStream(__dirname + `/cache/waifu.png`))
            .on('close', () => callback());
          break;
        default:
        }
      }
      }
    }
