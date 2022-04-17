module.exports.config = {
  name: "10mm",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "D-Jukie",
  description: "Nhận mail sử dụng trong 10p",
  commandCategory: "Tiện ích",
  usages: "[get] [new]",
    cooldowns: 0
}
module.exports.run = async ({api, event, args}) => {
  const axios = require('axios');
  const { threadID, messageID } = event;
  const apikey = 'ShironVip_MinCute'
  const choose = args[0]
  console.log(args.join(' ').slice(4))
  switch (choose) {
    case "domain": {
      var get = await axios.get(`https://hoangdogianguyenofficial.herokuapp.com/mail10p/domain`)
      var data = get.data
      var domain = data.domain
      return api.sendMessage(`${domain}`, threadID, messageID)
      break;
    }
    case 'get': {
      var get = await axios.get(`https://hoangdogianguyenofficial.herokuapp.com/mail10p/get?mail=${args.join(' ').slice(4)}&apikey=${apikey}`)
      var data = get.data
      var email = args.join(' ').slice(4)
      var id = data.data.mail_id,
        mail_from = data.data.mail_from,
        subject = data.data.subject,
        mail_text = data.data.mail_text
      return api.sendMessage(`Email: ${email}\nID Mail: ${id}\nFrom: ${mail_from}\nTiêu đề: ${subject}\nNội dung: ${mail_text}`, threadID, messageID)
      break;
    }
    case 'check': {
      var get = await axios.get(`https://hoangdogianguyenofficial.herokuapp.com/mail10p/check?id_mail=${args.join(' ').slice(6)}&apikey=${apikey}`)
      var data = get.data
      var email = args.join(' ').slice(6)
      var id = data.data.mail_id,
        mail_from = data.data.mail_from,
        subject = data.data.subject,
        mail_text = data.data.mail_text
      return api.sendMessage(`Email: ${email}\nID Mail: ${id}\nFrom: ${mail_from}\nTiêu đề: ${subject}\nNội dung: ${mail_text}`, threadID, messageID)
      break;
    }
    default: {
      return api.sendMessage(`DOMAIN - Lấy list domain tạo mail.\nGET - Lấy thông tin về email bạn đã sử dụng.\nCHECK - check nội dung đầu tiên trong hộp thư đến bằng id mail\n----------------------\nBạn tự đặt tên email theo domain trên hệ thống, ví dụ Shiron@promail1.net, khi có tin nhắn trong hộp thư đến thì bạn có thể GET email`, threadID, messageID)
    }
  }
}