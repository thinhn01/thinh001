module.exports.config = {
    name: "fbdl",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "tdunguwu",
    description: "",
    commandCategory: "media",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
		"axios": "",
        "request": ""
    },
	
};
module.exports.run = async ({ api, event,args }) => {{
    
	const axios = require("axios");
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
	 const { threadID, messageID, senderID, body } = event;
	 try {
let text = args.join(" ")
  if (!text) return api.sendMessage('Vui nhập link fbvd', event.threadID, event.messageID);

 const link = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[0];
const res = await axios.get
(`https://api-ttk.herokuapp.com/social/fbdl?link=${link}`);
var url = res.data.medias[1].url;

	 var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/fb.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/fb.mp4"),event.messageID);
	 return request(encodeURI(`${url}`)).pipe(fs.createWriteStream(__dirname+'/cache/fb.mp4')).on('close',() => callback());     
}
catch {
            return api.sendMessage('⚡Không thể xử lý yêu cầu của bạn!', event.threadID, event.messageID);
        }}}