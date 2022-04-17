module.exports.config = {
	name: "active", // Tên lệnh, được sử dụng trong việc gọi lệnh
	version: "0.0.0", // phiên bản của module này
	hasPermssion: 2, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
	credits: "Shiron", // Công nhận module sở hữu là ai
	description: "Duyệt ID bot dùng Lawer Project", // Thông tin chi tiết về lệnh
	commandCategory: "LawerPr0ject", // Thuộc vào nhóm nào: system, other, game-sp, game-mp, random-img, edit-img, media, economy, ...
	usages: "active [id bot]", // Cách sử dụng lệnh
	cooldowns: 5 // Thời gian một người có thể lặp lại lệnh
};

module.exports.run = async function({ api, event, args, models, Users, Threads, Currencies, permssion }) {
const { threadID, messageID } = event;
const axios = require('axios')
    let data = await axios.get(`https://api.kadeeruwu.repl.co/lawer?ID=${args.join(' ')}`)
    if(data.data.status == true) {
	    return api.sendMessage('Phê duyệt ID: ' + args.join(' ') + ' thành công!', threadID, messageID);
    }
    if(data.data.status == false) {
	    return api.sendMessage('Người dùng này đã được phê duyệt trước đó!!', threadID, messageID);
    }
    else {
	    api.sendMessage('Server bận!', threadID, messageID);
    }
}