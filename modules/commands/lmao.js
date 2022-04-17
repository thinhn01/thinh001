module.exports.config = {
  name: "lmao",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "manhG",
  description: "lmao",
  commandCategory: "remote",
  usages: "",
  cooldowns: 3,
  denpendencies: {
  }
};

module.exports.run = async function ({ api, event, Threads, getText }) {
  const fs = global.nodemodule["fs-extra"];
  var { threadID, messageID, senderID } = event;
  //if (senderID == global.data.botID) return;

  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data;
  //console.log(data)
  //var prefix = data.PREFIX;
  var log = data.log;
  var roleplay = data.roleplay;
  var rankup = data.rankup;
  var resend = data.resend;
  var tagadmin = data.tagadmin;
  var goibot = data.goibot;
  var fixspam = data.fixspam;
  var leaveNoti = data.leaveNoti;
  var autoban = data.autoban;
  var joinNoti = data.joinNoti;
  var antiout = data.antiout;
  var chongcuopbox = data.chongcuopbox;
  var adminUpdate = data.adminUpdate;
  var prefix = data.prefix;
  var stk = data.stk;
  var cnamebot = data.cnamebot;
  //prefix == null ? rankup = `!` : rankup = `${prefix}`;
  log == null ? log = `true` : log = `${log}`;
  roleplay == null ? roleplay = `false` : roleplay = `${roleplay}`;
  rankup == null ? rankup = `false` : rankup = `${rankup}`;
  resend == null ? resend = `false` : resend = `${resend}`;
  tagadmin == null ? tagadmin = `true` : tagadmin = `${tagadmin}`;
  goibot == null ? goibot = `true` : goibot = `${goibot}`;
  fixspam == null ? fixspam = `true` : fixspam = `${fixspam}`;
  leaveNoti == null ? leaveNoti = `true` : leaveNoti = `${leaveNoti}`;
  autoban == null ? autoban = `true` : autoban = `${autoban}`;
  joinNoti == null ? joinNoti = `true` : joinNoti = `${joinNoti}`;
  antiout == null ? antiout= `true` : antiout = `${antiout}`;
  chongcuopbox == null ? chongcuopbox = `true` : chongcuopbox = `${chongcuopbox}`;
  adminUpdate == null ? adminUpdate = `true` : adminUpdate = `${adminUpdate}`;
  prefix == null ? prefix = `true` : prefix = `${prefix}`;
  stk == null ? stk = `true` : stk = `${stk}`;
  cnamebot == null ? cnamebot = `true` : cnamebot = `${cnamebot}`;
return api.sendMessage(` COMMANDS \n❯ log: ${log}\n❯ roleplay: ${roleplay}\n❯ rankup: ${rankup}\n❯ resend: ${resend}\n❯ tagadmin: ${tagadmin}\n❯ goibot: ${goibot}\n❯ fixspam: ${fixspam}\n❯ leaveNoti: ${leaveNoti}\n❯ autoban: ${autoban}\n❯ joinNoti: ${joinNoti}\n❯ antiout: ${antiout}\n❯ chongcuopbox: ${chongcuopbox}\n❯ adminUpdate: ${adminUpdate}\n❯ prefix: ${prefix}\n❯ stk: ${stk}\n❯ cnamebot: ${cnamebot}`, threadID, messageID);
}