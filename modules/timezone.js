module.exports.config = {
	name: "timezone",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "ShironUwU",
	description: "Xem múi giờ",
	commandCategory: "other",
	cooldowns: 5,
	dependencies: {
		"axios": ""
	}
};
module.exports.run = async function({ api, event, getText, args }) {
	const axios = global.nodemodule["axios"];
	const a = await axios.get("https://le31.glitch.me/other/timezones");
        var b = a.data.data.length;
        var x = a.data.data.timezones;
        var page = 1;
        page = parseInt(args[0]) || 1;
        page < -1 ? page = 1 : "";
        var limit = 15;
        var numPage = Math.ceil(215 / limit);
        var msg = ``;
        for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
            if (i >= 215) break;
            msg += `${x[i].timezone}\nDay: ${x[i].day}\nDate: ${x[i].date}\nMonth: ${x[i].month}\nYear: ${x[i].year}\nHour: ${x[i].hour}\nMinute: ${x[i].minute}\nSecond: ${x[i].second}\n===========\n`;
        }
        msg += `Số timezone : 215\nSố trang (${page}/${numPage})\nDùng ${global.config.PREFIX}timezone <số trang>`;
        return api.sendMessage(msg, event.threadID, event.messageID);
}