const axios = require("axios"),
    fs = require("fs-extra");
module.exports.config = {
    name: "hentain",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "Thiệu Trung Kiên",
    description: "Đọc truyện nhentai",
    commandCategory: "nsfw",
    usages: "[Tag]",
    cooldowns: 5
}, module.exports.onload = async function() {
    console.log("===NHENTAI===\nLOADING THÀNH CÔNG\n\n")
}, module.exports.run = async function({
    args: e,
    event: a,
    api: n
}) {
    const t = await axios.get(`https://nhentai-ttk.herokuapp.com/api/nhsearch?query=${e[0]}&page=1`);
    var s = [],
        o = [],
        r = t.data.length,
        i = 1;
    (i = parseInt(e[1]) || 1) < -1 && (i = 1);
    for (var c = Math.ceil(r / 5), h = 5 * (i - 1); h < 5 * (i - 1) + 5 && !(h >= r); h++) {
        const e = (await axios.get(`https://external-content.duckduckgo.com/iu/?u=${t.data[h].coverScr}`, {
            responseType: "stream"
        })).data;
        s.push(e);
        o += `[${h+1}].Tên : ${t.data[h].name}\nCode : ${t.data[h].code}\n\n`
    }
    return o += "Reply tin nhắn này theo stt để đọc truyện\n\n", o += `Đang có tổng ${r} truyện\nSố trang (${i}/${c})\nDùng ${global.config.PREFIX}hentain <số trang>`, n.sendMessage({
        body: o,
        attachment: s
    }, a.threadID, ((n, t) => {
        global.client.handleReply.push({
            name: this.config.name,
            messageID: t.messageID,
            author: a.senderID,
            title: e[0],
            type: "getImg"
        })
    }), a.messageID)
}, module.exports.handleReply = async function({
    event: e,
    api: a,
    handleReply: n
}) {
    if (n.author != e.senderID) return a.sendMessage("Cút", e.threadID);
    a.unsendMessage(n.messageID);
    try {
        if ("getImg" === n.type) {
            const t = await axios.get(`https://nhentai-ttk.herokuapp.com/api/nhsearch?query=${n.title}&page=1`),
                s = await axios.get(`https://nhentai-ttk.herokuapp.com/api/nhdetail?code=${t.data[e.body-1].code}`),
                o = [],
                r = [],
                i = s.data.pages;
            for (let e = 0; e < i.length; e++) {
                const a = (await axios.get(`https://external-content.duckduckgo.com/iu/?u=${i[e]}`, {
                    responseType: "arraybuffer"
                })).data;
                fs.writeFileSync(__dirname + "/cache/nhentai_" + e + ".jpg", Buffer.from(a)), o.push(fs.createReadStream(__dirname + "/cache/nhentai_" + e + ".jpg")), r.push(__dirname + "/cache/nhentai_" + e + ".jpg")
            }
            return a.sendMessage({
                body: "Truyện sẽ tự động gỡ sau 10 phút !",
                attachment: o
            }, e.threadID, ((e, n) => {
                for (var t of r) fs.unlinkSync(t);
                setTimeout((() => {
                    a.unsendMessage(n.messageID)
                }), 1000000)
            }))
        }
    } catch (e) {
        console.log(e)
    }
};