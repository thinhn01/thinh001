module.exports.config = {
    name: "ndfb",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "Shiron",
    description: "Xóa một thành viên người dùng Facebook.",
    commandCategory: "group",
    usages: "",
    cooldowns: 0
}
module.exports.run = async function ({ api, args, event, Threads, Users }) {
    var { userInfo, adminIDs } = await api.getThreadInfo(event.threadID);
  var success = 0, fail = 0;
  var arr = [];
  for (const e of userInfo) {
    if (e.gender == undefined) {
      arr.push(e.id);
    }
  };

  adminIDs = adminIDs.map(e => e.id).some(e => e == api.getCurrentUserID());
  if (arr.length == 0) {
    return api.sendMessage("Trong nhóm của bạn không tồn tại 'Người dùng Facebook'.", event.threadID);
  }
  else {
    api.sendMessage("Nhóm bạn hiện tại" + arr.length + " 'Người dùng Facebook'.", event.threadID, function() {
      if (!adminIDs) {
        return api.sendMessage("Nhưng bot không phải admin nên không lọc được.", event.threadID);
      } else {
        api.sendMessage("Bắt đầu lọc ..", event.threadID, async function() {
          for (const e of arr) {
            try {
              await new Promise(resolve => setTimeout(resolve, 1000));
              await api.removeUserFromGroup(parseInt(e), event.threadID);
              success++;
            }
            catch {
              fail++;
            }
          }
          return api.sendMessage("Đã lọc thành công " + success + "Người dùng Facebook", event.threadID, function() {
            if (fail != 0) return api.sendMessage("Lọc thất bại " + fail + " person.", event.threadID);
          });
        })
      }
    })
  }
}
