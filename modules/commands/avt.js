
module.exports.config = {
    name: "avt",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Shiron",
    description: "Tạo ra một avt trên taoanhdep.",
    commandCategory: "image",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "request": "",
        "axios": ""
    }
};
module.exports.handleReply = async function ({ event, api, handleReply, Users }) {
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const timeStart = Date.now();
    if (handleReply.author != event.senderID) return;
    const { threadID, messageID, senderID, body } = event;
    var id = handleReply.id;
    const name = this.config.name;
    var nameSender = (await Users.getData(event.senderID)).name
    var arraytag = [];
        arraytag.push({id: event.senderID, tag: nameSender});
    switch (handleReply.type) {
      case "shiron": {
        var id = handleReply.id;
        var names = handleReply.names;
        api.unsendMessage(handleReply.messageID);
        return api.sendMessage(`🔍Bạn đã chọn chữ nền là ${event.body}\n\n(Reply tin nhắn này nhập vào chữ ký của bạn)`,threadID, function (err, info) {
          return global.client.handleReply.push({
                    type: "color",
                    name,
                    author: senderID,
                    id: id,
                    names,
                    nen: event.body,
                    messageID: info.messageID
                });
        },messageID)
      }
      case "color": {
        var nen = handleReply.nen;
        var id = handleReply.id;
        var names = handleReply.names;
        api.unsendMessage(handleReply.messageID);
        return api.sendMessage(`🔍Bạn đã chọn chữ ký : ${event.body}\n\nNhập màu của bạn (lưu ý: nhập tên tiếng anh của màu - Nếu không muốn nhập màu thì nhập "no")(Reply tin nhắn này)`,threadID, function (err, info) {
          return global.client.handleReply.push({
                    type: "create",
                    name,
                    author: senderID,
                    id: id,
                    nen: nen,
                    names,
                    ky: event.body,
                    messageID: info.messageID
                });
        },messageID) 
      }
      case "create": {
        var nen = handleReply.nen;
        var id = handleReply.id;
        var ky = handleReply.ky;
        var color = event.body;
        var names = handleReply.names;
        var color2 = ``;
        api.unsendMessage(handleReply.messageID);
        if (color == "no") var color = `#`;
        api.sendMessage(`⏳ Đang khởi tạo chương trình tạo ảnh!`,threadID, (err, info) => {
        setTimeout(() => {
          api.unsendMessage(info.messageID);
        var callback = () => api.sendMessage({body:`Đây là avatar của ${nameSender}\nTên nhân vật: ${names}\nMã số nhân vật: ${id}\nChữ nền: ${nen}\nChữ ký: ${ky}\nMàu nền: ${color}`,mentions: arraytag,attachment: fs.createReadStream(__dirname + "/cache/tad.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/tad.png"),event.messageID); 
       return request(encodeURI(`https://hoangdogianguyenofficial.herokuapp.com/taoanhdep/avatarwibu?id=${id}&chu_nen=${nen}&chu_ky=${ky}&color=${color}`)).pipe(fs.createWriteStream(__dirname+'/cache/tad.png')).on('close',() => callback());  
       }, 1000);
          }, messageID);  
    }
   }
 }
module.exports.run = async function({ api, event, args, permssion }) {
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
   const { threadID, messageID, senderID, body } = event;
   if (this.config.credits != 'Shiron') {
        console.log('\x1b[33m[ WARN ]\x1b[37m » Đổi credits con cặc đjt mẹ mày luôn đấy con chó:))');
        return api.sendMessage('[ WARN ] Phát hiện người điều hành bot ' + global.config.BOTNAME + ' đổi credits modules "' + this.config.name + '"', threadID, messageID);
      } 
else{
   if(args[0] == "list"){
      const list = await axios.get("https://hoangdogianguyenofficial.herokuapp.com/taoanhdep/list");
            var page = 1;
            page = parseInt(args[1]) || 1;
            page < -1 ? page = 1 : "";
            var limit = 15;
            var count = list.data.listAnime.length;
            var numPage = Math.ceil(count / limit);
            var msg = [];
            for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
                if (i >= count) break;
                var nv = list.data.listAnime[i].name;
                msg += `${i+0}. ${nv}\n`
            }
            msg += `Hiện tại có ${count} nhân vật\nSố trang (${page}/${numPage})\nDùng ${global.config.PREFIX}fbcover list <số trang>`;
            return api.sendMessage(msg, event.threadID)
    }
    else if (args[0] == "help") {
      var s = args[1];
      if (s != "all") {
      if (s == "color") {
        var reason = `Dùng để xem danh sách màu!`;
      }
      else if (s == "list") {
        var reason = `Dùng để xem danh sách dữ liệu hiện có!`;
      }
      else if (s == "info") {
        var reason = `Xem info của 1 id nào đó!`;
      }
      else {
        return api.sendMessage(`<${s}> Không tồn tại!`,threadID,messageID);
      }
      return api.sendMessage(`${global.config.PREFIX}${this.config.name} ${s} <${reason}>`,threadID,messageID);
      }
      else {
        var lmao = `${global.config.PREFIX}${this.config.name} `;
        var msg = `${lmao}color <Dùng để xem danh sách màu!>\n\n${lmao}list <Dùng để xem danh sách dữ liệu hiện có!>\n\n${lmao}info [tên nhân vật] <Xem info của 1 id nào đó!>`;
        return api.sendMessage(msg,threadID,messageID);
      }
    }
else if (args[0] == "info") {
  let nhanvat = args.join(" ");
  const res = await axios.get(`https://hoangdogianguyenofficial.herokuapp.com/taoanhdep/search?key=${nhanvat}`);
  var text = res.data.search.name;
  var idz = res.data.search.ID;
  var color = res.data.search.color;
  if (!nhanvat) return api.sendMessage(`🔍Nhập tên nhân vật cần coi info\n🔍Dùng ${global.config.PREFIX}avt list để coi danh sách nhân vật`, event.threadID, event.messageID);

return api.sendMessage(`🔍Nhân Vật: ${text} \n🔍ID: ${idz}\n🔍Màu Mặc Định: ${color}`, event.threadID, event.messageID)
}
 else if (senderID == api.getCurrentUserID()) return;
    const name = this.config.name;
    var id = args[0];
    axios.get(`https://hoangdogianguyenofficial.herokuapp.com/taoanhdep/list`).then (res => {
      if (!res.data.listAnime[id]) return api.sendMessage(`Không tìm thấy dữ liệu!!!`,threadID,messageID);
      var names = res.data.listAnime[id].name;
   return api.sendMessage(`🔍Đã tìm thấy ID nhân vật : ${id}\n🔍Name nhân vật là ${res.data.listAnime[id].name}\n\n(Reply tin nhắn này và chọn chữ nền cho hình ảnh của bạn)`,event.threadID, (err, info) => {
     return global.client.handleReply.push({
            type: "shiron",
            name,
            author: senderID,
            id: id,
            names,
            messageID: info.messageID
        });
    },event.messageID);
 })
}
}