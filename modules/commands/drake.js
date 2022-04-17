module.exports.config = {
  name: "drake",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thiệu Trung Kiên",
  description: "drake",
  commandCategory: "game",
  usages: "[text]",
  cooldowns: 3
};

module.exports.run = async ({ api, event, args }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var linkimage = ["https://cdn.discordapp.com/attachments/877495352272510988/899968851901579284/nea_nomnomnumnum.jpg", "https://cdn.discordapp.com/attachments/877495352272510988/899968860034334750/Whos_Your_Anime_Boyfriend_.png", "https://cdn.discordapp.com/attachments/877495352272510988/899969719942135898/7d6a234e6c3c0657ac1fb588068f987a.png", "https://cdn.discordapp.com/attachments/877495352272510988/899970120003256380/6c9f9442939458667fe4410adfeb85bd.png" , "https://cdn.discordapp.com/attachments/877495352272510988/899970620626976778/0c5c108f50086a1fa7b17ca8492b43c5.png"];
    var randomimg = linkimage[Math.floor(Math.random() * linkimage.length)];
    var background = ["https://cdn.discordapp.com/attachments/850808002545319957/859359637106065408/bg.png", "https://cdn.wallpapersafari.com/90/60/HPfrKl.png", "https://cdn.discordapp.com/attachments/877495352272510988/899972622434074625/3dc449b04d9ace524a0ecd247e1fdc83.png", "https://cdn.discordapp.com/attachments/877495352272510988/899972542750687232/E1BAA3nh-nE1BB81n-mC3A1y-tC3ADnh-sE1BAAFc-nC3A9t.png"];
    var bg = background[Math.floor(Math.random() * background.length)];
    var ag = args.join(" ").split(' | ');
  if (!ag[0]) return api.sendMessage(`Vui lòng nhập chữ dòng 1!`,event.threadID,event.messageID);
  else {
  if (!ag[1]) return api.sendMessage(`Vui lòng nhập chữ dòng 2 !`,event.threadID,event.messageID);
  else {
  var text1 = ag[0], text2 = ag[1];
  let callback = function () {
          api.sendMessage({
            attachment: fs.createReadStream(__dirname + `/cache/drake.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/drake.png`), event.messageID);
        };
        return request(encodeURI(`https://api.popcat.xyz/drake?text1=${text1}&text2=${text2}`)).pipe(fs.createWriteStream(__dirname + `/cache/drake.png`)).on("close", callback);
      }
      }
    }
