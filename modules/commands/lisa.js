module.exports.config = {
	name: "lisa",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Shiron",
	description: "tùy",
	commandCategory: "image",
	usages: "...",
	cooldowns: 5,
	dependencies: {"fs-extra": "","discord.js": "","discord-image-generation" :"","node-superfetch": ""}
};

module.exports.run = async ({ event, api, args, Users }) => {
  const DIG = global.nodemodule["discord-image-generation"];
  const Discord = global.nodemodule['discord.js'];
  const request = global.nodemodule["node-superfetch"];
  const fs = global.nodemodule["fs-extra"];
  let text = args.join(" ");
  let img = await new DIG.LisaPresentation().getImage(text);
  let attach = new Discord.MessageAttachment(img);
  var path_gay = __dirname + "/cache/LisaPresentation.png";
  fs.writeFileSync(path_gay, attach.attachment);
  api.sendMessage({attachment: fs.createReadStream(path_gay)}, event.threadID, () => fs.unlinkSync(path_gay), event.messageID);
}