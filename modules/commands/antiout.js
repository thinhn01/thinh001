module.exports.config = {
 name: "antiout",
 version: "1.0.0",
 credits: "DungUwU (Khánh Milo Fix)",
 hasPermssion: 1,
 description: "Lôi cổ mấy nhóc out chùa😼",
 usages: "",
    commandCategory: "system",
 cooldowns: 0
};

module.exports.languages = {
   "vi": {
      "on": "bật",
      "off": "tắt",
      "successText": "thành công antiout!"
   },
   "en": {
      "on": "on",
      "off": "off",
      "successText": "success antiout!"
   }
}

module.exports.run = async({ api, event, Threads, getText }) => {
 var info = await api.getThreadInfo(event.threadID);
 let data = (await Threads.getData(event.threadID)).data || {};
 if (typeof data["antiout"] == "undefined" || data["antiout"] == false) data["antiout"] = true;
 else data["antiout"] = false;
 await Threads.setData(event.threadID, { data });
 global.data.threadData.set(parseInt(event.threadID), data);
 return api.sendMessage(`${(data["antiout"] == true) ? getText("on") : getText("off")} ${getText("successText")}`, event.threadID);

}