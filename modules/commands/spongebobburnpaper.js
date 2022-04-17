module.exports.config = {
	name: "spongebobburnpaper",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "tdunguwu",
	description: "spongebobburnpaper",
	commandCategory: "image",
	usages: "spongebobburnpaper [Text]",
	cooldowns: 5,
	dependencies: {"fs-extra": "","discord.js": "","noodles-wrapper" :""}
};

module.exports.run = async ({ event, api, args, Users }) => {
  const  noodles_api  =  require('noodles-wrapper');
const Discord = require('discord.js');
  const fs = global.nodemodule["fs-extra"];
  if (this.config.credits != 'tdunguwu') {
        console.log('\x1b[33m[ WARN ]\x1b[37m » Đổi credits con cặc đjt mẹ mày luôn đấy con chó:))');
        return api.sendMessage('[ WARN ] Phát hiện người điều hành bot ' + global.config.BOTNAME + ' đổi credits modules "' + this.config.name + '"', threadID, messageID);
      }
let text = args.toString().replace(/,/g,  '  ');
if (!text)
    return api.sendMessage("[Text]", event.threadID, event.messageID);
let Image = await noodles_api.spongebobburnpaper(text);
const attach = new Discord.MessageAttachment(Image);
  var path_changemymind = __dirname + "/cache/spongebobburnpaper.png";
  fs.writeFileSync(path_changemymind, attach.attachment);
  api.sendMessage({attachment: fs.createReadStream(path_changemymind)}, event.threadID, () => fs.unlinkSync(path_changemymind), event.messageID);
}