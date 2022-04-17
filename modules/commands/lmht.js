module.exports.config = {
	name: "lmht",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Shiron",
	description: "xem info lmht",
	commandCategory: "lmht",
	usages: "lmht",
	cooldowns: 5,
	dependencies: {"axios" : ""}

	
};

module.exports.run = async ({ api, event,args }) => {
const axios = require("axios");
    const request = require("request");
    if(args[0] == "list"){
    const res = await axios.get("https://api-ttk.herokuapp.com/lmht/list");
      var count = res.data.champ_names.length;
      var data = res.data.champ_names;
      var page = 1;
      page = parseInt(args[1]) || 1;
      page < -1 ? page = 1 : "";
      var limit = 10;
      var numPage = Math.ceil(count/limit);
      var msg = ``;
      for(var i = limit*(page - 1); i < limit*(page-1) + limit; i++){
         if(i >= count) break;
        msg += `${i+1} - ${data[i]}\n`;
      }
      msg += `Đang có tổng ${count} tướng\nSố trang (${page}/${numPage})\nDùng ${global.config.PREFIX}lmht list <số trang>`;
      return api.sendMessage(msg, event.threadID, event.messageID);
  }
  else {
    if(!args[0]){
      return api.sendMessage(`Vui lòng nhập tên tướng\n\nNhập ${global.config.PREFIX}lmht list để xem danh sách tướng`, event.threadID);
    }
    try {
    const details = await axios.get(`https://api-ttk.herokuapp.com/lmht?name=${args[0]}`);
    const a = details.data;
    var name = a.name,
        hp = a.hp,
        hp_gain_per_lvl = a.hp_gain_per_lvl,
        hp_regen = a.hp_regen,
        hp_regen_gain_per_lvl = a.hp_regen_gain_per_lvl,
        mana = a.mana,
        mana_gain_per_lvl = a.mana_gain_per_lvl,
        mana_regen = a.mana_regen,
        mana_regen_gain_per_lvl = a.mana_regen_gain_per_lvl,
        attack_damage = a.attack_damage,
        attack_damage_gain_per_lvl = a.attack_damage_gain_per_lvl,
        attack_speed = a.attack_speed,
        attack_speed_gain_per_lvl = a.attack_speed_gain_per_lvl,
        armor = a.armor,
        armor_gain_per_lvl = a.armor_gain_per_lvl,
        magic_resist = a.magic_resist,
        magic_resist_gain_per_lvl = a.magic_resist_gain_per_lvl,
        movement_speed = a.movement_speed,
        range = a.range,
        ability_power = a.ability_power,
        ability_haste = a.ability_haste,
        crit = a.crit
        return api.sendMessage(`Tên : ${name}\nHP : ${hp}\nSố máu đạt được mỗi lần lên cấp : ${hp_gain_per_lvl}\nSố máu hồi phục mỗi giây : ${hp_regen}\nSố máu hồi phục đạt được mỗi lần lên cấp : ${hp_regen_gain_per_lvl}\nMana : ${mana}\nSố Mana mỗi lần lên cấp : ${mana_gain_per_lvl}\nSố mana hồi phục mỗi giây : ${mana_regen}\nSố mana hồi phục mỗi lần lên cấp : ${mana_regen_gain_per_lvl}\nTấn công : ${attack_damage}\nTốc độ đánh : ${attack_speed}\nChỉ số tấn công mỗi lần lên cấp : ${attack_damage_gain_per_lvl}\nChỉ số sức đánh mỗi lần lên cấp : ${attack_speed_gain_per_lvl}\nGiáp : ${armor}\nChỉ số giáp mỗi lần lên cấp : ${armor_gain_per_lvl}\nChỉ số ma thuật : ${magic_resist}\nChỉ số ma thuật mỗi khi lên cấp : ${magic_resist_gain_per_lvl}\nTốc độ di chuyển : ${movement_speed}\nTầm đánh : ${range}\nAbility Power : ${ability_power}\nAbility Haste : ${ability_haste}\nChí mạng : ${crit}`, event.threadID);
    } catch {
      return api.sendMessage("Không tìm thấy tướng này", event.messageID);
    }
}
}

