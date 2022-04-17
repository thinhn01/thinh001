module.exports.config = {
  name: "refresh",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "Mirai Team",
  description: "Làm mới dữ liệu thành viên nhóm",
  commandCategory: "QTV-box",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, Threads }) {
  const { threadID, messageID } = event;
  const threadInfo = await api.getThreadInfo(threadID);
  await Threads.setData(threadID, { name: threadInfo.name, threadInfo });
  global.data.threadInfo.set(threadID, threadInfo);
  return api.sendMessage(`Đã làm mới lại thông tin của nhóm thành công.`, threadID, messageID);
}