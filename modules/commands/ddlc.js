module.exports.config = {
    name: "ddlc",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Shiron",
    description: "doki doki literature club",
    commandCategory: "image",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "request": ""
    }
};
module.exports.run = async ({ api, event,args }) => {
    const request = require('request');
    const fs = require("fs-extra")
    const axios = require("axios")
    const {
        threadID,
        messageID,
        senderID,
        body
    } = event;
    return api.sendMessage(`Reply tin nhắn này để chọn nhân vật\n\n( Character : monika, yuri, natsuki, sayori or m, y, n , s )`, event.threadID, (err, info) => {
        return global.client.handleReply.push({
            type: "characters",
            name: this.config.name,
            author: senderID,
            messageID: info.messageID
        });
    }, event.messageID);
}
module.exports.handleReply = async function({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
    if (handleReply.author != event.senderID) return;
    const {
        threadID,
        messageID,
        senderID
    } = event;
    const background = handleReply.background;
    switch (handleReply.type) {
        case "characters": {
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(`Bạn đã chọn nhân vật là ${event.body}\n\nReply tin nhắn để chọn background\n\n(Background : bedroom, class, closet, club, corridor, house, kitchen, residential, sayori_bedroom)`, threadID, function(err, info) {
                return global.client.handleReply.push({
                    type: "background",
                    name: "ddlc",
                    author: senderID,
                    characters: event.body,
                    messageID: info.messageID
                });
            }, messageID)
        }
        case "background": {
            const text = handleReply.text;
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(`Bạn đã chọn background là ${event.body}\n\nReply tin nhắn này để chọn nội dung!`, threadID, function(err, info) {
                return global.client.handleReply.push({
                    type: "create",
                    name: "ddlc",
                    author: senderID,
                    characters: handleReply.characters,
                    background: event.body,
                    messageID: info.messageID
                });
            }, messageID)
        }
        case "create": {
            var nhanvat = handleReply.characters;
            var hinhnen = handleReply.background;
            var noidung = event.body;
            api.unsendMessage(handleReply.messageID);
            var callback = () => api.sendMessage({
                attachment: fs.createReadStream(__dirname + "/cache/ddlc.png")
            }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ddlc.png"), event.messageID);
            return request(`https://api-ttk.herokuapp.com/other/ddlc?character=${encodeURIComponent(nhanvat)}&background=${encodeURIComponent(hinhnen)}&text=${encodeURIComponent(noidung)}`).pipe(fs.createWriteStream(__dirname + '/cache/ddlc.png')).on('close', () => callback());
        }
    }
}