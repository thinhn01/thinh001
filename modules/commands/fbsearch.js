module.exports.config = {
name: "fbsearch",
version: "1.0.0",
hasPermssion: 0,
credits: "Shiron",
description: "Tìm kiếm người dùng facebook thông qua từ khoá",
commandCategory: "user",
usages: "Tìm kiếm người dùng facebook thông qua từ khoá",
cooldowns: 5
};
module.exports.run = async function ({ api, args, event, Threads, Users }) {
  const fs = require("fs");
  const login = require("shiron");
  let type = args.join(" ");
  if (!type){
   return api.sendMessage("Vui lòng nhập từ khoá", event.threadID, event.messageID);
 }
 else {
  api.sendMessage("🔍Đang tìm kiếm vui lòng chờ đợi !", event.threadID, event.messageID);
    api.getUserID(`${type}`, (err, data) => {
      if (err) return console.error(err);
      var a = data[0].name;
      var a1 = data[0].userID;
      var b = data[1].name;
      var b1 = data[1].userID;
      var c = data[2].name;
      var c1 = data[2].userID;
      var d = data[3].name;
      var d1 = data[3].userID;
      var e = data[4].name;
      var e1 = data[4].userID;
      var g = data[5].name;
      var g1 = data[5].userID;
      var h = data[6].name;
      var h1 = data[6].userID;
      var j = data[7].name;
      var j1 = data[7].userID;
      var k = data[8].name;
      var k1 = data[8].userID;
      var l = data[9].name;
      var l1 = data[9].userID;
      var f0 = data[0].type;
      var f1 = data[1].type;
      var f2 = data[2].type;
      var f3 = data[3].type;
      var f4 = data[4].type;
      var f5 = data[5].type;
      var f6 = data[6].type;
      var f7 = data[7].type;
      var f8 = data[8].type;
      var f9 = data[9].type;
      var p0 = data[0].profileUrl;
      var p1 = data[1].profileUrl;
      var p2 = data[2].profileUrl;
      var p3 = data[3].profileUrl;
      var p4 = data[4].profileUrl;
      var p5 = data[5].profileUrl;
      var p6 = data[6].profileUrl;
      var p7 = data[7].profileUrl;
      var p8 = data[8].profileUrl;
      var p9 = data[9].profileUrl;
      api.sendMessage(`Đã tìm thấy 10 kết quả trùng với từ khoá!\n
1/Tên: ${a}\nID: ${a1}\nURL: ${p0}\nLoại: ${f0}\n\n
2/Tên: ${b}\nID: ${b1}\nURL: ${p1}\nLoại: ${f1}\n\n
3/Tên: ${c}\nID: ${c1}\nURL: ${p2}\nLoại: ${f2}\n\n
4/Tên: ${d}\nID: ${d1}\nURL: ${p3}\nLoại: ${f3}\n\n
5/Tên: ${e}\nID: ${e1}\nURL: ${p4}\nLoại: ${f4}\n\n
6/Tên: ${g}\nID: ${g1}\nURL: ${p5}\nLoại: ${f5}\n\n
7/Tên: ${h}\nID: ${h1}\nURL: ${p6}\nLoại: ${f6}\n\n
8/Tên: ${j}\nID: ${j1}\nURL: ${p7}\nLoại: ${f7}\n\n
9/Tên: ${k}\nID: ${k1}\nURL: ${p8}\nLoại: ${f8}\n\n
10/Tên: ${l}\nID: ${l1}\nURL: ${p9}\nLoại: ${f9}\n\n`, event.threadID, event.messageID);
    });
  }
};
