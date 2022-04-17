module .exports .config = {
    name: "checktt",
    version: "1.8.0",
    hasPermssion: 0,
    credits: "Mirai Team fix get by D-Jukie",
    description: "Kiểm tra lượt tương tác trong nhóm",
    commandCategory: "Nhóm",
    usages: "[all/tag/reply]",
    cooldowns: 0
};

module.exports.languages = {
    "vi": {
        "all": "%1. %2 với %3 tin nhắn\n",
    },
    "en": {
        "all": "%1. %2 with %3 messages\n",
    }
}
module.exports.run = async function ({ args,Users,Threads, api, event, Currencies, getText }) {
var mention = Object.keys(event.mentions);
if (args[0] == "all") {
            var { participantIDs, adminIDs } =(await Threads.getData(event.threadID)).threadInfo;   
            //const countMess = (await Currencies.getData(event.senderID)).exp
            const listUserID = event.participantIDs
            var id = listUserID //[Math.floor(Math.random() * listUserID.length)];
            var number = 1, msg = "", storage = [], exp = [];

           
            for(const idUser of listUserID) {

            const countMess = await Currencies.getData(idUser);
            exp.push({"name" : (typeof ((await Users.getData(idUser)).name) == "undefined") ? 0 : (await Users.getData(idUser)).name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": idUser});
        }
           
            exp.sort(function (a, b) { return b.exp - a.exp });
            var page = 1;
            page = parseInt(args[1]) || 1;
            page < -1 ? page = 1 : "";
            var limit = 10;
            var msg = "Độ tương tác của từng thành viên trong nhóm\n";
            var numPage = Math.ceil(exp.length/limit);

            for(var i = limit*(page - 1); i < limit*(page-1) + limit; i++){
                if(i >= exp.length) break;
                let infoUser = exp[i];
                msg += `${i+1}.${infoUser.name}: ${infoUser.exp} tin nhắn\n`
            }

            msg += `--Trang ${page}/${numPage}--\nDùng ${global.config.PREFIX}checktt all để check số trang dùng 1/2/3/4/5 để lật từng trang`
            return api.sendMessage(msg, event.threadID);

}
        else
        if(event.type == "message_reply") { mention[0] = event.messageReply.senderID }
        if (mention[0]) {
            var { participantIDs } =(await Threads.getData(event.threadID)).threadInfo;
            //const countMess = (await Currencies.getData(event.senderID)).exp
            const listUserID = event.participantIDs
            var id = listUserID //[Math.floor(Math.random() * listUserID.length)];
            exp = [];
            //var name = await Users.getData(id)
            for(const idUser of listUserID) {
            const countMess = await Currencies.getData(idUser);
            exp.push({"name" : idUser.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": idUser});
        }
            exp.sort(function (a, b) { return b.exp - a.exp });
            const rank = exp.findIndex(info => parseInt(info.uid) == parseInt(mention[0])) + 1;
            const infoUser = exp[rank - 1];
            //const rank = exp.findIndex(info => parseInt(info.listUserID) == parseInt(event.senderID)) + 1;
            return api.sendMessage(`🌻${(await Users.getData(mention[0])).name} đang đứng hạng ${rank} với ${infoUser.exp} tin nhắn`, event.threadID);
}
else {
            var { participantIDs } =(await Threads.getData(event.threadID)).threadInfo;
            //const countMess = (await Currencies.getData(event.senderID)).exp
            const listUserID = event.participantIDs
            var id = listUserID //[Math.floor(Math.random() * listUserID.length)];
            exp = [];
            var name = await Users.getData(id)
            for(const idUser of listUserID) {
            const countMess = await Currencies.getData(idUser);
            exp.push({"name" : idUser.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": idUser});
        }
            exp.sort(function (a, b) { return b.exp - a.exp });
            const rank = exp.findIndex(info => parseInt(info.uid) == parseInt(event.senderID)) + 1;
            const infoUser = exp[rank - 1];
          
            return api.sendMessage(`🌻Bạn đang đứng hạng ${rank} với ${infoUser.exp} tin nhắn`, event.threadID);
}
}