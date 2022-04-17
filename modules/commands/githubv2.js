module.exports.config = {
  name: "githubv2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Shiron",
  description: "github",
  commandCategory: "Other",
  usages: "github",
  cooldowns: 5,
  dependencies: {"axios" : ""}

  
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let decode = args.join(" ");
const res = await axios.get(`https://api.popcat.xyz/github/${decode}`);
var url = res.data.url;
var avatar = res.data.avatar;
var account_type = res.data.account_type;
var name = res.data.name;
var company = res.data.company;
var blog = res.data.blog;
var location = res.data.location;
var email = res.data.email;
var bio = res.data.bio;
var twitter = res.data.twitter;
var public_repos = res.data.public_repos;
var public_gists = res.data.public_gists;
var followers = res.data.followers;
var following = res.data.following;
var created_at = res.data.created_at;
var updated_at = res.data.updated_at;

return api.sendMessage(`>URL :${url}\n>Hình đại diện :${avatar}\n>Kiểu tài khoản :${account_type}\n>Tên :${name}\n>Công ty: ${company}\n>Blog :${blog}\n>Vị trí : ${location}\n>Email : ${email}\n>Tiểu sử : ${bio}\n>Twitter : ${twitter}\n>Repo công khai: ${public_repos}\n>Git công khai : ${public_gists}\n>Người theo dõi : ${followers}\n>Đang theo dõi : ${following}\n>Được tạo ra tại : ${created_at}\n>Cập nhật tại : ${updated_at}`, event.threadID, event.messageID)
}

