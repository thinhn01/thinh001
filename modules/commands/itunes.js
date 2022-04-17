module.exports.config = {
	name: "itunes",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Shiron",
	description: "itunes",
	commandCategory: "Other",
	usages: "itunes",
	cooldowns: 5,
	dependencies: {"axios" : ""}

	
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let decode = args.join(" ");
const res = await axios.get(`https://api.popcat.xyz/itunes?q=${decode}`);
var url = res.data.url;
var name = res.data.name;
var artist = res.data.artist;
var album = res.data.album;
var release_date = res.data.release_date;
var price = res.data.price;
var length = res.data.length;
var genre = res.data.genre;
var thumbnail = res.data.thumbnail;
return api.sendMessage(`>URL :${url}\n>Tên :${name}\n>Họa sĩ :${artist}\n>Ảnh :${album}\n>Ngày phát hành: ${release_date}\n>Giá bán :${price}\nChiều dài : >${length}\n>Thể loại : ${genre}\n>Hình ảnh : ${thumbnail}`, event.threadID, event.messageID)
}

