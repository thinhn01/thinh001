module.exports.config = {
    name: "listfriend",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "D-Jukie",
    description: "Xem danh sách bạn bè, hủy kết bạn và block bạn bè trên ACCOUNT BOT",
    commandCategory: "Admin",
    usages: "",
    cooldowns: 5
};
module.exports.handleReply = async function ({ event, Users, api, handleReply }) {
      const { threadID, messageID, senderID } = event; 
      const { author, friends } = handleReply
      if (parseInt(senderID) !== parseInt(author)) return;
      var choose = event.body.split(" ");
      if (choose[0] == "unfriends" || choose[0] == "unfriend" || choose[0] == "unf") {
        var numChoose = event.body.split(" ");
        var msg = "";
        var chooses = numChoose.map(n => parseInt(n));
        chooses.shift();
          for (let num of chooses) {
            var nameUserr = friends[num-1].name;
            var userrID = friends[num-1].id;
              api.unfriend(userrID)
              msg += `[ UNFRIEND ] => ${nameUserr}\n`
          }
      return api.sendMessage(msg, threadID, () =>
      api.unsendMessage(handleReply.messageID));
    }
    if (choose[0] == "block") {
      var numChoose = event.body.split(" ");
        var msg = "";
        var chooses = numChoose.map(n => parseInt(n));
        chooses.shift();
          for (let num of chooses) {
            var nameUserr = friends[num-1].name;
            var userrID = friends[num-1].id;
            api.changeBlockedStatus(userrID, true, (err) => {
              if(err) return api.sendMessage(`» Đã có lỗi xảy ra khi block người dùng ${nameUserr}!!!`, threadID, messageID)
            })
          msg += `[ BLOCK ] => ${nameUserr}\n`
          }
      return api.sendMessage(msg, threadID, () =>
      api.unsendMessage(handleReply.messageID));
    }
    else return api.sendMessage('» Vui lòng chọn unfriend hoặc block', threadID, messageID)
}

module.exports. run = async function ({ api, event, Users, args }) {
      const { threadID, messageID } = event;
      api.getFriendsList((err, data) => {
        if(err) return api.sendMessage('» Đã xảy ra lỗi khi lấy danh sách bạn bè!!', threadID, messageID)
        var a = 1;
        var friends = [];
        var lengthID = [];
          for (let id of data) { 
            if ( id.userID != 0) {
              friends.push({
                id: id.userID,
                name: id.fullName,
                link: id.profileUrl
              });
              lengthID.push(id.userID)
            }
          }           
        var page = 1;
        page = parseInt(args[0]) || 1;
        page < -1 ? page = 1 : "";
        var limit = 15;
        var msg = "==== DANH SÁCH BẠN BÈ ===\n\n";
        var numPage = Math.ceil(friends.length / limit);
          for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
            if (i >= friends.length) break;
              let friendPage = friends[i];                  
              msg += `${i+1}. ${friendPage.name}\nID: ${friendPage.id}\nLink: ${friendPage.link}\n\n`;             
          }
      msg += `Reply unfriend/block [số thứ tự] muốn xóa bạn bè/chặn\n`
      msg += `\n» Trang ${page}/${numPage}--\n» Dùng ->listfriend all + số trang\n`
      msg += `» Hiện tại có ${(lengthID.length)} bạn bè trong danh sách\n`
      return api.sendMessage(msg, threadID, (e, data) =>
        global.client.handleReply.push({
            name: this.config.name,
            author: event.senderID,
            messageID: data.messageID,
            friends
        }))
      })
}