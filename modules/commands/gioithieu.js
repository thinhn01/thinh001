module.exports.config = {
	name: "gioithieu",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "N",
	description: "Thông tin nhà tài trợ và nhà phát triển",
	commandCategory: "Info", 
	usages: "gioithieu [thông tin cho bạn]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async ({ api, event, args, client, utils }) => {
	if (args.join() == "") {api.sendMessage("|==== Bảng thông tin Gravity falls ====|\nNgười chạy bot: Hoàng Đỗ Gia Nguyên\n© Gravity Falls 2021 👉 Do not reup\nCảm ơn mọi người đã sử dụng bot của mình\nP/s: Chúc mọi người một ngày tốt lành",event.threadID, event.messageID);
	}
}