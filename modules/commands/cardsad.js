const fonts = "/cache/Play-Bold.ttf"
const downfonts = "https://drive.google.com/u/0/uc?id=1uni8AiYk7prdrC7hgAmezaGTMH5R8gW8&export=download"
const fontsLink = 20
const fontsInfo = 20
const colorName = "#00FF00"
module.exports.config = {
  name: "cardsad",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "Võ Thành Trung",
  description: "Tạo card thông tin người dùng facebook v2",
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
  const jimp = global.nodemodule["jimp"];
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}
module.exports.run = async function ({ api, event, args, Users }) {
  if ((this.config.credits) != "Võ Thành Trung") { return api.sendMessage(`⚡️Phát hiện credits đã bị thay đổi`, event.threadID, event.messageID)}
  let { senderID, threadID, messageID } = event;
  const apikey = 'ShironVip_MinCute'
  const { loadImage, createCanvas } = require("canvas");
  const request = require('request');
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  const Canvas = global.nodemodule["canvas"];
  let pathImg = __dirname + `/cache/${senderID}123${threadID}.png`;
  let pathAvata = __dirname + `/cache/cardsad.png`;
  /*                 */
  if(event.type == "message_reply") { uid = event.messageReply.senderID }
    else uid = event.senderID;
    const res = await axios.get(`https://hoangdogianguyenofficial.herokuapp.com/info?uid=${uid}&apikey=${apikey}`); 
  let getAvatarOne = (await axios.get(`https://graph.facebook.com/${uid}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  let bg = (
    await axios.get(encodeURI(`https://i.imgur.com/XRnWo8b.gif`), {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathAvata, Buffer.from(getAvatarOne, 'utf-8'));
  avataruser = await this.circle(pathAvata);
  fs.writeFileSync(pathImg, Buffer.from(bg, "utf-8"));

/*-----------------download----------------------*/
if(!fs.existsSync(__dirname+`${fonts}`)) { 
      let getfont = (await axios.get(`${downfonts}`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+`${fonts}`, Buffer.from(getfont, "utf-8"));
    };
/*---------------------------------------------*/

  let baseImage = await loadImage(pathImg);
  let baseAvata = await loadImage(avataruser);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseAvata, 75, 60, 165, 165);
    var gender = res.data.data.gender == 'male' ? "Nam" : res.data.data.gender == 'female' ? "Nữ" : "Không công khai";
    var birthday = res.data.data.birthday ? `${res.data.data.birthday}` : "...";
    var love = res.data.data.relationship_status ? `${res.data.data.relationship_status}` : "Độc thân"
    var location = res.data.data.location ? `${res.data.data.location}` : "..."
  Canvas.registerFont(__dirname+`${fonts}`, {
        family: "Play-Bold"
    });
  ctx.font = `${fontsInfo}px Play-Bold`;
  ctx.fillStyle = "#ffff";
  ctx.textAlign = "start";
  fontSize = 20;
  ctx.fillText(`» Tên: ${res.data.data.fullname}`, 280, 85);
  ctx.fillText(`» Giới Tính: ${gender}`, 280, 120);
  ctx.fillText(`» Theo Dõi: ${res.data.data.follow_user}`, 280, 155);
  ctx.fillText(`» Tình Trạng: ${love}`, 280, 180);
  ctx.fillText(`» Ngày Sinh: ${birthday}`, 280, 215);
  ctx.fillText(`» Nơi Ở: ${location}`, 280, 250);
  ctx.fillText(`» UID: ${uid}`, 280, 285);
  ctx.font = `${fontsLink}px Play-Bold`;
  ctx.fillStyle = "#ffff";
  ctx.textAlign = "start";
  fontSize = 20;  
  ctx.fillText(`» Profile: ${res.data.data.url_profile}`, 20, 370);
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(pathAvata);
  
  return api.sendMessage(
    { attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};

 