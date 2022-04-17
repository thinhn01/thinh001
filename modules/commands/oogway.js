module.exports.config = {
    name: "oogway",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Shiron",
    description: "",
    commandCategory: "image",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "request": ""
    }
};
module.exports.run = async ({ api, event,args }) => {  {
    
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
	 const { threadID, messageID, senderID, body } = event;
	 var text = args.toString().replace(/,/g,  '  ');
 if (!text)
    return api.sendMessage("thíu dữ kịn :<", event.threadID, event.messageID);
	 var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/oogway.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/oogway.png"),event.messageID);
	 return request(encodeURI(`https://api.popcat.xyz/oogway?text=${text}`)).pipe(fs.createWriteStream(__dirname+'/cache/oogway.png')).on('close',() => callback());     
}}
