module.exports.config = {
	name: "boostercard",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Shiron",
	description: "boostercard",
	commandCategory: "image",
	usages: "boostercard",
	cooldowns: 5,
	dependencies: {"fs-extra": "","discord.js": "","noodles-wrapper" :""}
};

module.exports.run = async ({ event, api, args, Users }) => {
  const  noodles_api  =  require('noodles-wrapper');
const Discord = require('discord.js');
  const fs = global.nodemodule["fs-extra"];
let image = args.toString().replace(/,/g,  '  ');
if (!image)
    return api.sendMessage("[Text]", event.threadID, event.messageID);
let Image = await noodles_api.boostercard(image);
const attach = new Discord.MessageAttachment(Image);
  var path_changemymind = __dirname + "/cache/boostercard.png";
  fs.writeFileSync(path_changemymind, attach.attachment);
  api.sendMessage({attachment: fs.createReadStream(path_changemymind)}, event.threadID, () => fs.unlinkSync(path_changemymind), event.messageID);
}