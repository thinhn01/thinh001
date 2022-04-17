module.exports.config = {
 name: "log",
 version: "1.0.0",
 credits: "D-Jukie",
 hasPermssion: 2,
 description: "Bật tắt tin nhắn thông báo về admin",
 usages: "",
 commandCategory: "Admin",
 cooldowns: 0
};

module.exports.run = async({ api, event, Threads}) => {
   var data = (await Threads.getData(event.threadID)).data || {};
   if (typeof data["log"] == "undefined" || data["log"] == false) data["log"] = true;
   else data["log"] = false;
   await Threads.setData(event.threadID, { data });
   global.data.threadData.set(parseInt(event.threadID), data);
   return api.sendMessage(`Đã ${(data["log"] == true) ? "bật" : "tắt"} thành công tin nhắn gửi về admin!`, event.threadID);
}