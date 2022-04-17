module.exports.config = {
    name: "fbvideo",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Tải video từ fb(download được stories)",
    commandCategory: "Tiện ích",
    usages: "[link]",
    cooldowns: 5
};
module.exports. run = async function ({ api, event, args, utils  })  {
const axios = global.nodemodule['axios'];  
const fs = global.nodemodule["fs-extra"];
if (!args[0]){ return api.sendMessage("⚡Bạn phải ngập url video facebook !!!", event.threadID, event.messageID);}
const link = args.join(" ");
try {
const res = await axios.get(`https://hoangdogianguyenofficial.herokuapp.com/v2/fbget?url=${encodeURIComponent(link)}`);
const data = res.data.data
const link_down = data.medias[1].url
path1 = __dirname+`/cache/${event.senderID}.mp4`  
const getms = (await axios.get(link_down,{responseType: "arraybuffer"})).data; 
    fs.writeFileSync(path1, Buffer.from(getms, "utf-8"));    
    if (fs.statSync(__dirname + `/cache/${event.senderID}.mp4`).size > 26000000) return api.sendMessage('⚡Không thể gửi file vì dung lượng lớn hơn 25MB.', event.threadID, () => unlinkSync(__dirname + `/cache/${event.senderID}.mp4`), event.messageID);
    else return api.sendMessage({body : "" , attachment: fs.createReadStream(__dirname + `/cache/${event.senderID}.mp4`)}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/${event.senderID}.mp4`), event.messageID)
} catch {
            return api.sendMessage('⚡Không thể xử lý yêu cầu của bạn!!!', event.threadID, event.messageID);
        }
}