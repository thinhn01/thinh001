module.exports.config = {
  name: "loctv",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Shiron",
  description: "Lọc thành viên không tương tác trong nhóm",
  commandCategory: "Admin",
  usages: "Lọc thành viên không tương tác trong nhóm",
  cooldowns: 0
};

module.exports.run = async ({ api, event, args, Threads, Users }) => {
  var { threadID, messageID, senderID } = event
  var data = await api.getThreadInfo(threadID, async (err, info) => {
  if (err) return api.sendMessage('Đã xảy ra lỗi, vui lòng đợi vài tiếng sau thực hiện lại!!', threadID, messageID)
    var expUser = [];
    var idUser = [];
    var loctv = args[0] || 0
    for (var id of info.participantIDs) {
      if(id != api.getCurrentUserID()) {
        if(await Users.getData(id) < loctv) {
          var exp = await Users.getData(id);
          expUser.push(exp)
          idUser.push(id)
        }
      }
    }
    if (idUser.length == 0 ) return api.sendMessage('Nhóm bạn không có cá cảnh!!!', threadID, messageID);
    else api.sendMessage(`Hiện tại có ${idUser.length} con cá cảnh cần lọc...`, threadID, messageID);
    await new Promise(resolve => setTimeout(resolve, 1000));
    if(!info.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage('Nhưng bot không phải là quản trị viên nên không lọc được', threadID, messageID);
    else api.sendMessage('Tiến hành lọc...', threadID, messageID);
    for (var i = 0 ; i <= idUser.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      api.removeUserFromGroup(idUser[i] ,threadID)       
    }
    return api.sendMessage(`Đã lọc thành công ${idUser.length} thành viên không tương tác`, threadID, messageID);
  })
}