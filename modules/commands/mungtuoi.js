/*
@credit ⚡️D-Jukie
@vui lòng không chỉnh sửa credit
*/
module.exports.config = {
    name: "mungtuoi",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "⚡D-Jukie", 
    description: "Lì xì năm mới",
    commandCategory: "Lì xì",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 1200000
    }
};
module.exports.languages = {
    "vi": {
        "cooldown": "🧨Bạn đã được lì xì rồi, quay lại sau: %1 phút %2 giây."      
    },
    "en": {
        "cooldown": "You're done, come back later: %1 minute(s) %2 second(s)."
    }
}
module.exports.handleReply = async ({ event, api, handleReply, Currencies, getText }) => {
const { threadID, messageID, senderID } = event;
let data = (await Currencies.getData(senderID)).data || {};
if (handleReply.author != event.senderID) return api.sendMessage("🧨Học ngu nhưng thích được lì xì UwU🧨", event.threadID, event.messageID)
//random coins nhận được khi làm việc ít nhất 10000
var coinscn = Math.floor(Math.random() * 100000) + 10000; //random coins khi làm ở khu công nghiệp
var coinsdv = Math.floor(Math.random() * 80000) + 10000; //random coins khi làm ở khu dịch vụ
var coinsmd = Math.floor(Math.random() * 70000) + 10000; //random coins khi làm ở mỏ dầu
var coinsq = Math.floor(Math.random() * 60000) + 10000; //random coins khi khai thác quặng
var coinsdd = Math.floor(Math.random() * 50000) + 10000; //random coins khi đào đá
var coinsdd1 = Math.floor(Math.random() * 40000) + 10000; //random coins khi đào đá

//random công việc cần làm
var rdcn = ['Bot', 'Bot', 'Bot', 'Bot', 'Bot']; //random công việc khi làm ở khu công nghiệp
var work1 = rdcn[Math.floor(Math.random() * rdcn.length)];   

var rddv = ['Bot', 'Bot', 'Bot', 'Bot', 'Bot', 'Bot', 'Bot', 'Bot']; //random công việc khi làm ở khu dịch vụ
var work2 = rddv[Math.floor(Math.random() * rddv.length)]; 

var rdmd = ['Bot', 'Bot', 'Bot', 'Bot', 'Bot ', 'Bot']; //random công việc khi làm ở mỏ dầu
var work3 = rdmd[Math.floor(Math.random() * rdmd.length)]; 

var rdq = ['Bot', 'Bot', 'Bot', 'Bot', 'Bot', 'Bot']; //random công việc khi khai thác quặng
var work4 = rdq[Math.floor(Math.random() * rdq.length)]; 

var rddd = ['Bot', 'Bot', 'Bot', 'Bot', 'Bot ', 'Bot', 'Bot', 'Bot']; //random công việc khi đào đá
var work5 = rddd[Math.floor(Math.random() * rddd.length)]; 

var rddd1 = ['Bot', 'Bot', 'Bot', 'Bot', 'Bot', 'Bot', 'Bot', 'Bot']; //random công việc khi đào đá
var work6 = rddd1[Math.floor(Math.random() * rddd1.length)];


var msg = "";
    switch(handleReply.type) {
        case "choosee": {
            
            switch(event.body) {
                case "1": msg = `🧨Bạn đã được ${work1} Lì xì và được ${coinscn}$` ;await Currencies.increaseMoney(event.senderID, parseInt(coinscn)); break;             
                case "2": msg = `🧨Bạn đã được ${work2} Lì xì và được ${coinsdv}$`; await Currencies.increaseMoney(event.senderID, parseInt(coinsdv)); break;
                case "3": msg = `🧨Bạn đã được ${work3} Lì xì và được ${coinsmd}$`; await Currencies.increaseMoney(event.senderID, parseInt(coinsmd)); break;
                case "4": msg = `🧨Bạn đã được ${work4} Lì xì và được ${coinsq}$`; await Currencies.increaseMoney(event.senderID, parseInt(coinsq)); break;
                case "5": msg = `🧨Bạn đã được ${work5} Lì xì và được ${coinsdd}$` ; await Currencies.increaseMoney(event.senderID, parseInt(coinsdd)); break;
                case "6": msg = `🧨Bạn đã được ${work6} Lì xì ${coinsdd1}$ năm mới vui vẻ`; await Currencies.increaseMoney(event.senderID, parseInt(coinsdd1)); break;
                case "7": msg = "🧨Chưa có..."; break; //thêm case nếu muốn 
                default: break;
            };
            const choose = parseInt(event.body);
            if (isNaN(event.body)) return api.sendMessage("🧨Vui lòng nhập 1 con số", event.threadID, event.messageID);
            if (choose > 7 || choose < 1) return api.sendMessage("🧨Lựa chọn không nằm trong danh sách.", event.threadID, event.messageID); //thay số case vào số 7
            api.unsendMessage(handleReply.messageID);
            if (msg == "🧨Chưa có...") {
                msg = "🧨Update soon...";
            };
            return api.sendMessage(`${msg}`, threadID, async () => {
            data.work2Time = Date.now();
            await Currencies.setData(senderID, { data });
            
        });

    };
}
}
module.exports.run = async ({  event, api, handleReply, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    //cooldownTime cho mỗi lần nhận 
    if (typeof data !== "undefined" && cooldown - (Date.now() - data.work2Time) > 0) {

        var time = cooldown - (Date.now() - data.work2Time),
            minutes = Math.floor(time / 60000),
            seconds = ((time % 60000) / 1000).toFixed(0); 
        return api.sendMessage(getText("cooldown", minutes, (seconds < 10 ? "0" + seconds : seconds)), event.threadID, event.messageID);
    }
    else {    
       return api.sendMessage("=== Lì Xì ===" +
                "\n1. 🧨Bao Lì Xì 1🧧" +
                "\n2. 🧨Bao Lì Xì 2🧧" +
                "\n3. 🧨Bao Lì Xì 3🧧" +
                "\n4. 🧨Bao Lì Xì 4🧧" +
                "\n5. 🧨Bao Lì Xì 5🧧" +
                "\n6. 🧨Bao Lì Xì 6🧧" +
                "\n7. 🧨Qùa đặc biệt (update sau)🧧" +
                "\n🧧Hãy reply tin nhắn và chọn theo số bao lì xì🧨" +
                "\n🧧Hôm nay là ngày 3/1/2022 Tết Nguyên đán là ngày 1/2/2022🧨" //thêm hiển thị case tại đây ||  \n[number]. [Ngành nghề]" +
            , event.threadID, (error, info) => {
                data.work2Time = Date.now();
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
          })  
        })
    }
}