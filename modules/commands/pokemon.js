module.exports.config = {
    name: "pokemon",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "tdunguwu",
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
	const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
	 const { threadID, messageID, senderID, body } = event;
	 
let text = args.toString().replace(/,/g,  '  ');
if (!text)
    return api.sendMessage("[pokemon]", event.threadID, event.messageID);
	const res = await axios.get(`https://api-ttk.herokuapp.com/other/pokemon?text=${text}`);
	var id = res.data.id;
	var eng = res.data.name.english;
	var namejp = res.data.name.japanese;
	var namecin = res.data.name.chinese;
	var namefr = res.data.name.french;
	var tp = res.data.type;
	var hp = res.data.base.HP;
	var at = res.data.base.Attack;
	var df = res.data.base.Defense;
	var sped = res.data.base.Speed;
	var spokem = res.data.species;
	var dsp = res.data.description;
	var evo = res.data.evolution.prev;
	var evo1 = res.data.evolution.next;
	var h = res.data.profile.height;
	var w = res.data.profile.weight;
	var eg = res.data.profile.egg;
	var ab = res.data.profile.ability;
	var gd = res.data.profile.gender;
	var hires = res.data.hires ;
	
	 var callback = () => api.sendMessage({body:`====== ${text} ======\n=> ID: ${id}\n=> Tên Tiếng Anh: ${eng}\n=> Tên Tiếng Nhật: ${namejp}\n=> Tên Tiếng Trung: ${namecin}\n=> Tên Tiếng Pháp: ${namefr}\n=> Hệ: ${tp}\n=> Máu: ${hp}\n=> Tấn Công: ${at}\n=> Phòng Thủ: ${df}\n=> Tốc Độ: ${sped}\n=> Đặc Biệt:  ${spokem}\n=> Mô Tả: ${dsp}\n=> Tiến Hóa: ${evo}\n=> Tiến Hóa 2 ${evo1}\n=> Chiều Cao ${h}\n=> Cân Nặng ${w}\n=> Trứng: ${eg}\n=> Khả Năng: ${ab}\n=> Giới Tính: ${gd}`,attachment: fs.createReadStream(__dirname + "/cache/pkm.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/pkm.png"),event.messageID);
	 return request(encodeURI(`${hires}`)).pipe(fs.createWriteStream(__dirname+'/cache/pkm.png')).on('close',() => callback());     
}}