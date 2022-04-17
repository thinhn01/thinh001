module.exports.config = {
  name: "mshoppe",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "HĐGN",
  description: "Viết chữ lên bảngʕっ•ᴥ•ʔっ",
  commandCategory: "edit-img",
  usages: "mshoppe [text]",
  cooldowns: 10,
  dependencies: {
    "canvas":"",
     "axios":"",
     "fs-extra":""
  }
};

module.exports.wrapText = (ctx, text, maxWidth) => {
  return new Promise(resolve => {
    if (ctx.measureText(text).width < maxWidth) return resolve([text]);
    if (ctx.measureText('W').width > maxWidth) return resolve(null);
    const words = text.split(' ');
    const lines = [];
    let line = '';
    while (words.length > 0) {
      let split = false;
      while (ctx.measureText(words[0]).width >= maxWidth) {
        const temp = words[0];
        words[0] = temp.slice(0, -1);
        if (split) words[1] = `${temp.slice(-1)}${words[1]}`;
        else {
          split = true;
          words.splice(1, 0, temp.slice(-1));
        }
      }
      if (ctx.measureText(`${line}${words[0]}`).width < maxWidth) line += `${words.shift()} `;
      else {
        lines.push(line.trim());
        line = '';
      }
      if (words.length === 0) lines.push(line.trim());
    }
    return resolve(lines);
  });
} 

module.exports.run = async function({ api, event, args }) {
  const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];
  if(!fs.existsSync(__dirname+'/cache/AlegreyaSans-Regular.ttf')) { 
      let getfont = (await axios.get(`https://drive.google.com/u/0/uc?id=1cXbgV7NmlDKYNb-ygBDGHl4EBVKPuUKm&export=download`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/cache/AlegreyaSans-Regular.ttf", Buffer.from(getfont, "utf-8"));
    };   
  let { senderID, threadID, messageID } = event;
  const { loadImage, createCanvas } = require("canvas");
  
  
  let pathImg = __dirname + '/cache/mshoppe.png';
  var text = args.join(" ");
  if (event.type == "message_reply") {
        text = event.messageReply.body
    }
  
  if (!text) return api.sendMessage("Nhập nội dung cần viết trên bảng", threadID, messageID);
  let getPorn = (await axios.get(`https://i.imgur.com/g2FthJG.png`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(pathImg, Buffer.from(getPorn, 'utf-8'));
  let baseImage = await loadImage(pathImg);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  const Canvas = global.nodemodule["canvas"];
  Canvas.registerFont(__dirname+`/cache/AlegreyaSans-Regular.ttf`, {
        family: "AlegreyaSans"
    });
  ctx.font = "30px AlegreyaSans";
  ctx.fillStyle = "#000000";
  ctx.textAlign = "center";
  let fontSize = 50;
  while (ctx.measureText(text).width > 1200) {
  }
  const lines = await this.wrapText(ctx, text, 470);
if ( text.length < 40) {
  ctx.fillText(lines.join('\n'), 25,200);//comment
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
return api.sendMessage({ attachment: fs.createReadStream(pathImg) }, threadID, () => fs.unlinkSync(pathImg), messageID);  
} if (text.length > 40 && text.length < 40*2 ) {
  ctx.fillText(lines.join('\n'), 25,200);//comment
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
return api.sendMessage({ attachment: fs.createReadStream(pathImg) }, threadID, () => fs.unlinkSync(pathImg), messageID);    
} if (text.length > 40*2 && text.length < 40*4 ) {    
  ctx.fillText(lines.join('\n'), 25,200);//comment
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
return api.sendMessage({ attachment: fs.createReadStream(pathImg) }, threadID, () => fs.unlinkSync(pathImg), messageID);    
} if (text.length > 40*4 && text.length < 40*8) {    
  ctx.fillText(lines.join('\n'), 25,200);//comment
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
return api.sendMessage({ attachment: fs.createReadStream(pathImg) }, threadID, () => fs.unlinkSync(pathImg), messageID);    
}if (text.length > 40*8) {    
  ctx.fillText(lines.join('\n'), 25,200);//comment
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
return api.sendMessage({ attachment: fs.createReadStream(pathImg) }, threadID, () => fs.unlinkSync(pathImg), messageID);    
}
}
