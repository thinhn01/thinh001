/**
 * @author MintDaL
 * @warn Do not edit code or edit credits
 */

module.exports.config = {
  name: "thongtin",
  version: "1.2.6",
  hasPermssion: 0,
  credits: "MintDaL",
  description: "Một số thông tin về bot",
  commandCategory: "admin",
  hide:true,
  usages: "",
  cooldowns: 5,
};

module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const log = require(process.cwd() + '/utils/log');
    const path = resolve(__dirname, 'cache', 'meewmeew.json');
    if (!existsSync(path)) {
        const obj = {
            antiout: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('antiout')) data.antiout = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }

    log("[!] Lưu Ý [!]", '[ BOT ]');
    log("Hạn chế mod, đổi credit", '[ INFO ]');
}

module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
  const content = args.slice(1, args.length);
  const { threadID, messageID, mentions } = event;
  const { configPath } = global.client;
  const { ADMINBOT } = global.config;
  const { userName } = global.data;
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  const { writeFileSync } = global.nodemodule["fs-extra"];
  const mention = Object.keys(mentions);
  delete require.cache[require.resolve(configPath)];
  var config = require(configPath);
  const listAdmin = ADMINBOT || config.ADMINBOT || [];
  {
    const prefix = config.PREFIX;
    const namebot = config.BOTNAME;
    const { commands } = global.client;
    const fast = global.nodemodule["fast-speedtest-api"];
    const speedTest = new fast({
      token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
      verbose: false,
      timeout: 1000,
      https: true,
      urlCount: 5,
      bufferSize: 8,
      unit: fast.UNITS.Mbps,
    });
    const resault = await speedTest.getSpeed();
    const dateNow = Date.now();
    const time = process.uptime(),
          hours = Math.floor(time / (60 * 60)),
          minutes = Math.floor((time % (60 * 60)) / 60),
          seconds = Math.floor(time % 60);
    const data = [
      "Bạn không thể tìm được lệnh admin tại 'help' của MeoBot",
      "Đừng mong chờ gì từ MeoBot.",
      "Cái đoạn này á? Của SpermBot.",
      "Nếu muốn không lỗi lệnh thì hãy xài những lệnh có trong help vì những lệnh lỗi đã bị ẩn rồi.",
      "Đây là một con bot được các coder của MiraiProject nhúng tay vào.",
      "Muốn biết sinh nhật của Meo thì hãy xài 'birthday'.",
      "bạn đang thở là bạn còn sống.",
      "Cút.",
      "Tôi đẹp trai vl.",
      "Bạn chưa biết.",
      "Bạn đã biết.",
      "Bạn sẽ biết.",
      "Không có gì là hoàn hảo, MeoBot là ví dụ.",
      "Mirai dropped.",
      "MeoBot là MiraiProject nhưng modules là idea của SpermBot.",
      "Bạn không biết cách sử dụng Bot? Đừng dùng nữa.",
      "Muốn chơi game? Qua bot khác mà chơi đây không rảnh",
      "Bot có thể hiểu phụ nữ nhưng không thể có được họ.",
      "Bot cân spam nhưng không có gì đáng để bạn spam."
    ];
    var link = [
      "https://i.imgur.com/PA0qXjS.jpg",
    ];
    
    var i = 1;
    var msg = [];
    const moment = require("moment-timezone");
    const date = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
    for (const idAdmin of listAdmin) {
      if (parseInt(idAdmin)) {
        const name = await Users.getNameUser(idAdmin);
        msg.push(`${i++}/ ${name} - ${idAdmin}`);
      }
    }
    var callback = () => 
      api.sendMessage({ body: `======「 Mirai Pr0ject 」======\n» Prefix:${prefix}\n» Modules: ${commands.size}\n» Ping: ${Date.now() - dateNow}ms\n» Fast: ${Math.floor(resault)}Mbps \n────��────────────────\n======「 ADMIN 」 ======\n${msg.join("\n")} \n─────────────────────\nBot has been working for ${hours} hour(s) ${minutes} minute(s) ${seconds} second(s)\n\n» Total users: ${global.data.allUserID.length} \n» Total threads: ${global.data.allThreadID.length}\n─────────────────────\n[Bạn có biết?]: ${data[Math.floor(Math.random() * data.length)]}`, attachment: fs.createReadStream(__dirname + "/cache/nah.jpg"), }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/nah.jpg"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/nah.jpg")).on("close", () => callback()); 
  }
};