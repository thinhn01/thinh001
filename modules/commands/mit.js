/**
 * @author ProCoderMew
 * @warn Do not edit code or edit credits
 * @apikey Reg key tại: https://meewmeew.info/site
 */

module.exports.config = {
    name: "mit",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "ProCoderMew",
    description: "Chat c\xF9ng con sim m\u1EA5t d\u1EA1y nh\u1EA5t",
    commandCategory: "General",
    usages: "[args]",
    cooldowns: 5,
    dependencies: {
        axios: ""
    },
    envConfig: {
        APIKEY: ""
    }
}

async function simsimi(a) {
    const d = global.nodemodule.axios, { APIKEY: e } = global.configModule.mit, g = (a) => encodeURIComponent(a);
    try {
        var { data: j } = await d({ url: `https://meewmeew.info/simsimi/api?ask=${g(a)}&apikey=${e}`, method: "GET" });
        return { error: !1, data: j }
    } catch {
        return { error: !0, data: {} }
    }
}
module.exports.onLoad = () => console.log('='.repeat(20) + " Reg APIKEY tại meewmeew.info/site " + '='.repeat(20));
module.exports.run = () => !0;
module.exports.handleEvent = async function ({ api: b, event: a }) {
    const { threadID: c, messageID: d, senderID: e, body: f } = a, g = (e) => b.sendMessage(e, c, d);
    if (f && f.toLowerCase().indexOf("mit") == 0) {
        var { data: h, error: i } = await simsimi(f);
        return !0 == i ? void 0 : !1 == h.success ? g(h.error) : g(h.msg)
    }
}