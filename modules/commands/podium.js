module.exports.config = {
	name: "podium",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Trung Kiên",
	description: "Podium",
	commandCategory: "image",
	usages: "Podium || Podium @tag",
	cooldowns: 5,
	dependencies: {"fs-extra": "","discord.js": "","discord-image-generation" :"","node-superfetch": ""}
};

module.exports.run = async ({ event, api, args, Users }) => {
  const DIG = global.nodemodule["discord-image-generation"];
  const Discord = global.nodemodule['discord.js'];
  const request = global.nodemodule["node-superfetch"];
  const fs = global.nodemodule["fs-extra"];
  let type1 = args[0];
  let type2 = args[1];
  let type3 = args[3];
  var id = Object.keys(event.mentions)[0] || event.senderID;
  var id1 = Object.keys(event.mentions)[1] || event.senderID;
  var id2 = Object.keys(event.mentions)[2] || event.senderID;
  var avatar = (await request.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
  var avatar1 = (await request.get(`https://graph.facebook.com/${id1}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
  var avatar2 = (await request.get(`https://graph.facebook.com/${id2}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).body;
  let img = await new DIG.Podium().getImage((avatar), (avatar1), (avatar2), '1', '2', '3');
  let attach = new Discord.MessageAttachment(img);
  var podium = __dirname + "/cache/podium.png";
  fs.writeFileSync(podium, attach.attachment);
  api.sendMessage({attachment: fs.createReadStream(podium)}, event.threadID, () => fs.unlinkSync(podium), event.messageID);
}