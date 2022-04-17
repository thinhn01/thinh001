module.exports.config = {
  name: "tinhtuoi",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SenProject",
  description: "",
  usages: "[key]",
  commandCategory: "tiện ích",
  cooldowns: 5,
  dependencies: {
    "axios": "",
  }
};


module.exports. run = async function({ api, event, args }) {
  const axios = require("axios");
  const date = (args[0] || "").split('/');
  if (date.length < 3) return api.sendMessage('Vui lòng nhập ngày tháng năm hợp lệ theo định dạng DD/MM/YYYY', event.threadID, event.messageID);
  axios.get('https://goatbot.tk/taoanhdep/age', {
    params: {
      day: date[0],
      month: date[1],
      year: date[2],
      apikey: "xksatvansyvahsh"
    },
    responseType: "stream"
  })
  .then(response => {
    api.sendMessage({
      attachment: response.data
    }, event.threadID, event.messageID);
  })
  .catch(error => {
    if ((error).response) error.response.data.on("data", function(e) {
      const err = JSON.parse(e);
      api.sendMessage(`Đã xảy ra lỗi ${err.name}: ${err.message}`, event.threadID, event.messageID);
    });
    else api.sendMessage(`Đã xảy ra lỗi ${error.name}: ${error.message}`, event.threadID, event.messageID);
  });
};