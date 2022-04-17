module.exports.config = {
 name: "chongcuopbox",
 version: "1.0.0",
 credits: "D-Jukie",
 hasPermssion: 1,
 description: "Ngăn chặn việc thay đổi admin",
 usages: "",
 commandCategory: "Hệ thống",
 cooldowns: 0
};

module.exports.languages = {
  "vi": {
    "on": "bật",
    "off": "tắt",
    "successText": "thành công chongcuopbox!"
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "success chongcuopbox!"
  }
}

module.exports.run = async({ api, event, Threads, getText }) => {
    const info = await api.getThreadInfo(event.threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) 
      return api.sendMessage('» Cần quyền quản trị viên nhóm, vui lòng thêm và thử lại!', event.threadID, event.messageID);
    let data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data["chongcuopbox"] == "undefined" || data["chongcuopbox"] == false) data["chongcuopbox"] = true;
    else data["chongcuopbox"] = false;
    await Threads.setData(event.threadID, { data });
      global.data.threadData.set(parseInt(event.threadID), data);
    return api.sendMessage(`${(data["chongcuopbox"] == true) ? getText("on") : getText("off")} ${getText("successText")}`, event.threadID);
}