module.exports.config = {
	name: "bannerna",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "HĐGN",
	description: "Viết chữ lên bảngʕっ•ᴥ•ʔっ",
	commandCategory: "edit-img",
	usages: "bannerna [text]",
	cooldowns: 10,
	dependencies: {
		"canvas":"",
		 "axios":"",
		 "fs-extra":""
	}
};
module.exports.run = async function ({ api, event, global, args, body, is, Threads, Users }) {
  let { senderID, threadID, messageID } = event;
  const { loadImage, createCanvas } = require("canvas");
  const request = require('request');
  const fs = require("fs-extra")
  const axios = require("axios")
  let pathImg = __dirname + `/cache/${senderID}123.png`;
  let background = (
    await axios.get(encodeURI(
      `https://i.imgur.com/Qh0un7y.jpg`),
      { responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));


/*-----------------download----------------------*/
if(!fs.existsSync(__dirname+`/cache/Muli Black.otf`)) { 
      let getfont = (await axios.get(`https://drive.google.com/u/0/uc?id=1WKXarqTN1zoV3aPGxQMKS_YQmRJYMcsu&export=download`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+`/cache/Muli Black.otf`, Buffer.from(getfont, "utf-8"));
    };
/*---------------------------------------------*/
  var name = (await Users.getData(senderID)).name
  var namee = args.join(" ") || name
  const Canvas = require("canvas")
  let baseImage = await loadImage(pathImg);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  Canvas.registerFont(__dirname+`/cache/Muli Black.otf`, {
        family: "Muli Black"
    });
  ctx.font = `40px Muli Black`;
  ctx.fillStyle = "#000077";
  ctx.textAlign = "start";
  ctx.fillText(namee.toUpperCase(), 188, 447);
  ctx.beginPath();
  
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  return api.sendMessage(
    { attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
}