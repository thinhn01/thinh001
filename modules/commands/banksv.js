module.exports.config = {
name: "banksv",
version: "0.0.5",
hasPermssion: 0,
credits: "tdunguwu", 
description: "",
commandCategory: "Coins",
usages: "",
cooldowns: 0,
 };
module.exports.run = async ({ event, api, Currencies, args, Users, permssion }) => {
  const axios = require("axios")
  const { threadID, messageID, senderID } = event;
  const name = (await Users.getData(senderID)).name
  var date = new Date();
  var duocsui = date.getDay();
  if ( duocsui == "0" ) {
    return api.sendMessage(`[ WARNING ] - Nay CN không làm việc đâu`, threadID, messageID)
  }
  if(args[0] == '-r' || args[0] == 'register') {
    const res = await axios.get(`https://bank-sv-3.mincute.repl.co/dangky?uid=${senderID}&name=${encodeURI(name)}`)
    if(`${res.data.data}` == "gban" || `${res.data.data}` == "true" ) {
      return api.sendMessage(`${res.data.msg}`, threadID, messageID)
    }

    else {
      return api.sendMessage(`[ SUCCESS ] » Bạn đã đăng kí thành công, số tài khoản của bạn là ${res.data.stk}, chúng tôi cho bạn 200$ và sau đó bạn phải gửi ít nhất 200$ để có lãi💰`, threadID, messageID)
    }
  }
  if(args[0] == 'all' || args[0] == '-a') {
    const res = await axios.get(`https://bank-sv-3.mincute.repl.co/checkall`)
    return api.sendMessage(`${res.data.data}`, threadID, messageID)
  }
   if(args[0] == 'find' || args[0] == '-f') {
     const res = await axios.get(`https://bank-sv-3.mincute.repl.co/find?luachon=${args[1]}&find=${args[2]}`)
     if (!args[1]) {
       return api.sendMessage('bạn chưa nhập lựa chọn', threadID, messageID)
     }
     if (!args[2]) {
       return api.sendMessage('bạn chưa nhập id / stk', threadID, messageID)
     }
     if (`${res.data.data}` == "false") {
       return api.sendMessage('[ WARNING ] Tài Khoản Không Tồn Tại Trên MIRAI BANK', threadID, messageID)
     } else {
       api.sendMessage(`${res.data.data}`, threadID, messageID)
     }
   }
   if(args[0] == 'check' || args[0] == '-c') {
     const res = await axios.get(`https://bank-sv-3.mincute.repl.co/check?senderID=${senderID}`)
     if (`${res.data.data}` == "false") {
       return api.sendMessage('[ WARNING ] Tài Khoản Không Tồn Tại Trên MIRAI BANK', threadID, messageID)
     } else {
       api.sendMessage(`${res.data.data}`, threadID, messageID)
     }
   } 
 if(args[0] == 'send' || args[0] == 'gửi') {
   if (!args[1] || isNaN(args[1]) || parseInt(args[1]) < 50) {return api.sendMessage("[ WARNING ] » Số tiền cần gửi phải là 1 con số và lớn hơn 50$💰", threadID, messageID)};
const moneyy = (await Currencies.getData(senderID)).money;
  if(moneyy < args[1]){ return api.sendMessage(`[ WARNING ] » Số dư không đủ ${args[1]} để gửi vào MIRAI Bank💰 `, threadID, messageID)
  } else {
     const res = await axios.get(`https://bank-sv-3.mincute.repl.co/send?senderID=${senderID}&sotien=${args[1]}`)
     if (`${res.data.data}` == "false") {
       return api.sendMessage('[ WARNING ] Tài Khoản Không Tồn Tại Trên MIRAI BANK', threadID, messageID)
     } else {
        await Currencies.decreaseMoney(event.senderID, parseInt(args[1]))
        
       return api.sendMessage(`${res.data.data}`, threadID, messageID)
     }
  }
}
if(args[0] == 'rút' || args[0] == 'lấy') {
  if (!args[1] || isNaN(args[1]) || parseInt(args[1]) < 50) {return api.sendMessage("[ WARNING ] » Số tiền cần gửi phải là 1 con số và lớn hơn 50$💰", threadID, messageID)};
const moneyy = (await Currencies.getData(senderID)).money;
const res = await axios.get(`https://bank-sv-3.mincute.repl.co/rut?senderID=${senderID}&sotien=${args[1]}`)
if (`${res.data.data}` == "false") {
       return api.sendMessage('[ WARNING ] Tài Khoản Không Tồn Tại Trên MIRAI BANK hoặc không đủ tiền', threadID, messageID)
     } else {
        await Currencies.increaseMoney(event.senderID, parseInt(args[1]))
        
       return api.sendMessage(`${res.data.data}`, threadID, messageID)
     }
} 
if(args[0] == 'pay') {
  if (!args[1] || isNaN(args[1]) || parseInt(args[1]) < 50) {return api.sendMessage("[ WARNING ] » STK không tồn tại hoặc lý do gì đó quên r", threadID, messageID)};
  if (!args[2] || isNaN(args[2]) || parseInt(args[2]) < 50) {return api.sendMessage("[ WARNING ] » Số tiền cần gửi phải là 1 con số và lớn hơn 50$💰", threadID, messageID)};
const res = await axios.get(`https://bank-sv-3.mincute.repl.co/pay?sender=${senderID}&nguoinhan=${args[1]}&sotien=${args[2]}`)
if (`${res.data.data}` == "false") {
       return api.sendMessage('[ WARNING ] Tài Khoản Không Tồn Tại Trên MIRAI BANK hoặc không đủ tiền', threadID, messageID)
     } else {
        return api.sendMessage(`${res.data.data}`, threadID, messageID)
      }
}
if(args[0] == 'top') { 
  const res = await axios.get(`https://bank-sv-3.mincute.repl.co/checktop`)
  return api.sendMessage(`${res.data.data}`, threadID, messageID)
}
if(args[0] == 'gbanlist') { 
  const res = await axios.get(`https://bank-sv-3.mincute.repl.co/gbancheckall`)
  return api.sendMessage(`${res.data.data}`, threadID, messageID)
}
if(args[0] == 'gbanadd') { 
  const res = await axios.get(`https://bank-sv-3.mincute.repl.co/gban?uid=${args[1]}&reson=${encodeURI(args.slice(2))}&author=${senderID}`)
  return api.sendMessage(`>${res.data.data.data}\n> UID: ${res.data.data.senderID}> LÝ DO: ${res.data.data.reson}`, threadID, messageID)
}
if (!args[0]) {
  var res = await axios.get("https://bank-sv-3.mincute.repl.co/home")
   return api.sendMessage(`${res.data.data}`, threadID, messageID)
}
}