module.exports.config = {
    name: "pokemonv2",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Xem thông tin của 1 pokemon bất kì",
    commandCategory: "Tiện ích",
    usages: "[namePoke]",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args, utils  })  {
const axios = global.nodemodule['axios'];  
const fs = global.nodemodule["fs-extra"];
const namePoke = args.join(" ");
const images = [];
if (!namePoke) return api.sendMessage('» Vui lòng nhập tên 1 loài pokemon!!!', event.threadID, event.messageID)
try {
const res = await axios.get(`https://hoangdogianguyenofficial.herokuapp.com/pokemon/search?name=${namePoke.charAt(0).toUpperCase() + namePoke.slice(1)}`);
const data = res.data.pokemon
let download = (await axios.get(data.image, { responseType: "arraybuffer" } )).data;
fs.writeFileSync( __dirname + "/cache/poke.png", Buffer.from(download, "utf-8"));
images.push(fs.createReadStream(__dirname + "/cache/poke.png"));
var msg = {body: `
» Tên: ${data.name}
» Hệ: ${data.type.join(', ')}
» Loài: ${data.species}
» Nhóm trứng: ${data.profile.egg.join(', ')}
» Chiều cao: ${data.profile.height}
» Cân nặng: ${data.profile.weight}
» Trạng thái: HP ${data.base.HP}, ATK: ${data.base.Attack}, DEF: ${data.base.Defense}, Speed: ${data.base.Speed}
» Mô tả: ${data.description}`, attachment: images}
return api.sendMessage(msg, event.threadID, event.messageID)
} 
catch(e) { return api.sendMessage('Đã xảy ra lỗi: ' +e, event.threadID, event.messageID) }
}