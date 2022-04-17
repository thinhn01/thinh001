module.exports.config = {
	name: "lol",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "tdunguwu",
	description: "xem thông số champion leageuoflegends",
	commandCategory: "leageuoflegends",
	usages: "leageuoflegends",
	cooldowns: 5,
	dependencies: {"axios" : ""}

	
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
if (args[0] == 'list') { 
	const r = (await axios.get('https://hoangdogianguyenofficial.herokuapp.com/lol/list')).data
	var s, c, t, y, o;
	s = 1;
	s = parseInt(args[1]) || 1;
	s < -1 ? page = 1 : "";
	c = 10;
	t = 'Danh sách champion hiện tại:\n';
	y = Math.ceil(r.count/c);
	for(o = c*(s - 1); o < c*(s - 1) + c; o++) { 
		if (o > r.count) break;
		t += (o + 1) + '. ' + r.data[o] + '\n';
	}
	t += 'Trang (' + s + '/' + y + ')';
	return api.sendMessage(t, event.threadID, event.messageID);
}
else {
 if(!args[0]){
return api.sendMessage(`Vui lòng nhập champion cần xem\n\nNhập ${global.config.PREFIX}lol list để xem danh sách champion`, event.threadID);
 }
try {
const res = await axios.get(`https://hoangdogianguyenofficial.herokuapp.com/lol?champion=${args[0]}`);
var name = res.data.name;
var hp = res.data.hp;
var hpg = res.data.hp_gain_per_lvl;
var hpr = res.data.hp_regen;
var hppr = res.data.hp_regen_gain_per_lvl;
var mana = res.data.mana;
var mng = res.data.mana_gain_per_lvl;
var mnr = res.data.mana_regen;
var mnrl = res.data.mana_regen_gain_per_lvl;
var dame = res.data.attack_damage;
var adg = res.data.attack_damage_gain_per_lvl;
var atsp = res.data.attack_speed;
var atspa = res.data.attack_speed_gain_per_lvl;
var am = res.data.armor;
var amg = res.data.armor_gain_per_lvl;
var ma = res.data.magic_resist;
var mar = res.data.magic_resist_gain_per_lvl;
var mov = res.data.movement_speed;
var range = res.data.range;
var abl = res.data.ability_power;
var abi = res.data.ability_haste;
var crit = res.data.crit;
return api.sendMessage(`Máu: ${hp} \n
Máu tăng mỗi LV: ${hpg}  \n
Tốc độ hồi máu: ${hpr} \n
Tốc độ hồi máu tăng mỗi  LV: ${hppr} \n
Mana: ${mana} \n
Mana tăng mỗi LV: ${mng} \n
Tốc độ hồi Mana: ${mnr}  \n
Tốc độ hồi Mana mỗi tăng mỗi LV: ${mnrl} \n
Sát thương: ${dame} \n
Sát thương tăng mỗi LV: ${adg} \n
Tốc độ đánh: ${atsp} \n
Tốc độ đánh tăng mỗi LV: ${atspa} \n
Giáp: ${am} \n
Giáp tăng mỗi LV: ${amg} \n
Giáp phép thuật: ${ma} \n
Giáp phép thuật tăng mỗi LV: ${mar} \n
Tốc chạy: ${mov} \n
Tầm đánh: ${range} \n
Ability Power: ${abl} \n
Ability Haste ${abi} \n
Chí mạng: ${crit}`, event.threadID, event.messageID)
} catch {
      return api.sendMessage("Không tìm thấy champion này", event.messageID);
    }
}
}
