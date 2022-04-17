module.exports.config = {
	name: "tikuser", // Tên lệnh, được sử dụng trong việc gọi lệnh
	version: "0.0.1", // phiên bản của module này
	hasPermssion: 0, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
	credits: "Shiron convert GoatBot", // Công nhận module sở hữu là ai
	description: "xem thông tin người dùng tiktok", // Thông tin chi tiết về lệnh
	commandCategory: "other", // Thuộc vào nhóm nào: system, other, game-sp, game-mp, random-img, edit-img, media, economy, ...
	usages: "{prefix} username tiktok", // Cách sử dụng lệnh
	cooldowns: 0 // Thời gian một người có thể lặp lại lệnh
};
module.exports.run = async function ({
  api,
  event,
  client,
  args
}) {
const fs = require("fs-extra");
    const axios = require("axios");
    if (!args[0]) return api.sendMessage.SyntaxError();
    let data;
    try {
      data = ((await axios.get("https://www.tiktok.com/node/share/user/@" + args[0], {
        headers: {
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like) Version/12.0 eWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1"
        }
      }))).data;
    }
    catch(e) {
      return api.sendMessage("Đã xảy ra lỗi vui lòng thử lại sau");
    }
    if (data.statusCode == 10202 || Object.keys(data.userInfo).length == 0) return api.sendMessage(`Người dùng tiktok mang id ${args[0]} không tồn tại`);
    const { nickname, verified, uniqueId, avatarLarger, signature, privateAccount, bioLink } = data.userInfo.user;
    const { followerCount, followingCount, heart, diggCount, videoCount } = data.userInfo.stats;
    const pathSaveAvatar = __dirname + `/cache/avatarTikTok${nickname}.png`;
    
    const getAvt = (await axios.get(avatarLarger, {
      responseType: "arraybuffer"
    })).data;
    fs.writeFileSync(pathSaveAvatar, Buffer.from(getAvt));
    
    api.sendMessage({
      body: `===「USER TIKTOK」===`
        + `\n🤓 Tên: ${nickname}`
        + `\n🔖 ID: ${uniqueId}`
        + `\n🐥 Link: https://tiktok.com/@${uniqueId}`
        + `\n${privateAccount ? "🔒 Tài khoản riêng tư: có" : "🔓 Tài khoản riêng tư: không"}`
        + `\n👀 Người theo dõi: ${followerCount}`
        + `\n♻️ Đang theo dõi: ${followingCount}`
        + `\n💗 Lượt tim: ${heart}`
        + `\n💞 Đã thả tim: ${diggCount} video`
        + `\n📤 Video đã đăng: ${videoCount}`
        + `\n📝 Tiểu sử: ${signature}`
        + `\n📎 Bio link: ${bioLink ? bioLink.link : "Không có"}`
        + `\n✅ Tích xanh: ${verified ? "có" : "không"}`,
      attachment: fs.createReadStream(pathSaveAvatar)
    }, (e, info) => fs.unlinkSync(pathSaveAvatar));
};