/**
* @author ProCoderMew
* @warn Do not edit code or edit credits
*/

module.exports.config = {
  name: "gáy",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "HÐGN & Fix reply by DuyVuong",
  description: "",
  commandCategory: "general",
  usages: "[tag]",
  cooldowns: 5,
  dependencies: {
    "axios": "",
    "fs-extra": "",
    "path": "",
    "jimp": ""
  }
};

module.exports.onLoad = async () => {
  const { resolve } = global.nodemodule["path"];
  const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
  const { downloadFile } = global.utils;
  const dirMaterial = __dirname + `/cache/canvas/`;
  const path = resolve(__dirname, 'cache/canvas', 'gáy.png');
  if (!existsSync(dirMaterial + "canvas")) mkdirSync(dirMaterial, { recursive: true });
  if (!existsSync(path)) await downloadFile("https://i.ibb.co/Jx6Wktr/g-y.jpg", path);
}

async function makeImage({ one, two }) {
  const fs = global.nodemodule["fs-extra"];
  const path = global.nodemodule["path"];
  const axios = global.nodemodule["axios"];
  const jimp = global.nodemodule["jimp"];
  const __root = path.resolve(__dirname, "cache", "canvas");

  let gáy_img = await jimp.read(__root + "/gáy.png");
  let pathImg = __root + `/gáy_${one}_${two}.png`;
  let avatarOne = __root + `/avt_${one}.png`;
  let avatarTwo = __root + `/avt_${two}.png`;

  let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));

  let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));

  let circleOne = await jimp.read(await circle(avatarOne));
  let circleTwo = await jimp.read(await circle(avatarTwo));
  gáy_img.composite(circleOne.resize(80, 80), 161, 87).composite(circleTwo.resize(80, 80), 286, 113);

  let raw = await gáy_img.getBufferAsync("image/png");

  fs.writeFileSync(pathImg, raw);
  fs.unlinkSync(avatarOne);
  fs.unlinkSync(avatarTwo);

  return pathImg;
}
async function circle(image) {
  const jimp = require("jimp");
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}

module.exports.run = async function({ event, api, args, Users }) {
  const fs = global.nodemodule["fs-extra"];
  const { threadID, messageID, senderID } = event;
  var mention = Object.keys(event.mentions)[0]
  if (!mention && !event.messageReply) return api.sendMessage("Vui lòng tag hoặc reply(Phản hồi) tin nhắn của 1 người", threadID, messageID);
  else if (mention && !event.messageReply) {
    if (args.join(" ").length == 0) var text = 'Dậy gáy đi em,sao không gáy nữa😆';
    else var text = args.join(" ");
    let tag = event.mentions[mention].replace("@", "");
    var one = senderID, two = mention;
    return makeImage({ one, two }).then(path => api.sendMessage({
      body: text,
      mentions: [{
        tag: tag,
        id: mention
      }],
      attachment: fs.createReadStream(path)
    }, threadID, () => fs.unlinkSync(path), messageID));
  }
  else {
    var one = senderID, two = event.messageReply.senderID;
    var tag = await Users.getNameUser(event.messageReply.senderID);
    if (args.join(" ").length == 0) var text = 'Dậy gáy đi em,sao không gáy nữa😆';
    else var text = args.join(" ");
    return makeImage({ one, two }).then(path => api.sendMessage({
      body: text,
      mentions: [{
        tag: tag,
        id: event.messageReply.senderID
      }],
      attachment: fs.createReadStream(path)
    }, threadID, () => fs.unlinkSync(path), messageID));
  }
}