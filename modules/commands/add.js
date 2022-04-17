module.exports.config = {
    name: "add",
    version: "1.0.2",
    credits: "Shiron",
    hasPermssion: 0,
    description: "thêm thành viên bằng uid hoặc url facebook",
    commandCategory: "System",
    usages: "g",
    cooldowns: 0,
    dependencies: {
        "fb-tools": ""
    }
};
module.exports.run = async function ({ api, event, clientL, args }) {
    var loz = require("fb-tools");
    var url = args.join(" ");
var uid = await loz.findUid(url);
       api.addUserToGroup(uid, event.threadID)
}