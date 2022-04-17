module.exports.config = {
    name: "bye",
    version: "1.0.0",
    credits: "HĐGN",
    hasPermssion: 2,
    description: "Tự hủy",
    commandCategory: "Chế độ tự hủy",
    usages: "",
    cooldowns: 5
};

module.exports.run = function({ api, event, args }) {
var { senderID, threadID, messageID} = event;
  var msg = args.splice(0).join(" ");
api.sendMessage("Đã kích hoạt quá trình tự hủy!\nThời gian đếm ngược: " + msg*5 + " giây",threadID,messageID)
 a1 = msg*4
a2 = msg*3
a3 = msg*2
a4 = msg*1
setTimeout(() => api.sendMessage("Còn " +a1  + " giây",threadID,messageID),msg*1000)
setTimeout(() => api.sendMessage("Còn "+a2 + " giây",threadID,messageID), msg*2000)
setTimeout(() => api.sendMessage("Còn "+a3 + " giây",threadID,messageID),msg*3000)
setTimeout(() => api.sendMessage("Còn "+a4 + " giây",threadID,messageID),msg*4000)
setTimeout(() => api.sendMessage(`ki
Q
Q
Your PC ran into a problem and needs to restart. We're just
collecting some error info, and then we'll restart for you. (100%
complete)
17. 6a... 000 0 015.1. 001. 7
atkmpag sp)`,threadID, () =>  api.removeUserFromGroup(api.getCurrentUserID(),threadID),messageID),msg*5000)
}
