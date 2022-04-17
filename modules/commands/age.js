module.exports.config = {
  name: "age",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "araxy XD",
  description: "age no api =))",
  commandCategory: "countdown",
  usages: "[ngày/tháng/năm sinh]",
  cooldowns: 0
};

module.exports.run = function ({ event, args, api, getText }) {
 const t = Date.parse(new Date()) - Date.parse(`${args[1]} ${args[0]}, ${args[2]} 00:00:00`) 
  var namss = new Date();
  var namhientai = namss.getFullYear() - args[2]
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );
  const week = Math.floor(days / 7)
const thang = Math.floor( days / 31 );
  const nam = Math.floor( days / 365 );
  
  return api.sendMessage(`${nam} năm ${thang} tháng ${week} Tuần ${days} ngày ${hours} tiếng ${minutes} phút ${seconds} giây`, event.threadID, event.messageID)
  //cc tu them text
}