module.exports.config = {
	name: "boxname",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HungCatMoi",
	description: "Đổi tên nhóm của bạn",
	commandCategory: "Box", 
	usages: "boxname [name]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
	var boxname = args.join(" ")
	if (!boxname) api.sendMessage("Bạn chưa nhập tên nhóm cần đổi UwU", event.threadID, event.messageID)
    else api.setTitle(boxname, event.threadID, () => api.sendMessage(`🔨 Bot đã đổi thành công tên nhóm thành: ${boxname}`, event.threadID, event.messageID));
}