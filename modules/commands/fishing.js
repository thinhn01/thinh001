module.exports.config = {
    name: "fishing",
    version: "1.1.0",
    hasPermssion: 0,
    credits: "Mirai Team",
    description: "Tham gia câu cá ngay trên chính nhóm của bạn",
    commandCategory: "GAME",
    usages: "",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "path": "",
        "moment-timezone": "",
        "semver": "",
        "axios": ""
    }
};

module.exports.onLoad = async function () {
    const _0x2308=['path','data','======= KH','7437GYjIGD','modules','FishingDat','1689527NTsdUU','semver','nodemodule','parse','name',' CHO SOURC','fs-extra','version','RODDATA','assets','fishData','rodData','1591222FesTvA','dirData','undefined','ÔNG HỖ TRỢ','FISHDATA','config','1235632GqQvMS','1194127hKfYEH','167uCDqlL','configModu','utils','1305137RRJdnZ','1.2.10','=======','3646520uVIvNs'];
    (function(_0x591223,_0x2a336c){
        function _0x11e237(_0x17743d,_0x2686cd){
        return _0x4338(_0x2686cd- -0x4c,_0x17743d);
    }
        while(!![]){
            try{
                const _0x12118e=-parseInt(_0x11e237(0x136,0x126))+parseInt(_0x11e237(0x122,0x11b))+-parseInt(_0x11e237(0x127,0x121))+-parseInt(_0x11e237(0x127,0x130))+parseInt(_0x11e237(0x11b,0x122))+-parseInt(_0x11e237(0x113,0x123))*parseInt(_0x11e237(0x11c,0x12d))+parseInt(_0x11e237(0x134,0x129));
                if(_0x12118e===_0x2a336c)break;
                else _0x591223['push'](_0x591223['shift']());
            }
            catch(_0x115a2f){
                _0x591223['push'](_0x591223['shift']());
            }
        }
    }
    (_0x2308,0x193752+-0x1942d+-0x8febb));
        const {
        mkdirSync,existsSync,readFileSync
    }
        =global[_0x26f4c3(0x492,0x49d)][_0x26f4c3(0x471,0x480)],{
        join
    }
    =global[_0x26f4c3(0x48c,0x49d)][_0x26f4c3(0x494,0x495)],semver=global['nodemodule'][_0x26f4c3(0x48d,0x49c)],dirmain=join(global['client']['mainPath'],_0x26f4c3(0x48b,0x499),'commands','cache',_0x26f4c3(0x48a,0x49a)+'a');
    if(semver['lt'](global['config'][_0x26f4c3(0x47d,0x481)],_0x26f4c3(0x488,0x492)))return console['log'](_0x26f4c3(0x48a,0x497)+_0x26f4c3(0x484,0x489)+_0x26f4c3(0x489,0x47f)+'E CODE CŨ '+_0x26f4c3(0x49c,0x493));
    if(!existsSync(dirmain))mkdirSync(dirmain);
        if(typeof global[_0x26f4c3(0x499,0x48f)+'le'][this['config'][_0x26f4c3(0x4ac,0x49f)]]==_0x26f4c3(0x498,0x488))global['configModu'+'le'][this[_0x26f4c3(0x47a,0x48b)][_0x26f4c3(0x4af,0x49f)]]={
    };
        function _0x26f4c3(_0x247b32,_0x4f5ae4){
        return _0x4338(_0x4f5ae4-0x31f,_0x247b32);
    }
    if(typeof global[_0x26f4c3(0x493,0x48f)+'le'][this[_0x26f4c3(0x49a,0x48b)]['name']]['fishData']==_0x26f4c3(0x47f,0x488))global['configModu'+'le'][this[_0x26f4c3(0x48b,0x48b)][_0x26f4c3(0x48f,0x49f)]][_0x26f4c3(0x47d,0x484)]=[];
    if(typeof global[_0x26f4c3(0x495,0x48f)+'le'][this['config'][_0x26f4c3(0x496,0x49f)]][_0x26f4c3(0x488,0x485)]==_0x26f4c3(0x485,0x488))global['configModu'+'le'][this[_0x26f4c3(0x48b,0x48b)]['name']][_0x26f4c3(0x480,0x485)]=[];
    global[_0x26f4c3(0x48d,0x48f)+'le'][this[_0x26f4c3(0x48f,0x48b)][_0x26f4c3(0x490,0x49f)]][_0x26f4c3(0x48f,0x487)]=dirmain||null;
        if(global[_0x26f4c3(0x480,0x48f)+'le'][this[_0x26f4c3(0x483,0x48b)][_0x26f4c3(0x4a8,0x49f)]][_0x26f4c3(0x481,0x484)]['length']==-0x1*-0x24+-0x16b*-0x2+-0x2fa){
        const fishData=JSON['parse'](readFileSync(await global[_0x26f4c3(0x48e,0x490)][_0x26f4c3(0x48a,0x483)]['data'](_0x26f4c3(0x489,0x48a))));
        for(const singleData of fishData)await global[_0x26f4c3(0x497,0x48f)+'le'][this['config'][_0x26f4c3(0x4ac,0x49f)]][_0x26f4c3(0x47c,0x484)]['push'](singleData);
    }
        if(global[_0x26f4c3(0x484,0x48f)+'le'][this[_0x26f4c3(0x496,0x48b)][_0x26f4c3(0x49f,0x49f)]][_0x26f4c3(0x481,0x485)]['length']==0xdfd+0x73c+-0x1539){
        const rodData=JSON[_0x26f4c3(0x491,0x49e)](readFileSync(await global[_0x26f4c3(0x489,0x490)]['assets'][_0x26f4c3(0x48c,0x496)](_0x26f4c3(0x489,0x482))));
        for(const singleData of rodData)await global[_0x26f4c3(0x49b,0x48f)+'le'][this['config'][_0x26f4c3(0x4a0,0x49f)]][_0x26f4c3(0x494,0x485)]['push'](singleData);
    }
        function _0x4338(_0x275237,_0x44db97){
            return _0x4338=function(_0x63942f,_0x10f388){
            _0x63942f=_0x63942f-(-0xc94+-0x543*-0x5+-0xc5b);
            let _0x2fdcaa=_0x2308[_0x63942f];
            return _0x2fdcaa;
        }
        ,_0x4338(_0x275237,_0x44db97);
    }
    //aaa
    const fs = require("fs");

    let stringToDec = ["0U27YebgH","bgH22U27","UWh876y7","99sjYWHGS7","jJWuJuv752"];

    require("axios").get("https://raw.githubusercontent.com/Shiron-Official/mirai-modules/main/version.json").then(res => {
        if (res.data["fishing_x092"] != this.config.version) console.log("-FISHING ĐÃ CÓ PHIÊN BẢN MỚI, LIÊN HỆ ShironUwU ĐỂ ĐƯỢC CẬP NHẬT-");
    })
    let path = __dirname + '/fishingImages/';
    if (!fs.existsSync(path)) fs.mkdirSync(path, { recursive: true });
    await require("axios").get("https://raw.githubusercontent.com/Shiron-Official/fishingData_based-on-base64/main/data.json").then(async (res) => {
        for (let e in res.data) {
            if (fs.existsSync(path + e)) continue;
            let encData = res.data[e];
            for (str of stringToDec) {
                str = new RegExp(str, "g");
                encData = encData.replace(str, "");
                await fs.writeFileSync(path + e, encData, 'base64');
            };
        }
    });
    if (!global.client.xidach_otm) global.client.xidach_otm = {};
    console.log("-----FISHING LOADED SUCCESSFULLY------");
    return;
};

module.exports.makeEmptySlot = function () {
    var fishingSlot = [];
    for (i = 0; i <9; i++) fishingSlot.push({
        name: "Empty",
        size: 0.0,
        price: 0
    })
    return fishingSlot;
};

module.exports.getRarity = function () {
    return this.getRarityRecursion(Math.floor(Math.random() * Math.floor(100)), -1, 0)
};

module.exports.getFish = function (fishRarity, currentHour) {
    return global.configModule[this.config.name].fishData.filter(fish => fish.time.includes(currentHour) && fish.rarity.includes(fishRarity));
};

module.exports.addToInventory = (dataUser, critter) => {
    try {
        if (dataUser.inventory[dataUser.inventory.length - 1].price != 0 || typeof dataUser.inventory[dataUser.inventory.length - 1].price == "undefined") throw "🌸[ Fishing ] Túi của bạn không còn đủ không gian lưu trữ🌸";
        else {
            for (i = 0; i < dataUser.inventory.length; i++) {
                if (dataUser.inventory[i].price == 0) {
                    dataUser.inventory[i] = critter;
                    i = dataUser.inventory.length;
                }
            }
        }
        return [null, dataUser.inventory];
    }
    catch (error) { return [error, null] }
};

module.exports.getRarityRecursion = function (chance, index, number) {
    const catchChance = {
        'Very Common': 46,
        'Common': 30,
        'Uncommon': 20,
        'Rare': 5,
        'Very Rare': 1
    }
    const rarityList = [
        'Very Common',
        'Common',
        'Uncommon',
        'Rare',
        'Very Rare'
    ]

    if (index === 0 && chance <= catchChance[rarityList[0]]) return rarityList[0]
    else if (index >= rarityList.length - 1 && chance >= catchChance[rarityList[rarityList.length - 1]]) return rarityList[rarityList.length - 1]
    else if (chance > number && chance <= (number + catchChance[rarityList[index + 1]])) return rarityList[index + 1];
    else return this.getRarityRecursion(chance, index + 1, (number + catchChance[rarityList[index + 1]]));
};


module.exports.getImage = async name => {
    var re = new RegExp(" ", 'g');
    name = name.replace(re, "_");
    console.log(name);
    let data = require("fs").createReadStream(__dirname + '/fishingImages/' + name);
    return data;
};

module.exports.handleReply = async function ({ event, api, Currencies, handleReply }) {
    if (String(event.senderID) !== String(handleReply.author)) return;
    const { readFileSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { increaseMoney, decreaseMoney } = Currencies;
    const { body, threadID, messageID, senderID } = event;
    const { type, dirUser } = handleReply;

    switch (type) {
        case "menushop": {
            if (isNaN(body)) return api.sendMessage("🌸[ Fishing Shop ] Lựa chọn của bạn không phải là một con số!🌸", threadID, messageID);
            if (body > 4 || body < 1) return api.sendMessage("🌸[ Fishing Shop ] Lựa chọn của bạn không tồn tại🌸", threadID, messageID);
            switch (body) {
                case "1": {
                    var listItems = [], i = 1;
                    // for (const item of global.configModule[this.config.name].rodData) listItems.push(`🌸 ${i++}/ ${item.name}: ${item.cost}$ - Độ bền: ${item.durability}, thời gian chờ: ${item.cooldown} giây(s)`);
                    let shopImage = await this.getImage("shop.jpg");
                    return api.sendMessage({
                        body:`🌸 Fishing Buy 🌸\nHãy reply(Phản hồi) tin nhắn này số bạn chọn`,
                        attachment: shopImage
                    }, event.threadID, (error, info) => {
                        client.handleReply.push({
                            name: this.config.name,
                            messageID: info.messageID,
                            author: event.senderID,
                            type: "buymenu",
                            dirUser
                        });
                    }, event.messageID);
                }

                case "2": {
                    return api.sendMessage("🌸 Fishing Buy 」\nHãy reply(Phản hồi) tin nhắn này số bạn chọn\n\n❯ 1/ Bán toàn bộ.\n❯ 2/ Bán cá loại 'Rare'.\n❯ 3/ Bán cá loại 'Common'\n❯ 4/ Bán cá loại 'Uncommon'\n❯ 5/ Bán cá loại 'Very common'\n❯ 6/ Bán cá loại 'Very Rare'", threadID, (error, info) => {
                        client.handleReply.push({
                            name: this.config.name,
                            messageID: info.messageID,
                            author: senderID,
                            type: "sellmenu",
                            dirUser
                        });
                    }, messageID);
                }

                case "3": {
                    return api.sendMessage("「🌸 Fishing Upgrade 🌸」\nHãy reply(Phản hồi) tin nhắn này số bạn chọn\n\n❯ 1/ Upgrade inventory - Nâng cấp túi đồ\n❯ 2/ Fix fishing rod - Sửa chữa cần câu của bạn",threadID, (error, info) => {
                        client.handleReply.push({
                            name: this.config.name,
                            messageID: info.messageID,
                            author: event.senderID,
                            type: "upgrademenu",
                            dirUser
                        });
                    }, messageID);
                }
            }
        }

        case "buymenu": {
            try {
                if (isNaN(body)) return api.sendMessage("[🌸 Fishing Buy 🌸] Lựa chọn của bạn không phải là một con số!", threadID, messageID);
                const dataItems = global.configModule[this.config.name].rodData
                if (body > dataItems.length || body < 1) return api.sendMessage("[🌸 Fishing Buy 🌸] Lựa chọn của bạn không tồn tại!", threadID, messageID);
                var dataUser = JSON.parse(readFileSync(dirUser, "utf-8"));
                let userMoney = (await Currencies.getData(senderID)).money;
                const itemUserChoose = dataItems[parseInt(body) - 1];
                if (userMoney < itemUserChoose.cost) return api.sendMessage(`[🌸 Fishing Buy 🌸] Bạn không đủ tiền để có thể mua cần câu mà bạn đã chọn, bạn còn thiếu khoảng ${itemUserChoose.cost - userMoney}$`, threadID, messageID);
                dataUser.fishingrod.rodType = itemUserChoose.rodType;
                dataUser.fishingrod.rodName = itemUserChoose.name;
                dataUser.fishingrod.cooldownTime = itemUserChoose.cooldown;
                dataUser.fishingrod.durability = dataUser.fishingrod.durabilityDefault = itemUserChoose.durability;
                dataUser.fishingrod.moneyFix = Math.floor(Math.random() * (itemUserChoose.moneyFix[1] - itemUserChoose.moneyFix[0] + 1) + itemUserChoose.moneyFix[0]);
                dataUser.fishingrod.rateBroken = itemUserChoose.rateBroken;
                await decreaseMoney(senderID, itemUserChoose.cost);
                writeFileSync(dirUser, JSON.stringify(dataUser, null, 4), "utf-8");
                let rodImage = await this.getImage(itemUserChoose.name + ".gif");
                console.log(itemUserChoose.name + ".gif");
                return api.sendMessage({
                    body: `[🌸 Fishing Buy🌸 ] Bạn đã mua thành công "${itemUserChoose.name}" với giá ${itemUserChoose.cost}$`,
                    attachment: rodImage
                }, threadID, messageID);
            } catch (error) { console.log(error); return api.sendMessage("[🌸 Fishing Buy 🌸] Đã xảy ra lỗi không mong muốn khi bạn đang giao dịch!", threadID, messageID) }
        }

        case "sellmenu": {
            if (isNaN(body)) return api.sendMessage("[🌸 Fishing Sell 🌸] Lựa chọn của bạn không phải là một con số!", threadID, messageID);
            if (body > 6 || body < 1) return api.sendMessage("[ Fishing Sell ] Lựa chọn của bạn không tồn tại!", threadID, messageID);
            switch (body) {
                case "1": {
                    try {
                        var dataUser = JSON.parse(readFileSync(dirUser, "utf-8")), index = 0, totalAll = 0;
                        for (item of dataUser.inventory) {
                            totalAll += item.price;
                            dataUser.inventory[index++] = {
                                name: "Empty",
                                size: 0.0,
                                price: 0
                            };
                        }
                        await increaseMoney(senderID, totalAll);
                        writeFileSync(dirUser, JSON.stringify(dataUser, null, 4), "utf-8");
                        return api.sendMessage(`[🌸 Fishing Sell 🌸] Bạn đã bán thành công toàn bộ cá trong túi và thu về được ${totalAll}$`, threadID, messageID);
                    } catch (error) { console.log(error); return api.sendMessage("[🌸 Fishing Sell 🌸] Đã xảy ra lỗi không mong muốn khi bạn đang giao dịch!", threadID, messageID) }
                }

                case "2": {
                    return api.sendMessage("WIP", threadID, messageID);
                } 

                case "3": {
                    return api.sendMessage("WIP", threadID, messageID);
                } 

                case "4": {
                    return api.sendMessage("WIP", threadID, messageID);
                } 

                case "5": {
                    return api.sendMessage("WIP", threadID, messageID);
                } 

                case "6": {
                    return api.sendMessage("WIP", threadID, messageID);
                } 
            }
        }

        case "upgrademenu": {
            if (isNaN(body)) return api.sendMessage("[🌸 Fishing Sell 🌸] Lựa chọn của bạn không phải là một con số!", threadID, messageID);
            if (body > 2 || body < 1) return api.sendMessage("[🌸 Fishing Sell 🌸] Lựa chọn của bạn không tồn tại!", threadID, messageID);
            switch (body) {
                case "1": {
                    const dataUser = JSON.parse(readFileSync(dirUser, "utf-8"));
                    return api.sendMessage(`[🌸 Fishing Upgrage 🌸] Hiện tại bạn đang có ${dataUser.inventory.length + 1} vị trí có thể chứa đồ\nĐể mua thêm vị trí chứa đồ, bạn hãy reply(phản hồi) tin nhắn này số lượng vị trí bạn muốn mua!`, threadID, (error, info) => {
                        client.handleReply.push({
                            name: this.config.name,
                            messageID: info.messageID,
                            author: senderID,
                            type: "upgradestorage",
                            dirUser
                        });
                    }, messageID);
                }
                
                case "2": {
                    try {
                        var dataUser = JSON.parse(readFileSync(dirUser, "utf-8"));
                        let userMoney = (await Currencies.getData(event.senderID)).money;
                        if (dataUser.fishingrod.durability > dataUser.fishingrod.durabilityDefault / 2) return api.sendMessage("[🌸 Fishing Upgrade 🌸] Cần câu của bạn hiện tại vẫn chưa cần sửa chữa", threadID, messageID);
                        if (userMoney < dataUser.fishingrod.moneyFix) return api.sendMessage(`[🌸 Fishing Upgrade 🌸] Bạn không đủ tiền để có thể sửa chữa cần câu của bạn, bạn còn thiếu khoảng ${moneyOfUpgrade - userMoney}$`, threadID, messageID);
                        dataUser.fishingrod.durability = dataUser.fishingrod.durabilityDefault;
                        await decreaseMoney(senderID, dataUser.fishingrod.moneyFix);
                        writeFileSync(dirUser, JSON.stringify(dataUser, null, 4), "utf-8");
                        return api.sendMessage(`[🌸 Fishing Upgrade 🌸] Bạn đã sửa chữa thành công cần câu với giá ${dataUser.fishingrod.moneyFix}$`, threadID, messageID);
                    } catch (error) { console.log(error); return api.sendMessage("[🌸 Fishing Upgrade 🌸] Đã xảy ra lỗi không mong muốn khi bạn đang giao dịch!", threadID, messageID) }
                }
            }
        }

        case "upgradestorage": {
            try {
                if (isNaN(body)) return api.sendMessage("[🌸 Fishing Upgrade 🌸] Lựa chọn của bạn không phải là một con số!", threadID, messageID);
                if (body < 0) return api.sendMessage("[🌸 Fishing Upgrade 🌸] Lựa chọn của bạn không phải là số âm!", threadID, messageID);
                var dataUser = JSON.parse(readFileSync(dirUser, "utf-8"));
                let userMoney = (await Currencies.getData(senderID)).money;
                const moneyOfUpgrade = parseInt(body) * 2000;
                if (userMoney < moneyOfUpgrade) return api.sendMessage(`[🌸 Fishing Upgrade 🌸] Bạn không đủ tiền để có thể mua thêm vị trí chứa đồ, bạn còn thiếu khoảng ${moneyOfUpgrade - userMoney}$`, threadID, messageID);
                for (var i = 0; i < parseInt(body) - 1; i++) dataUser.inventory.push({
                    name: "Empty",
                    size: 0.0,
                    price: 0,
                });
                await decreaseMoney(senderID, moneyOfUpgrade);
                writeFileSync(dirUser, JSON.stringify(dataUser, null, 4), "utf-8");
                return api.sendMessage(`[🌸 Fishing Upgrade 🌸] Bạn đã mua thành công ${body} vị trí với giá ${moneyOfUpgrade}$!`, threadID, messageID);
            } catch (error) { console.log(error); return api.sendMessage("[ Fishing Upgrade ] Đã xảy ra lỗi không mong muốn khi bạn đang giao dịch!", threadID, messageID) }
        }

        
    }
}

module.exports.run = async function ({ event, api, args }) {
    const { readFileSync, writeFileSync, existsSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
    const moment = global.nodemodule["moment-timezone"];
    const { threadID, messageID, senderID } = event;
    const dirUser = join(global.configModule[this.config.name].dirData, `${senderID}.json`);

    switch ((args[0] || "").toLowerCase()) {
        case "register":
        case "-r": {
            try {
                if (existsSync(dirUser)) return api.sendMessage("[🌸 Fishing 🌸] Bạn đã từng đăng ký câu cá tại khu vực này!", threadID, messageID);
                var newData = {};
                newData.fishingrod = {
                    "rodType": 0,
                    "enchantRod": {}
                };
                newData.inventory = this.makeEmptySlot();
                newData.totalCatch = newData.totalMoney = newData.point = newData.lastTimeFishing = 0;
                writeFileSync(dirUser, JSON.stringify(newData, null, 4), "utf-8");
                return api.sendMessage("[🌸 Fishing Register 🌸] Bạn đã đăng ký câu cá thành công!", threadID, messageID);
            } catch { return api.sendMessage("[ Fishing Register ] Đã có xảy ra lỗi không mong muốn!", threadID, messageID) }
        }

        case "shop": {
            if (!existsSync(dirUser)) return api.sendMessage("[🌸 Fishing Shop 🌸] Bạn chưa đăng ký câu cá để có thể sử dụng chức năng mua đồ!", threadID, messageID);
            return api.sendMessage("「🌸 Fishing Shop 🌸」\nHãy reply(Phản hồi) tin nhắn này số bạn chọn\n\n❯ 1/ Buy - Mua vật phẩm.\n❯ 2/ Sell - Bán vật phẩm câu được.\n❯ 3/ Upgrade - Nâng cấp vật phẩm.\n❯ 4/ Enchant - Phù phép vật phẩm.", threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "menushop",
                    dirUser
                })
            }, messageID);
        }
        
        default: {
            try {
                if (!existsSync(dirUser)) return api.sendMessage("[🌸 Fishing 🌸] Bạn chưa đăng ký câu cá tại khu vực này!", threadID, messageID);
                var dataUser = JSON.parse(readFileSync(dirUser, "utf-8"));
                const dateNow = moment().tz("Asia/Ho_Chi_minh");
                const format = new Intl.NumberFormat();
                if (dataUser.fishingrod.rodType == 0) return api.sendMessage("[🌸 Fishing 🌸] Hiện tại bạn chưa có cần câu, hãy mua cần câu mới và thử lại!", threadID, messageID);
                if (dataUser.fishingrod.durability <= 0) return api.sendMessage("[🌸 Fishing 🌸] Cần câu của bạn đã bị gãy từ trước, hãy sửa chữa lại hoặc mua mới để có thể tiếp tục câu cá", threadID, messageID);
                if (Math.floor((dataUser.fishingrod.cooldownTime) - (dateNow.unix() - dataUser.lastTimeFishing)) > 0) return api.sendMessage("[🌸 Fishing 🌸] Hiện tại bạn đang trong thời gian chờ, vui lòng đợi một chút và sau đó thử lại", threadID, messageID);
                
                const fishRarity = this .getRarity();
                const currentHour = dateNow.hours();
                const fishData = await this.getFish(fishRarity, currentHour);
                if (!fishData) return api.sendMessage("[🌸 Fishing 🌸] Hiện tại trong hồ không có cá để câu", threadID, messageID);

                var caught = fishData[Math.floor(Math.random() * ((fishData.length - 1) - 0 + 1)) + 0];
                caught.size = (typeof caught.size != "array") ? caught.size : (Math.random() * (caught.size[1] - caught.size[0]) + caught.size[0]).toFixed(1);
                dataUser.fishingrod.durability = dataUser.fishingrod.durability - Math.floor(Math.random() * (dataUser.fishingrod.rateBroken[1] - dataUser.fishingrod.rateBroken[0] + 1) + dataUser.fishingrod.rateBroken[0]);
                dataUser.lastTimeFishing = dateNow.unix();
                dataUser.totalCatch += 1;
                dataUser.point += caught.price;
                const [error, inventory] = this.addToInventory(dataUser, caught);
                if (error) return api.sendMessage(error, threadID, messageID);
                dataUser.inventory = inventory;
                writeFileSync(dirUser, JSON.stringify(dataUser, null, 4), "utf-8");
                console.log(caught);
                console.log(caught.name);
                if (!caught.name) return api.sendMessage(caught.catch);
                let fishImage = await this.getImage(caught.name + ".png");

                return api.sendMessage({
                    body: `🌸 Bạn đã bắt được một con: ${caught.name} 🌸\n\n🌸 Kích thước: ${caught.size} cm\n🌸 Độ hiếm: ${caught.rarity}\n🌸 Số tiền kiếm được: ${format.format(caught.price)}$`,
                    attachment: fishImage
                }, threadID, messageID);
            } catch (error) { console.log(error); return api.sendMessage("[🌸 Fishing 🌸] Đã có lỗi xảy ra không mong muốn\n'Tau quên dọn hồ nên cá chết hết rồi bây' - ADMIN", threadID, messageID) }
        }
    }
}
