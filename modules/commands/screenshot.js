module.exports.config = {
	name: "screenshot",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Screenshot một trang web nào đó (NOT ALLOW NSFW PAGE)",
	commandCategory: "other",
	usages: "[url site]",
	cooldowns: 5,
	dependencies: {
        "fs-extra": "",
        "path": "",
        "url": ""
    }
};

module.exports.run = async ({ event, api, args, }) => {
    const { readFileSync, createReadStream, unlinkSync } = global.nodemodule["fs-extra"];
    const url = global.nodemodule["url"];

    try {
        const path = __dirname + `/cache/${event.threadID}-${event.senderID}s.png`;
        await global.utils.downloadFile(`https://image.thum.io/get/width/1920/crop/400/fullpage/noanimate/${args[0]}`, path);
        api.sendMessage({ attachment: createReadStream(path) }, event.threadID, () => unlinkSync(path));
    }
    catch {
        return api.sendMessage("Không tìm thấy url này, định dạng không đúng ?", event.threadID, event.messageID);
    }
}