module.exports.config = {
    name: "fbvd",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Shiron",
    description: "Tải video facebook",
    commandCategory: "download",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
		"axios": "",
        "request": ""
    }
};
module.exports.run = async ({ api, event,args }) => {  {
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
	 const { threadID, messageID, senderID, body } = event;
let text = args.join(" ")
  if (!text) return api.sendMessage('Vui lòng nhập link video facebook?', event.threadID, event.messageID);
  const length_0 = parseInt(text.length)
 const link = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[0];
const res = await axios.get
(`http://api.leanhtruong.net/api/fbvideo?url=${link}&apikey=leanhtruong_KPKniWRgee0IXPt8qunw`);

	 var callback = () => api.sendMessage({body:`ID:${res.data.data[0].id}\nTime:${res.data.time}\nDescription:${res.data.data[0].title}`,attachment: fs.createReadStream(__dirname + "/cache/fbvd.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/fbvd.mp4"),event.messageID);
	 return request(encodeURI(`${res.data.data[0].links.HD}`)).pipe(fs.createWriteStream(__dirname+'/cache/fbvd.mp4')).on('close',() => callback());     
}}