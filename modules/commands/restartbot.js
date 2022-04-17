module.exports.config = {
	name: "restartbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "Khởi Động Lại Bot.",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = async function({ api, event })
{
  api.sendMessage("Bot Của Hoàng Đỗ Gia Nguyên Đang Khởi Động Lại",event.threadID, () =>process.exit(1))
}