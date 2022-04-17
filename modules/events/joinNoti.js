const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "HĐGN",
	description: "Thông báo bot hoặc người vào nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": "",
		"pidusage": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event, Users, Threads }) {
	const { join } = global.nodemodule["path"];
	const time = moment.tz("Asia/Ho_Chi_Minh").format("HH");
	const { threadID } = event;
	const thread = global.data.threadData.get(threadID) || {};
    if (typeof thread["joinNoti"] != "undefined" && thread["joinNoti"] == false) return;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Made by CatalizCS and SpermLord" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		const moment = require("moment-timezone");
		return api.sendMessage("", event.threadID, () => api.sendMessage({body:`Đã kết nối thành công! Bot Shiron đã kết nối với với box chat, liên hệ với tôi qua Facebook: https://www.facebook.com/HoangDoGiaNguyenOwO hoặc Zalo: 0335953652, Chúc các bạn trải nghiệm bot vui vẻ không spam phá bot dưới mọi hình thức nhé 🐧❤Prefix bot: ${global.config.PREFIX}\nĐể xem danh sách lệnh hãy nhập: ${global.config.PREFIX}help`, attachment: fs.createReadStream(__dirname + "/cache/joinbox/join.mp4")} ,threadID));
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let threadInfo = (await Threads.getData(event.threadID)).threadInfo;
			threadName = threadInfo.threadName;

			const threadData = global.data.threadData.get(event.threadID) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `${threadID}.gif`);
          
			var mentions = [], nameArray = [], memLength = [];
			
			for (var i = 0; i < event.logMessageData.addedParticipants.length; i++) {
				let id = event.logMessageData.addedParticipants[i].userFbId;
				const userName = event.logMessageData.addedParticipants[i].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(threadInfo.participantIDs.length - i);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "Chào mừng con vợ {name} .\nChào mừng đã đến với nhóm {threadName}.\n{type} là thành viên thứ {soThanhVien} của nhóm. Tương tác nhiều vào nhé không là bị đá ra khỏi nhóm đấy 🥳\nChúc {type} có một buổi {session} vui vẻ ☺️" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : 'bạn')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName)
			.replace(/\{session}/g, time <= 10 ? "sáng" : 
            time > 10 && time <= 12 ? "trưa" :
            time > 12 && time <= 18 ? "chiều" : "tối");

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, event.threadID);
		} catch (e) { return console.log(e) };
	}
}