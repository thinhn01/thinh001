module.exports.config = {
    name: "pokedex",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Trung Kiên",
    description: "",
    commandCategory: "Group",
    usages: "",
    cooldowns: 0
};

module.exports.run = function({
    event,
    args,
    api,
    getText
}) {
    var axios = require("axios");
    var fs = require("fs");
    var request = require("request");
    var tip = args[0];
    if (!tip) return api.sendMessage(`Nhập tên pokemon trong pokedex cần tra cứu thông tin!`, event.threadID, event.messageID);
    else {
        const axios = require('axios');
        axios.get(`https://some-random-api.ml/pokedex?pokemon=${encodeURIComponent(tip)}`).then(res => {
            let name = res.data.name,
                type = res.data.type,
                species = res.data.species,
                abilities = res.data.abilities,
                height = res.data.height,
                weight = res.data.weight,
                gender = res.data.gender,
                egg_groups = res.data.egg_groups,
                hp = res.data.stats.hp,
                attack = res.data.stats.attack,
                defense = res.data.stats.defense,
                sp_atk = res.data.stats.sp_atk,
                sp_def = res.data.stats.sp_def,
                speed = res.data.stats.speed,
                evolutionStage = res.data.family.evolutionStage,
                evolutionLine = res.data.family.evolutionLine,
                description = res.data.description
            return api.sendMessage(`》Tên : ${name}\n》Loại: ${type}\n》Loài: ${species}\n》Khả năng : ${abilities}\n》Chiều cao: ${height}\n》Trọng lượng: ${weight}\n》Giới tính: ${gender}\n》Nhóm trứng: ${egg_groups}\n》Trạng thái: Hp :${hp}, Tấn công: ${attack}, Phòng thủ: ${defense}, Special Attack: ${sp_atk}, Special Defense: ${sp_def}, Tốc độ : ${speed}\n》EvolutionStage: ${evolutionStage}\n》EvolutionLine : ${evolutionLine}\n》Mô tả: ${description} `, event.threadID, event.messageID);
        });
    }
}