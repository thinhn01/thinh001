const fs = require("fs");
module.exports.config = {
name: "stk",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Shiron",
    description: "stk",
    commandCategory: "stk",
    usages: "stk",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
    var { threadID, messageID } = event;
    var { threadID, messageID, body, senderID } = event; const thread = global.data.threadData.get(threadID) || {};
    if (typeof thread["stk"] !== "undefined" && thread["stk"] == false) return;
    if (event.body.indexOf("stk")==0 || (event.body.indexOf("Stk")==0) || (event.body.indexOf("STK")==0) || (event.body.indexOf("Donate")==0) || (event.body.indexOf("donate")==0) || (event.body.indexOf("DONATE")==0)) {
        var msg = {
                body: "Mbbank:0335953652\nMomo: 0335953652\nHoàng Đỗ Gia Nguyên\nSacombank:050124512112\nHoàng Đỗ Gia Nguyên\nHoặc donate thầm lặng thì ib qua FB:https://www.facebook.com/HoangDoGiaNguyenOwO",
                attachment: fs.createReadStream(__dirname + `/noprefix/stk.gif`)
            }
            return api.sendMessage(msg, threadID, messageID);
        }
    }
    module.exports.run = function({ api, event, client, __GLOBAL }) {

}

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": "stk thành công",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "stk success!",
  }
}

module.exports.run = async function ({ api, event, Threads, getText }) {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["stk"] == "undefined" || data["stk"] == true) data["stk"] = false;
  else data["stk"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["stk"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}