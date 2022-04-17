module.exports.config = {
  name: "instagram",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thiệu Trung Kiên",
  description: "Xem thông tin instagram || Thiệu Trung Kiên",
  commandCategory: "Group",
  usages: "[username]",
  cooldowns: 5
};

module.exports.run = async ({
  api,
  event,
  args
}) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var tip = args.join(" ");
  if (!tip) return api.sendMessage(`Nhập username`, event.threadID, event.messageID);
  else {
    axios.get(`https://api.popcat.xyz/instagram?user=${encodeURIComponent(tip)}`).then(res => {
      let username = res.data.username,
        full_name = res.data.full_name,
        biography = res.data.biography,
        posts = res.data.posts,
        reels = res.data.reels,
        followers = res.data.followers,
        following = res.data.following,
        private = res.data.private ? `${res.data.private}` : "Không"
        verified = res.data.verified ? `${res.data.verified}` : "Không"
      var profile_pic = res.data.profile_pic;
      let callback = function () {
        api.sendMessage({
          body: `INSTAGRAM\n\n›Tên: ${full_name}\n›Tiểu sử : ${biography}\n›Số bài viết : ${posts}\n›Video story : ${reels}\n›Lượt theo dõi : ${followers}\n›Đã theo dõi : ${following}\n›Chế độ riêng tư : ${private}\n›Xác minh : ${verified}`,
          attachment: fs.createReadStream(__dirname + `/cache/covidtk.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/covidtk.png`), event.messageID);
      };
      request(encodeURI(profile_pic)).pipe(fs.createWriteStream(__dirname + `/cache/covidtk.png`)).on("close", callback);
    })
  }
}