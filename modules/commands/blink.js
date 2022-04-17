module.exports.config = {
  name: "blink",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Trung Kiên",
  description: "blink",
  commandCategory: "image",
  usages: "blink || blink @tag",
  cooldowns: 5,
  dependencies: {"fs-extra": "","discord.js": "","discord-image-generation" :"","node-superfetch": ""}
};

module.exports.run = async ({ event, api, args, Users }) => {
  const DIG = global.nodemodule["discord-image-generation"];
  const Discord = global.nodemodule['discord.js'];
  const request = global.nodemodule["node-superfetch"];
  const fs = global.nodemodule["fs-extra"];
  var id = Object.keys(event.mentions)[0] || event.senderID;
  var id1 = Object.keys(event.mentions)[1] || event.senderID;
  var id2 = Object.keys(event.mentions)[2] || event.senderID;
  var id3 = Object.keys(event.mentions)[3] || event.senderID;
  var id4 = Object.keys(event.mentions)[4] || event.senderID;
  var id5 = Object.keys(event.mentions)[5] || event.senderID;
  var id6 = Object.keys(event.mentions)[6] || event.senderID;
  var id7 = Object.keys(event.mentions)[7] || event.senderID;
  var id8 = Object.keys(event.mentions)[8] || event.senderID;
  var id9 = Object.keys(event.mentions)[9] || event.senderID;
  var id10 = Object.keys(event.mentions)[10] || event.senderID;
  var avatar = (await request.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
  var avatar1 = (await request.get(`https://graph.facebook.com/${id1}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
  var avatar2 = (await request.get(`https://graph.facebook.com/${id2}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
  var avatar3 = (await request.get(`https://graph.facebook.com/${id3}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
  var avatar4 = (await request.get(`https://graph.facebook.com/${id4}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
  var avatar5 = (await request.get(`https://graph.facebook.com/${id5}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
  var avatar6 = (await request.get(`https://graph.facebook.com/${id6}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
  var avatar7 = (await request.get(`https://graph.facebook.com/${id7}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
  var avatar8 = (await request.get(`https://graph.facebook.com/${id8}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
  var avatar9 = (await request.get(`https://graph.facebook.com/${id9}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
  var avatar10 = (await request.get(`https://graph.facebook.com/${id10}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
  let img = await new DIG.Blink().getImage((avatar), (avatar1), (avatar2), (avatar3), (avatar4), (avatar5), (avatar6), (avatar7), (avatar8), (avatar9), (avatar10));
  let attach = new Discord.MessageAttachment(img);
  var blink = __dirname + "/cache/blink.gif";
  fs.writeFileSync(blink, attach.attachment);
  api.sendMessage({attachment: fs.createReadStream(blink)}, event.threadID, () => fs.unlinkSync(blink), event.messageID);
}