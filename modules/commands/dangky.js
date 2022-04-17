module.exports.config = {
    name: "dangky",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "tdunguwu",
    description: "Duyệt Box",
    commandCategory: "ờm",
    usages: "",
    cooldowns: 5
};
module.exports.handleEvent = async function ({  api, event, client, args }) {
  var { threadID, messageID } = event;
  const axios = require("axios")
  var info = await api.getUserInfo(event.senderID);
    var userName = info[event.senderID].name;
  if ( event.body == "dang ky" || event.body == "đăng ký" || event.body == "dangky") {
    const res = await axios.get(`https://bank-sv-3.mincute.repl.co/reg?uid=${event.senderID}&name=${encodeURI(userName)}`)
    if(`${res.data.data}` == "false") {
      return api.sendMessage(`${res.data.msg}`, threadID, messageID)
    } else {
      return api.sendMessage(`${res.data.msg} số lần request là ${res.data.request}`, threadID, messageID)
    }
  }
   }
module.exports.run = async function ({ api, event, client, args }) { 
  var { threadID, messageID, senderID } = event;
  const axios = require("axios")
   if(args[0] == "check") {
     const res = await axios.get(`https://bank-sv-3.mincute.repl.co/checkuser?uid=${senderID}`)
    if(`${res.data.data}` == "false") {
      return api.sendMessage(`${res.data.msg}`, threadID, messageID)
    } else {
      return api.sendMessage(`${res.data.msg}`, threadID, messageID)
    }
   }
    if(args[0] == "checkall" || args[0] == "all") { 
      var res = (await axios.get(`https://bank-sv-3.mincute.repl.co/checkalluser`)).data
        res.reverse()
    if(`${res.data}` == "false") {
      return api.sendMessage(`${res.data.msg}`, threadID, messageID)
    } else {
      var page = parseInt(args[1]) || 1;
        page < -1 ? page = 1 : "";
      var limit = 10;
      var msg = "[ CHECK ALL ]\n\n";
      var numPage = Math.ceil(res.length / limit);
      for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
        if (i >= res.length) break;
        msg += `[====[ ${i+1} ]====]\n[ UID ] - ${res[i].senderID}\n[ NAME ] - ${res[i].name}\n[ LƯỢT ] - ${res[i].request}\n\n`;   
      } 
      msg += `» Trang ${page}/${numPage}\n`
      return api.sendMessage(msg, threadID, messageID)
    }
    }
  if(args[0] == "add" || args[0] == "cộng" || args[0] == "thêm") {
    var uid_them = args[1]
    if(isNaN(uid_them) || !uid_them){
      return api.sendMessage('[ WARN ] - UID Phải Là Một Con Số', threadID, senderID)
    }
    var solan = args[2]
    if(isNaN(solan) || !solan) {
      return api.sendMessage('[ WARN ] - UID Phải Là Một Con Số', threadID, senderID)
    }
    const res = await axios.get(`https://bank-sv-3.mincute.repl.co/add?sender=${uid_them}&cong_them=${solan}`)
    if(`${res.data.data}` == "false") {
      return api.sendMessage(`${res.data.msg}`, threadID, messageID)
    } else {
      return api.sendMessage(`${res.data.msg}`, threadID, messageID)
    }
  } 
}