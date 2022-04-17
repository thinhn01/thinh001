module.exports.config = {
	name: "subreddit",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Shiron",
	description: "subreddit",
	commandCategory: "Other",
	usages: "subreddit",
	cooldowns: 5,
	dependencies: {"axios" : ""}

	
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let decode = args.join(" ");
const res = await axios.get(`https://api.popcat.xyz/subreddit/${decode}`);
var name = res.data.name;
var title = res.data.title;
var active_users = res.data.active_users;
var members = res.data.members;
var description = res.data.description;
var icon = res.data.icon;
var banner = res.data.banner;
var allow_videos = res.data.allow_videos ? `${res.data.allow_videos}` : "Không"
var allow_images = res.data.allow_images ? `${res.data.allow_images}` : "Không"
var over_18 = res.data.over_18 ? `${res.data.over_18}` : "Không"
var url = res.data.url;

return api.sendMessage(`>Tên :${name}\n>Chức vụ :${title}\n>Người dùng tích cực :${active_users}\n>Các thành viên :${members}\n>Mô tả: ${description}\n>Biểu tượng :${icon}\nBìa : >${banner}\n>Cho phép video : ${allow_videos}\n>Cho phép hình ảnh : ${allow_images}\n>Trên 18 tuổi : ${over_18}\n>URL : ${url}`, event.threadID, event.messageID)
}

