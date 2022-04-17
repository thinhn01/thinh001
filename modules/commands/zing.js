module.exports.config = {
name: "zing",
version: "1.0.0",
hasPermssion: 0,
credits: "Shiron",
description: "Xem lời bài hát",
commandCategory: "media",
usages: "[tên bài hát]",
cooldowns: 5
};
module.exports.run = async function({ api, args, event }) {
const axios = require('axios')
  const fs = require("fs-extra");
  const request = require("request");
  if (!args[0]) return api.sendMessage('» Phần tìm kiếm không được để trống!', event.threadID, event.messageID);
  const keywordSearch = args.join(" ");
  try {
    var res = (await axios.get(`https://api.leanhtruong.net/api/zingmp3.php?api_key=leanhtruong_KPKniWRgee0IXPt8qunw&get=true&search=${encodeURIComponent(keywordSearch)}`)).data;
    var dataMusic = res, msg = '', num = 0, id = [], namee = [];
    for (var i = 0; i < 6; i++) {
      if (decodeURIComponent(dataMusic.search_result[i].name) != 'null') {
        msg += `${num += 1}. » Tên Bài hát : ${decodeURIComponent(dataMusic.search_result[i].name)}\n» Ca Sĩ : ${dataMusic.search_result[i].artist}\n`;
        id.push((dataMusic.search_result[i].id).id)
        namee.push(decodeURIComponent(dataMusic.search_result[i].name))
      }
    }
    return api.sendMessage(`🔎Có ${id.length} kết quả trùng với từ khoá tìm kiếm của bạn:\n\n${msg}\n» Hãy reply(phản hồi) chọn một trong những tìm kiếm trên`, event.threadID,
      (error, info) =>
        global.client.handleReply.push({
          name: 'zing',
          messageID: info.messageID,
          author: event.senderID,
          id,
          namee
        }),
      event.messageID);
  }
  catch{
    api.sendMessage(`» Không tìm thấy từ khoá, xin thử lại với kết quả khác!`, event.threadID, event.messageID);
  }
}
module.exports.handleReply = async function ({ event, api, handleReply }) {
  const { id, messageID, namee } = handleReply
  const axios = require('axios')
  const fs = require("fs-extra");
  const request = require("request");
  try {
    const downloadLink = (await axios.get(`http://api.mp3.zing.vn/api/streaming/audio/${id[event.body - 1]}/320`, { responseType: "arraybuffer" })).data
    fs.writeFileSync(__dirname + `/cache/${id[event.body - 1]}.m4a`, Buffer.from(downloadLink, "utf-8"));
    api.unsendMessage(messageID)
    if (fs.statSync(__dirname + `/cache/${id[event.body - 1]}.m4a`).size > 26000000) return api.sendMessage('» Không thể gửi file vì dung lượng lớn hơn 25MB.', event.threadID, () => unlinkSync(__dirname + `/cache/${id[event.body - 1]}.m4a`), event.messageID);
    else return api.sendMessage({
      body: `${namee[event.body - 1]}`,
      attachment: fs.createReadStream(__dirname + `/cache/${id[event.body - 1]}.m4a`)
    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/${id[event.body - 1]}.m4a`), event.messageID)
  } catch {
    return api.sendMessage('» Không thể xử lý yêu cầu của bạn!', event.threadID, event.messageID);
  }
  return api.unsendMessage(messageID);
}