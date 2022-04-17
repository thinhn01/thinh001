module.exports.config = {
	name: "steam",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Shiron",
	description: "steam",
	commandCategory: "Other",
	usages: "steam",
	cooldowns: 5,
	dependencies: {"axios" : ""}

	
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let decode = args.join(" ");
const res = await axios.get(`https://api.popcat.xyz/steam?q=${decode}`);
var type = res.data.type;
var name = res.data.name;
var thumbnail = res.data.thumbnail;
var controller_support = res.data.controller_support;
var description = res.data.description;
var website = res.data.website;
var banner = res.data.banner;
var developers = res.data.developers;
var publishers = res.data.publishers;
var price = res.data.price;

return api.sendMessage(`>Kiểu :${type}\n>Tên :${name}\n>Hình ảnh :${thumbnail}\n>Hỗ trợ bộ điều khiển :${controller_support}\n>Mô tả: ${description}\n>Trang mạng :${website}\nBìa : >${banner}\n>Các nhà phát triển : ${developers}\n>Nhà xuất bản : ${publishers}\n>Giá : ${price}`, event.threadID, event.messageID)
}

