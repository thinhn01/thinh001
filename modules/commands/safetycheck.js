module.exports.config = {
    name: "safetycheck",
    version: "1.0.0",
    credits: "CatalizCS",
    hasPermssion: 0,
    description: "Kiểm tra/báo cáo trang web bạn hoặc ai đó không an toàn!",
    commandCategory: "General",
    usages: "safetycheck args",
    dependencies: {
    "safe-browse-url-lookup": ""
  },
    cooldowns: 5,
    info: [
        {
            key: 'args => on/off',
            prompt: 'Bật hoặc tắt chức năng kiểm tra tự động!',
            type: 'Boolean',
            example: 'on'
        },
        {
            ket: 'args => url',
            prompt: 'Nhập trang web bạn cần kiểm tra mức độ an toàn!',
            type: 'Url',
            example: "https://github.com"
        }
    ],
    envConfig: {
        APIKEY: "AIzaSyAyPQHnnLU2S6Fqy2x6eZIyFOQGe6Xwiek"
    }
};

module.exports.event = async ({ event, api, __GLOBAL, client }) => {
    let { messageID, threadID, body } = event;
    let data = global.data.threadData.get(threadID) || {};
    if (data["safetycheck"] != true) return;
    const lookup = global.nodemodule["safe-browse-url-lookup"]({ apiKey: global.configModule[this.config.name].APIKEY });
    const regex = /([\w+]+\:\/\/)?([\w\d-]+\.)*[\w-]+[\.\:]\w+([\/\?\=\&\#]?[\w-]+)*\/?/gm;
    let match_regex = body.match(regex) || [];
    let msg = "";
    if (typeof match_regex == "undefined" || match_regex.length == 0) return;
    lookup.checkMulti(match_regex)
    .then(urlMap => {
        for (let url in urlMap) {
            urlMap[url] ? msg += `Trang web ${url} có thể đã bị nhiễm mã độc! vui lòng cẩn thận!!\n` : msg += `Trang web ${url} an toàn!`;
        }
        return api.sendMessage(msg, threadID, messageID);
    })
    .catch(err => {
        console.log('Something went wrong.');
        console.log(err);
    });
}

module.exports.run = async ({ api, event, __GLOBAL, client, Threads, args, utils }) => {
    let data = (await Threads.getData(event.threadID)).data;
    switch (args[0]) {
        case "on": {
            data["safetycheck"] = true;
            await Threads.setData(event.threadID, options = { data });
            global.data.threadData.set(event.threadID, data);
            api.sendMessage("[ SAFETY-CHECK ] Đã bật chế độ tự động!", event.threadID, event.messageID);
            break;
        }
        case "off": {
            data["safetycheck"] = false;
            await Threads.setData(event.threadID, options = { data });
            global.data.threadData.set(event.threadID, data);
            api.sendMessage("[ SAFETY-CHECK ] Đã tắt chế độ tự động!", event.threadID, event.messageID);
            break;
        }
        default: {
            const lookup = global.nodemodule["safe-browse-url-lookup"]({ apiKey: global.configModule[this.config.name].APIKEY });
            const regex = /([\w+]+\:\/\/)?([\w\d-]+\.)*[\w-]+[\.\:]\w+([\/\?\=\&\#]?[\w-]+)*\/?/gm;
            let match_regex = args.join(" ").match(regex) || [], msg = "";
            if (typeof match_regex == "undefined" || match_regex.length == 0) return utils.throwError("safetycheck", event.threadID, event.messageID);
            //utils.throwError("safetycheck", event.threadID, event.messageID);
            lookup.checkMulti(match_regex)
            .then(urlMap => {
                for (let url in urlMap) {
                    urlMap[url] ? msg += `Trang web ${url} có thể đã bị nhiễm mã độc! vui lòng cẩn thận!!\n` : msg += `Trang web ${url} an toàn!`;
                }
                return api.sendMessage(msg, event.threadID, event.messageID);
            })
            .catch(err => {
                console.log('Something went wrong.');
                console.log(err);
            });
            break;
        }
    }
}