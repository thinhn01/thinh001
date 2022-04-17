module.exports.config = {
	name: "notification",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "NTKhang",
	description: "Đăng ký hoặc hủy đăng ký nhận các thông báo mới về bot qua gmail!",//(https://accounts.google.com/b/0/DisplayUnlockCaptcha,https://myaccount.google.com/u/0/lesssecureapps?utm_source=google-account&utm_medium=web&pli=1&rapt=AEjHL4Pf_4cFw6sYBzX-0_aE0fZrivb1OYeR-tSMlK-PUgKShNk_o_NEAx-VGhfdBwmprZfcShc_Xm6jOJcicz6CAzmg_fBSoA)
	commandCategory: "system",
	dependencies:{"nodemailer": ""},
	usages: "$notification register your_gmail: dùng để đăng ký nhận các thông báo mới về bot qua gmail\n\nHoặc $notification unregister your_gmail: dùng để hủy đăng ký nhận các thông báo mới về bot qua gmail\n\nHoặc $notification send <nội dung>: dùng để gửi thông báo tới tất cả gmail đã đăng ký nhận thông báo (chỉ admin bot dùng được)\n\nHoặc $notification view: dùng để xem danh sách gmail đã đăng ký nhận thông báo (chỉ admin bot dùng được)",
};

module.exports.handleReply = ({ event, api, handleReply }) => {
  var { author, rdnumber, type, sendtomail } = handleReply;
  if((event.senderID) != author) return;
  const fs = require("fs-extra");
  var listregister = require("./cache/notification/listregister.json");
  var path = __dirname+"/cache/notification/listregister.json";
  if(type == "register") {
    if(Object.values(listregister).includes(sendtomail)) return api.sendMessage("Địa chỉ mail này đã đăng ký nhận thông báo từ trước", event.threadID, event.messageID);
    if(rdnumber != event.body) return api.sendMessage("Mã xác nhận không đúng, vui lòng thử lại", event.threadID, (err, info) => global.client.handleReply.push({
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID,
            rdnumber: rdnumber,
            sendtomail: sendtomail,
            type: "register"
          }), event.messageID);
      else {
         listregister[event.senderID] = sendtomail;
         api.sendMessage("Đã đăng ký nhận thông báo mới về bot thành công!!", event.threadID, event.messageID);
      }
  }
  else if(type == "unregister") {
        if(!Object.values(listregister).includes(sendtomail)) return api.sendMessage("Địa chỉ mail này đã hủy đăng ký nhận thông báo từ trước", event.threadID, event.messageID);
    if(rdnumber != event.body) return api.sendMessage("Mã xác nhận không đúng, vui lòng thử lại", event.threadID, (err, info) => global.client.handleReply.push({
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID,
            rdnumber: rdnumber,
            sendtomail: sendtomail,
            type: "unregister"
          }), event.messageID);
       else {
         delete listregister[event.senderID];
          api.sendMessage("Đã hủy đăng ký nhận thông báo về bot!!", event.threadID, event.messageID);
       }
  }
  return fs.writeFileSync(path, JSON.stringify(listregister, null, 2));
};



module.exports.run = async ({ utils, event, api, args }) => {
  const fs = require("fs-extra");
  const mailer = require("nodemailer");
  const axios = require("axios");
  var name = this.config.name;
  
  var download = async (link, path) => {
    let getfile = (await axios.get(link, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(path, Buffer.from(getfile, "utf-8"));
  }
  
  var path = __dirname+"/cache/notification";
  if(!fs.existsSync(path)) fs.mkdir(path);
  if(!fs.existsSync(path+"/listregister.json")) fs.writeFileSync(path+"/listregister.json", JSON.stringify({}));
  if(!fs.existsSync(path+"/htmlverify.js")) await download("https://raw.githubusercontent.com/Shiron-Official/Data-1/master/module-notification/htmlverify.js", path+"/htmlverify.js");
  if(!fs.existsSync(path+"/htmlsendmail.js")) await download("https://raw.githubusercontent.com/Shiron-Official/Data-1/master/module-notification/htmlsendmail.js", path+"/htmlsendmail.js");
  var listregister = require("./cache/notification/listregister.json");
  
  var usermail = "hoangdogianguyenvpbq@gmail.com";
  var passmail = "Hoangnguyen0";
  var sendtomail = args[1];//mail của người đăng ký/hủy đắng ký
  var infoadbot = "Hoàng Đỗ Gia Nguyên";//info ad bot (bot của...)
  var transporter = mailer.createTransport({
    service: 'gmail',
    auth: {user: usermail,pass: passmail}
  });
  
  var mailsend = {
    from: "Messenger Bot Chat",
    to: sendtomail,
    subject: "",
    text: "Verification mail",
    html: ""
  };
  var rdnumber = Math.floor(Math.random() * 999999);//random số để Verify mail 
  
  if(args[0] == "register") {
    if(!args[1]) return api.sendMessage("Bạn chưa nhập địa chỉ gmail", event.threadID, event.messageID);
    if(Object.values(listregister).includes(sendtomail)) return api.sendMessage("Địa chỉ mail này đã đăng ký nhận thông báo từ trước", event.threadID, event.messageID);
    if(args[1].indexOf("@gmail.com") == -1) return api.sendMessage("Địa chỉ gmail không hợp lệ", event.threadID, event.messageID);
    var textsend1 = `Hi!, Thanks you for using my bot<br>Xin chào, bạn vừa đăng ký nhận thông báo mới về bot của <b>${infoadbot}</b>`;
    var textsend2 = `Mã xác minh của bạn là: ${rdnumber}`;
    mailsend.subject = `Verify your gmail to finish signups get notifications bot chat messenger of ${infoadbot}`;
    mailsend.html = require("./cache/notification/htmlverify.js")(textsend1, textsend2);
         return transporter.sendMail(mailsend, function(err, info) {
           if(err) console.log(err);
          api.sendMessage("📩Một mail kèm xác minh vừa được gửi đến gmail của bạn, vui lòng reply tin nhắn này kèm mã xác minh đó để xác nhận đăng ký!\n•Không thấy mail? Hãy check hòm thư rác📬", event.threadID, (err, data) => global.client.handleReply.push({
            name: name,
            author: event.senderID,
            messageID: data.messageID,
            rdnumber: rdnumber,
            sendtomail: sendtomail,
            type: "register"
          }), event.messageID);
        });
  }
  
  else if(args[0] == "unregister") {
    if(!args[1]) return api.sendMessage("Bạn chưa nhập địa chỉ gmail", event.threadID, event.messageID);
    if(args[1].indexOf("@gmail.com") == -1) return api.sendMessage("Địa chỉ gmail không hợp lệ", event.threadID, event.messageID);
    var maildel = args[1];//mail sẽ xóa khỏi list nhận thông báo
    if(!Object.values(listregister).includes(sendtomail)) return api.sendMessage("Địa chỉ mail này chưa đăng ký nhận thông báo mới về bot", event.threadID, event.messageID);
    var textsend1 = `Thanks you for using my bot<br>Xin chào, bạn vừa yêu cầu hủy đăng ký nhận thông báo mới về bot của <b>${infoadbot}</b>`;
    var textsend2 = `Mã xác minh của bạn là: ${rdnumber}`;
    mailsend.subject = `Xác nhận hủy đăng ký nhận thông báo mới về bot chat messenger của ${infoadbot}`;
    mailsend.html = require("./cache/notification/htmlverify.js")(textsend1, textsend2);
    return transporter.sendMail(mailsend, function(err, info) {
          if(err) return console.log(err);
          api.sendMessage("📩Một mail kèm mã xác minh vừa được gửi đến gmail của bạn, vui lòng reply tin nhắn này kèm mã xác minh đó để xác nhận hủy đăng ký nhận các thông báo mới về bot qua gmail!", event.threadID, (err, info) => global.client.handleReply.push({
            name: name,
            author: event.senderID,
            messageID: info.messageID,
            rdnumber: rdnumber,
            sendtomail: sendtomail,
            type: "unregister"
          }), event.messageID);
    });
  }
  else if(args[0] == "send") {
    var idad = global.config.ADMINBOT;
    if(!idad.includes(event.senderID)) return api.sendMessage("Bạn không đủ quyền hạn để sử dụng lệnh này", event.threadID, event.messageID);
    if(!args[1]) return api.sendMessage("Bạn chưa nhập nội dung cần thông báo", event.threadID, event.messageID);
    var sendtomail = Object.values(listregister);
    if(sendtomail.length == 0) return api.sendMessage("Chưa có ai đăng ký nhận thông báo", event.threadID, event.messageID);
    
    var mailsend = {
    from: "Messenger Bot Chat",
    to: sendtomail,
    subject: "Thông báo mới về bot chat messenger của "+infoadbot,
    text: "New notifications",
    html: require("./cache/notification/htmlsendmail.js")(args.slice(1).join(" "))
    };
    return transporter.sendMail(mailsend, function(err, info) {
      if(err) console.log(err);
       api.sendMessage("✅Thông báo của bạn đã được gửi đến tất cả các gmail đăng ký nhận thông báo", event.threadID, event.messageID);
    });
  }
  else if(args[0] == "view") {
    var idad = global.config.ADMINBOT;
    if(!idad.includes(event.senderID)) return api.sendMessage("Bạn không đủ quyền hạn để sử dụng lệnh này", event.threadID, event.messageID);
    var listmail = Object.values(listregister);
    if(listmail.length == 0) return api.sendMessage("Chưa có ai đăng ký nhận thông báo", event.threadID, event.messageID);
    return api.sendMessage("Check ib", event.threadID, (e, i) => api.sendMessage("Những gmail đã đăng ký nhận thông báo mới về bot:\n\n"+listmail.join("\n"),event.senderID),event.messageID);
  }
  else if(args[0] == "del" || args[0] == "delete") {
    var idad = global.config.ADMINBOT;
    if(!idad.includes(event.senderID)) return api.sendMessage("Bạn không đủ quyền hạn để sử dụng lệnh này", event.threadID, event.messageID);
    var target = args[1];
    var del = false;
    for(let i in listregister) {
      if(listregister[i] == target) {
        delete listregister[i];
        del = true;
      }
    }
    del == true ? api.sendMessage(`Đã xóa email ${args[1]} khỏi danh sách nhận thông báo mới về bot`, event.threadID, event.messageiD) : api.sendMessage(`Không tìm thấy email ${args[1]} trong danh sách nhận thông báo mới về bot`, event.threadID, event.messageiD);
    fs.writeFileSync(path+"/listregister.json", JSON.stringify(listregister));
  }
  else return utils.throwError(this.config.name, event.threadID, event.messageID);
}
