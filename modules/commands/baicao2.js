module.exports.config = {
	name: "baicao2",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Trung Kiên",
	description: "Game bài cào 2",
	commandCategory: "Game",
	usages: "[baicao]",
	cooldowns: 0
};

module.exports.run = function ({ event, args, api, getText, Currencies}) {
	const axios = require('axios');
	const fs = global.nodemodule["fs-extra"];
	axios.get(`https://api.ditlolichapfbi.tk/game?type=baicao&cuoc=2000`).then(res => {
    var result = res.data.result == 'win' ? "Bạn đã thắng" : res.data.result == 'lost' ? "Bạn đã thua" : "Bạn đã hoà";
     var tbnc = res.data.details.nguoichoi.bainguoichoi;
     var chatbai = res.data.details.nguoichoi.chatnguoichoi;
     var tbnc1 = res.data.details.nguoichoi.tongbainguoichoi;
     var nhacai = res.data.details.nhacai.bainhacai;
     var chatnhacai = res.data.details.nhacai.chatnhacai;
     var tbnc2 = res.data.details.nhacai.tongbainhacai;
     return api.sendMessage(`Kết quả : ${result}\nBài người chơi : ${tbnc} | Chất bài : ${chatbai} | Tổng bài : ${tbnc1}\n\nNhà cái : ${nhacai} | Chất bài : ${chatnhacai} | Tổng bài : ${tbnc2}`,event.threadID,event.messageID);
	});
}