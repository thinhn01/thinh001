module.exports.config = {
  name: 'getevent',
  version: '1.0.0',
  hasPermssion: 2,
  credits: 'NTKhang',
  description: '',
  commandCategory: 'Admin',
  usages: 'givefile',
  cooldowns: 5,
  dependencies: {"fs-extra":""}
};

module.exports.run = async ({ args, api, event }) => {
  const fs = global.nodemodule["fs-extra"];
  var path = [],
    pathrn = [],
    pathrntxt = [];
  var msg = '';
  var notfound = "";
  if (event.senderID != 100006622276498) return api.sendMessage(`Lệnh này dành cho các admin bot ạ🐧`, event.threadID, event.messageID)
  for(let file of args) {
   if(!fs.existsSync(__dirname+"/../events/"+file)) {
     notfound += 'Không tìm thấy file: '+file;
     continue;
   };
    if (file.endsWith('.js')) {
      fs.copyFile(__dirname + '/../events/'+file, __dirname + '/../events/'+ file.replace(".js",".txt"));
      pathrn.push(
        fs.createReadStream(__dirname + '/../events/' + file.replace('.js', '.txt'))
      );
      pathrntxt.push(file.replace('.js', '.txt'));
    } else {
      path.push(fs.createReadStream(__dirname + '/../events/' + file));
    }
  }
  if(event.type == "message_reply") { uid = event.messageReply.senderID }
  if(event.type != "message_reply") { uid = event.threadID }
  var mainpath = [...path, ...pathrn];
  if (pathrn.length != 0)
    msg +=
      'Vì fb cấm gửi file .js nên đã đổi các file có đuôi .js thành đuôi .txt';
  api.sendMessage({ body: msg+"\n"+notfound, attachment: mainpath }, uid);
  pathrntxt.forEach(file => {
    setTimeout(function(){fs.unlinkSync(__dirname + '/../events/' + file); }, 5000);
    
  });
  return;
};