module.exports.config = {
    name: "doof",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Doof",
    commandCategory: "Giải trí",
    usages: "[text]",
    cooldowns: 10,
    dependencies: {
        canvas: "",
        axios: "",
        "fs-extra": "",
    },
};

module.exports.wrapText = (ctx, text, maxWidth) => {
    return new Promise((resolve) => {
        if (ctx.measureText(text).width < maxWidth) return resolve([text]);
        if (ctx.measureText("W").width > maxWidth) return resolve(null);
        const words = text.split(" ");
        const lines = [];
        let line = "";
        while (words.length > 0) {
            let split = false;
            while (ctx.measureText(words[0]).width >= maxWidth) {
                const temp = words[0];
                words[0] = temp.slice(0, -1);
                if (split) words[1] = `${temp.slice(-1)}${words[1]}`;
                else {
                    split = true;
                    words.splice(1, 0, temp.slice(-1));
                }
            }
            if (ctx.measureText(`${line}${words[0]}`).width < maxWidth)
                line += `${words.shift()} `;
            else {
                lines.push(line.trim());
                line = "";
            }
            if (words.length === 0) lines.push(line.trim());
        }
        return resolve(lines);
    });
};

module.exports.run = async function ({
    api,
    event,
    args
}) {
    const fs = global.nodemodule["fs-extra"];
    const axios = global.nodemodule["axios"];
    let {
        senderID,
        threadID,
        messageID
    } = event;
    if(!fs.existsSync(__dirname+`Roboto-Thin.ttf`)) { 
      let getfont = (await axios.get(`https://drive.google.com/u/0/uc?id=1ZhvdAOzugHMVWP9OQuJXRD_Yi2ZeCB-M&export=download`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+`Roboto-Thin.ttf`, Buffer.from(getfont, "utf-8"));
    };
    const {
        loadImage,
        createCanvas
    } = require("canvas");
    let path = __dirname + `/cache/cc${senderID}.png`;
    var text = args.join(" ");
    if (event.type == "message_reply") {
        text = event.messageReply.body
    }
    if (!text)
        return api.sendMessage("Nhập nội dung hoặc reply nội dung mà mark cmt", threadID, messageID);
    if( text.length < 14) {
    let bg = (
        await axios.get(`https://i.imgur.com/bMxrqTL.png`, {
            responseType: "arraybuffer",
        })
    ).data;
    fs.writeFileSync(path, Buffer.from(bg, "utf-8"));
    let imgB = await loadImage(path);
    let canvas = createCanvas(imgB.width, imgB.height);
    let ctx = canvas.getContext("2d");
    const Canvas = global.nodemodule["canvas"];
    ctx.drawImage(imgB, 0, 0, canvas.width, canvas.height);
    Canvas.registerFont(__dirname+`Roboto-Thin.ttf`, {
        family: "Roboto-Thin"
    });
    ctx.font = "20px Roboto-Thin";
    ctx.fillStyle = "#000000";
    ctx.textAlign = "center";
    fontSize = 17;
    while (ctx.measureText(text).width > 2600) {
        fontSize--;
        ctx.font = `${fontSize}px Arial`;
    }
    const lines = await this.wrapText(ctx, text, 182);
    ctx.fillText(lines.join("\n"), 124, 212);
    ctx.beginPath();
    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(path, imageBuffer);
    return api.sendMessage({
            attachment: fs.createReadStream(path)
        },
        threadID,
        () => fs.unlinkSync(path),
        messageID
    );
} 
    else {
    let bg = (
        await axios.get(`https://i.imgur.com/bMxrqTL.png`, {
            responseType: "arraybuffer",
        })
    ).data;

    fs.writeFileSync(path, Buffer.from(bg, "utf-8"));
    let imgB = await loadImage(path);
    let canvas = createCanvas(imgB.width, imgB.height);
    let ctx = canvas.getContext("2d");
    const Canvas = global.nodemodule["canvas"];
    ctx.drawImage(imgB, 0, 0, canvas.width, canvas.height);
    Canvas.registerFont(__dirname+`Roboto-Thin.ttf`, {
        family: "Roboto-Thin"
    });
    ctx.font = "20px Roboto-Thin";
    ctx.fillStyle = "#000000";
    ctx.textAlign = "start";
    fontSize = 17;
    while (ctx.measureText(text).width > 2600) {
        fontSize--;
        ctx.font = `${fontSize}px Arial`;
    }
    const lines = await this.wrapText(ctx, text, 182);
    ctx.fillText(lines.join("\n"), 45, 91);
    ctx.beginPath();
    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(path, imageBuffer);
    return api.sendMessage({
            attachment: fs.createReadStream(path)
        },
        threadID,
        () => fs.unlinkSync(path),
        messageID
    );
}
};