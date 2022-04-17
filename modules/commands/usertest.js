const fonts = "/cache/SVN-Transformer.ttf"
const fonts2 = "/cache/VT323-Regular.ttf"
const downfonts = "https://drive.google.com/uc?export=download&id=1cAOQP1a256oZEsgEaMz8GrOaEVot60t3"
const downfonts2 = "https://drive.google.com/uc?export=download&id=1KT-B3Wg4m7_2IBJ_SaeTOYwCzI7IXkJX"
const fontsLink = 30
const fontsInfo = 40
const fontsname = 150
const fontuid = 70
const colorName = "#00FF00"
module.exports.config = {
  name: "usertest",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Shiron",
  description: "xem info",
  commandCategory: "Nhóm",
  usages: "",
  cooldowns: 1,
  dependencies: {
    canvas: "",
    axios: "",
    "fs-extra": "",
  },
};

module.exports.circle = async (image) => {
  const jimp = require('jimp');
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
 }
module.exports.run = async function ({ api, event, args, Users }) {
  if ((this.config.credits) != "Shiron") { return api.sendMessage(`Phát hiện credits đã bị thay đổi`, event.threadID, event.messageID)}
  let { senderID, threadID, messageID } = event;  
      const apikey = 'ShironVip_MinCute'  
      const { loadImage, createCanvas } = require("canvas");
      const request = require('request');
      const fs = require("fs-extra");
      const axios = require("axios");
      const Canvas = require("canvas");

      let pathImg = __dirname + `/cache/${senderID}456${threadID}.png`;
      let pathkavt = __dirname + `/cache/${senderID}457${threadID}.png`;
      let pathAvata = __dirname + `/cache/avtuserrd.png`;
      /*                 */
      if (event.type == "message_reply") {
        uid = event.messageReply.senderID
      } else 
      var uid = event.senderID;
      const res = await axios.get(`https://hoangdogianguyenofficial.herokuapp.com/info?uid=${uid}&apikey=${apikey}`);
      let getAvatarOne = (await axios.get(`https://graph.facebook.com/${uid}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, {
          responseType: 'arraybuffer'
        }))
        .data;
      let bg = (await axios.get(encodeURI(`https://i.imgur.com/8An0Afg.png`), {
          responseType: "arraybuffer",       
        }))
         .data;
      let kavt = (await axios.get(encodeURI(`https://i.imgur.com/UdAzsiF.png`), {
          responseType: "arraybuffer",
        }))
        .data;
      fs.writeFileSync(pathAvata, Buffer.from(getAvatarOne, 'utf-8'));
      var avataruser = await this.circle(pathAvata);
      fs.writeFileSync(pathImg, Buffer.from(bg, "utf-8"));
      fs.writeFileSync(pathkavt, Buffer.from(kavt, "utf-8"));
      /*-----------------download----------------------*/
      if (!fs.existsSync(__dirname + `${fonts}`)) {
        let getfont = (await axios.get(`${downfonts}`, {
            responseType: "arraybuffer"
         }))
        .data;
       let getfont2 = (await axios.get(`${downfonts2}`, {
          responseType: "arraybuffer",
          }))
          .data;
        fs.writeFileSync(__dirname + `${fonts}`, Buffer.from(getfont, "utf-8"));
        fs.writeFileSync(__dirname + `${fonts2}`, Buffer.from(getfont2, "utf-8"));
      };
      /*---------------------------------------------*/
      let baseImage = await loadImage(pathImg);
      let basekavt = await loadImage(pathkavt);
      let baseAvata = await loadImage(avataruser);
      let canvas = createCanvas(baseImage.width, baseImage.height);
      let canvas2 = createCanvas(basekavt.width, basekavt.height);
      let ctx = canvas.getContext("2d");
      ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
      ctx.drawImage(baseAvata, 396, 389, 490, 487);
      ctx.drawImage(basekavt, 0, 0, canvas2.width, canvas2.height);
      var gender = res.data.data.gender == 'male' ? "Nam" : res.data.data.gender == 'female' ? "Nữ" : "...";
      var location = res.data.data.location ? `${res.data.data.location}` : "..."
      
      Canvas.registerFont(__dirname + `${fonts}`, {
        family: "SVN-Transformer"
      });
      Canvas.registerFont(__dirname + `${fonts2}`, {
        family: "VT323-Regular"
      });

      ctx.font = `${fontsInfo}px VT323-Regular`;
      ctx.fillStyle = "#ffff";
      ctx.textAlign = "start";     
      ctx.fillText(`» ${gender}`, 457, 1205);
      ctx.fillText(`» ${location}`, 457, 1113);
      
      ctx.font = `${fontsLink}px VT323-Regular`;
      ctx.fillStyle = "#ffff";    
      ctx.fillText(`» ${res.data.data.url_profile}`, 457, 1021);
      
      ctx.font = `${fontsname}px SVN-Transformer`;
      ctx.textAlign = "center";
      ctx.fillText(`${res.data.data.fullname}`, 634, 230);
      ctx.font = `${fontuid}px SVN-Transformer`;
      ctx.textAlign = "center";
      ctx.fillText(`UID: ${uid}`, 634, 350);
      ctx.beginPath();
      const imageBuffer = canvas.toBuffer();
      fs.writeFileSync(pathImg, imageBuffer);
       fs.writeFileSync(pathkavt, imageBuffer);
      fs.removeSync(pathAvata);
      return api.sendMessage({
          attachment: fs.createReadStream(pathImg),
        }, threadID,
        () => fs.unlinkSync(pathImg), messageID);
    }
 