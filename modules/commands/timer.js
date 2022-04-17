const chalk = require('chalk');
console.log(chalk.bold.hex("#104E8B").bold("Command Time Load Successfully"))
module.exports.config = {
	name: "timer", // Tên lệnh, được sử dụng trong việc gọi lệnh
	version: "9.9.9", // phiên bản của module này
	hasPermssion: 0, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
	credits: "ShironUwU", // Công nhận module sở hữu là ai
	description: "Xem giờ", // Thông tin chi tiết về lệnh
	commandCategory: "time", // Thuộc vào nhóm nào: system, other, game-sp, game-mp, random-img, edit-img, media, economy, ...
	usages: "[option] [text]", // Cách sử dụng lệnh
	cooldowns: 5 // Thời gian một người có thể lặp lại lệnh
};

module.exports.run = async function({ api, event, args, models, Users, Threads, Currencies, permssion }) {
 console.log(chalk.bold.hex("#8968CD").bold("Thanks Your Using Command Time :D"))
    const fs = require("fs-extra");
    const axios = require("axios");
    const time = require('moment-timezone');
    //*add timezone country
    let timezone = {
	"Thành Phố Hồ Chí Minh": "Asia/Ho_Chi_Minh",
	"Tokyo" : "Asia/Tokyo",
	"Los Angeles" : "America/Los_Angeles",
    "Qatar" : "Asia/Qatar",
    "Dubai" : "Asia/Dubai",
    "HongKong" : "Asia/Hong_Kong",
};
    let msg = "";
for (let i = 0; i < Object.keys(timezone).length; i++) {
	getTime = time().tz(Object.values(timezone)[i]);
	year = getTime.year();
	date = getTime.date();
	month = getTime.month();
	day = getTime.day();
	hour  = getTime.hour();
	minute = getTime.minute();
	second = getTime.second();
	day = (day == 0) ? "Chủ Nhật" : `Thứ ${day += 1}`;
	msg += `\nĐịa Điểm: ${Object.keys(timezone)[i]}\n${day} Ngày ${date} Tháng ${month} Năm ${year}\n ${hour}h${minute}m${second}s\n======================`;
}
    let picture = (await axios.get(`https://i.imgur.com/Im2PZjT.jpg`, { responseType: "stream"})).data;
 return api.sendMessage({
   body: msg,
   attachment: picture
      },event.threadID, event.messageID)
    }