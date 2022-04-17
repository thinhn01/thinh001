module.exports.config = {
  name: "upanhapi",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "DuyVuong",
  description: "up ảnh lên api ảnh",
  commandCategory: "Coins",
  cooldowns: 1
};

module.exports.run = async ({ api, event, args, Users }) => {
  const { type: a, threadID: q, messageID: w, messageReply: e } = event;
  const https = require("https");
  var short = (url => new Promise((resolve, reject) => https.get('https://tinyurl.com/api-create.php?url=' + encodeURIComponent(url), res => res.on('data', chunk => resolve(chunk.toString()))).on("error", err => reject(err))))
  const send = (msg_send) => api.sendMessage(msg_send, q, w);
  if (a != 'message_reply') {
    return send('Vui lòng reply(Phản hồi) một bức ảnh!');
  }
  else {
    if (args.join(" ").length == 0) return send('Bạn chưa nhập type!');
    var o = [];
    const axios = require('axios');
    var success = 0;
    var error = 0;
    for (var i of e.attachments) {
      if (i.type == 'photo') {
        o.push(i.url);
      }
    }
    for (var i of o) {
      var r = await short(i);
      var u = (await axios.get('https://api.duiercayxu.repl.co/image/upload?type=' + args.join(" ") + '&link=' + r)).data;
      if (u.success == 200) {
        success++;
      }
      else {
        error++;
      }
    }
    return send('============\nDONE IMAGE: ' + success + ' image\nERROR IMAGE: ' + error + ' image\n============');
  }
}