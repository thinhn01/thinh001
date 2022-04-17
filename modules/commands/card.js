module.exports.config = {
  name: "card",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "D-Jukie",
  description: "Card",
  commandCategory: "Tiện ích",
  usages: "",
  cooldowns: 10,
  dependencies: {
    canvas: "",
    axios: "",
    "fs-extra": "",
  },
};

module.exports.circle = async (image) => {
  const jimp = global.nodemodule["jimp"];
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}
module.exports.run = async function ({ api, event, args, Users }) {
  let { senderID, threadID, messageID } = event;
  const { loadImage, createCanvas } = require("canvas");
  const Canvas = global.nodemodule["canvas"];
  const request = require('request');
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  let pathImg = __dirname + `/cache/${senderID}.png`;
  let pathAva = __dirname + `/cache/avtuser.png`;
  let text = args.join(" ")
  if (!text) return api.sendMessage('Vui lòng nhập đúng định dạng [text1 | text2 | text3]!', event.threadID, event.messageID);
  const length_0 = parseInt(text.length)
  const text1 = text.substr(0, text.indexOf(' | ')); 
  if (!text1) return api.sendMessage('Vui lòng nhập đúng định dạng [text1 | text2 | text3]!', event.threadID, event.messageID);
  const length = parseInt(text1.length)
  const text3 = text.split(" | ").pop()
  if (!text3) return api.sendMessage('Vui lòng nhập đúng định dạng [text1 | text2 | text3]!', event.threadID, event.messageID);
  const length_3 = parseInt(text3.length)
  const text2 = text.slice(length+2, length_0-length_3-2)
  if (!text2) return api.sendMessage('Vui lòng nhập đúng định dạng [text1 | text2 | text3]!', event.threadID, event.messageID);
  if(event.type == "message_reply") { uid = event.messageReply.senderID }
  if (args.join().indexOf('@') !== -1){ var uid = Object.keys(event.mentions) } 
  if (!uid) { var uid = senderID}
  let Avatar = (
    await axios.get(
      `https://graph.facebook.com/${uid}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
      { responseType: "arraybuffer" }
    )
  ).data;
  let getWanted = (
    await axios.get(encodeURI(`https://i.imgur.com/D88At7s.png`), {
      responseType: "arraybuffer",
    })
  ).data;
  https://fonts.google.com/specimen/Bangers
  fs.writeFileSync(pathAva, Buffer.from(Avatar, "utf-8"));
  avatar = await this.circle(pathAva);
  fs.writeFileSync(pathImg, Buffer.from(getWanted, "utf-8"));
/*-----------------download----------------------*/
if(!fs.existsSync(__dirname+'/cache/Bangers-Regular.ttf')) { 
      let getfont = (await axios.get(`https://drive.google.com/u/0/uc?id=1tD8kgjXszN_amDVUPwbGdlT6PJxDRhYq&export=download`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/cache/Bangers-Regular.ttf", Buffer.from(getfont, "utf-8"));
    };
/*---------------------------------------------*/
  let baseImage = await loadImage(pathImg);
  let baseAva = await loadImage(avatar);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseAva, 390, 44, 243, 243);
  Canvas.registerFont(__dirname+`/cache/Bangers-Regular.ttf`, {
        family: "Manrope"
    });
  ctx.font = "55px Manrope";
  ctx.fillStyle = "#ffff";
  ctx.textAlign = "center";
  fontSize = 40;
  ctx.fillText(text1, 514, 359);
  ctx.font = "40px Manrope";
  ctx.fillStyle = "#ffff";
  ctx.textAlign = "center";
  fontSize = 20;
  ctx.fillText(text2, 514, 410);
  ctx.font = "30px Manrope";
  ctx.fillStyle = "#ffff";
  ctx.textAlign = "center";
  fontSize = 20;
  ctx.fillText(text3, 514, 457);
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(pathAva);
  return api.sendMessage(
    { attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};
