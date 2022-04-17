module.exports.config = {
  name: "tson",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "HĐGN",
  description: "Thiên Sơn",
  commandCategory: "Info", 
  usages: "", 
  cooldowns: 5,
  dependencies: [] 
};
module.exports.run = async function({ api, event }) {
const fs = global.nodemodule["fs-extra"];
if ( event.threadID == "6333508226666909" ) {
api.sendMessage( {
				attachment: fs.createReadStream(__dirname + `/cache/tson.jpeg`)
			}, event.threadID, event.messageID) }
else if ( event.threadID == "4400512880011254" ) {
api.sendMessage( {
				attachment: fs.createReadStream(__dirname + `/cache/tson.jpeg`)
			}, event.threadID, event.messageID) }

else { api.sendMessage("Quyền lồn biên giới!",event.threadID,event.messageID) }
};