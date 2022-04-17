module.exports.config = {
  name: "dhbcemoji",
  version: "1.0.6", 
  hasPermssion: 0,
  credits: "D-Jukie",
  description: "Đuổi hình bắt chữ trên chính messenger của bạn!!!",
  commandCategory: "Giải trí", 
  usages: "", 
  cooldowns: 0
};

module.exports.handleReply = async function ({ args, event, api, handleReply }) {
    var {wordcomplete} = handleReply;
    if (event.senderID != handleReply.author) return
    switch (handleReply.type) {
        case "reply": {
    function formatText (text) {
      return text.normalize("NFD")
      .toLowerCase()
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
    }
    (formatText(event.body) == formatText(wordcomplete)) ? api.sendMessage(`Chính xác!\nĐáp án: ${wordcomplete}`, event.threadID, event.messageID) : api.sendMessage(`Sai rồi nha :v`, event.threadID, event.messageID)
}
}
}

module.exports.run = async function({ api, event }) {
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    const datagame = (await axios.get("https://goatbot.tk/api/duoihinhbatchuemoji")).data;
    const random = datagame.data;
    return api.sendMessage(`Hãy reply tin nhắn này với câu trả lời\n${random.emoji1}${random.emoji2}\n${random.wordcomplete.replace(/\S/g, "█ ")}`, event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "reply",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID,
            wordcomplete: random.wordcomplete
        })
    })
};