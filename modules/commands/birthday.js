module.exports.config = {
	name: "birthday",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "CatalizCS",
	description: "Đếm ngược tới sinh nhật của Hoàng Đỗ Gia Nguyên",
	commandCategory: "other",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("October 29, 2022 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(` ❤️🐧Đếm Ngược Thời Gian Đến Sinh Nhật Của Hoàng Đỗ Gia Nguyên🐧❤️ \n» Còn Lại ${days} ngày ${hours} tiếng ${minutes} phút ${seconds} giây là đến sinh nhật của Hoàng Đỗ Gia Nguyên rồi 🎉🥳 «`, event.threadID, event.messageID);
}