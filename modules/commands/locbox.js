module.exports.config = {
  name: "locbox",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Shiron",
  description: "Rời khỏi nhóm có số thành viên nhỏ hơn số đã chỉ định",
  commandCategory: "Admin",
  usages: "Rời khỏi nhóm có số thành viên nhỏ hơn số đã chỉ định",
  cooldowns: 0
};

module.exports.run = async ({ api, event, args }) => {
  var inbox = await api.getThreadList(100, null, ['INBOX']);
  let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);
  var msg = [];
  var lengthID = [];
  var members = args[0] || 20
    for (var groupInfo of list) {
      if(groupInfo.threadID != event.threadID) {
        if ( groupInfo.participants.length < members) {
            lengthID.push(groupInfo.name)
            api.removeUserFromGroup(api.getCurrentUserID(), groupInfo.threadID) 
        }
      }
    }
  msg = 'Lọc thành công ' + lengthID.length + ' nhóm dưới ' + members + ' thành viên';
  return api.sendMessage(msg, event.threadID, event.messageID)
}
