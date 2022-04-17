module.exports.config = {
    name: "hentaisearch",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Shiron",
    description: "Tìm kiếm truyện hentai",
    commandCategory: "searchhentai",
    usages: "[tên truyện]",
    cooldowns: 5,
    dependencies: {
        "axios": "",
        "request": "",
        "fs": ""
    }
};
    module.exports.run = async function ({ api, args, event, Threads, Users }) {
    const fetch = require("node-fetch")
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    let type = args.join(" ");
    if (!type) {
        return api.sendMessage("Thiếu từ khoá", event.threadID);
    }
    const res = await axios.get(`https://api-ttk.herokuapp.com/nsfw/nhentai?search=${encodeURIComponent(type)}`);
    var result = res.data.result;
    var msg = [];
    let img1 = `${res.data.result[0].thumbnail.s}`;
    let img2 = `${res.data.result[1].thumbnail.s}`;
    let img3 = `${res.data.result[2].thumbnail.s}`;
    let img4 = `${res.data.result[3].thumbnail.s}`;
    let img5 = `${res.data.result[4].thumbnail.s}`;
    let img6 = `${res.data.result[5].thumbnail.s}`;
    let img7 = `${res.data.result[6].thumbnail.s}`;
    let img8 = `${res.data.result[7].thumbnail.s}`;
    let img9 = `${res.data.result[8].thumbnail.s}`;
    let img10 = `${res.data.result[9].thumbnail.s}`;
    let img11 = `${res.data.result[10].thumbnail.s}`;
    let img12 = `${res.data.result[11].thumbnail.s}`;
    let img13 = `${res.data.result[12].thumbnail.s}`;
    let img14 = `${res.data.result[13].thumbnail.s}`;
    let img15 = `${res.data.result[14].thumbnail.s}`;
    let img16 = `${res.data.result[15].thumbnail.s}`;
    let img17 = `${res.data.result[16].thumbnail.s}`;
    let img18 = `${res.data.result[17].thumbnail.s}`;
    let img19 = `${res.data.result[18].thumbnail.s}`;
    let img20 = `${res.data.result[19].thumbnail.s}`;
    let img21 = `${res.data.result[20].thumbnail.s}`;
    let img22 = `${res.data.result[21].thumbnail.s}`;
    let img23 = `${res.data.result[22].thumbnail.s}`;
    let img24 = `${res.data.result[23].thumbnail.s}`;
    let img25 = `${res.data.result[24].thumbnail.s}`;
    let imgs1 = (await axios.get(`${img1}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img1.png", Buffer.from(imgs1, "utf-8"));
    let imgs2 = (await axios.get(`${img2}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img2.png", Buffer.from(imgs2, "utf-8"));
    let imgs3 = (await axios.get(`${img3}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img3.png", Buffer.from(imgs3, "utf-8"));
    let imgs4 = (await axios.get(`${img4}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img4.png", Buffer.from(imgs4, "utf-8"));
    let imgs5 = (await axios.get(`${img5}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img5.png", Buffer.from(imgs5, "utf-8"));
    let imgs6 = (await axios.get(`${img6}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img6.png", Buffer.from(imgs6, "utf-8"));
    let imgs7 = (await axios.get(`${img7}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img7.png", Buffer.from(imgs7, "utf-8"));
    let imgs8 = (await axios.get(`${img8}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img8.png", Buffer.from(imgs8, "utf-8"));
    let imgs9 = (await axios.get(`${img9}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img9.png", Buffer.from(imgs9, "utf-8"));
    let imgs10 = (await axios.get(`${img10}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img10.png", Buffer.from(imgs10, "utf-8"));
    let imgs11 = (await axios.get(`${img11}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img11.png", Buffer.from(imgs11, "utf-8"));
    let imgs12 = (await axios.get(`${img12}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img12.png", Buffer.from(imgs12, "utf-8"));
    let imgs13 = (await axios.get(`${img13}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img13.png", Buffer.from(imgs13, "utf-8"));
    let imgs14 = (await axios.get(`${img14}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img14.png", Buffer.from(imgs14, "utf-8"));
    let imgs15 = (await axios.get(`${img15}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img15.png", Buffer.from(imgs15, "utf-8"));
    let imgs16 = (await axios.get(`${img16}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img16.png", Buffer.from(imgs16, "utf-8"));
    let imgs17 = (await axios.get(`${img17}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img17.png", Buffer.from(imgs17, "utf-8"));
    let imgs18 = (await axios.get(`${img18}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img18.png", Buffer.from(imgs18, "utf-8"));
    let imgs19 = (await axios.get(`${img19}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img19.png", Buffer.from(imgs19, "utf-8"));
    let imgs20 = (await axios.get(`${img20}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img20.png", Buffer.from(imgs20, "utf-8"));
    let imgs21 = (await axios.get(`${img21}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img21.png", Buffer.from(imgs21, "utf-8"));
    let imgs22 = (await axios.get(`${img22}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img22.png", Buffer.from(imgs22, "utf-8"));
    let imgs23 = (await axios.get(`${img23}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img23.png", Buffer.from(imgs23, "utf-8"));
    let imgs24 = (await axios.get(`${img24}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img24.png", Buffer.from(imgs24, "utf-8"));
    let imgs25 = (await axios.get(`${img25}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img25.png", Buffer.from(imgs25, "utf-8"));
    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/img1.png"));
    allimage.push(fs.createReadStream(__dirname + "/cache/img2.png"));
    allimage.push(fs.createReadStream(__dirname + "/cache/img3.png"));
    allimage.push(fs.createReadStream(__dirname + "/cache/img4.png"));
    allimage.push(fs.createReadStream(__dirname + "/cache/img5.png"));
    allimage.push(fs.createReadStream(__dirname + "/cache/img6.png"));
    allimage.push(fs.createReadStream(__dirname + "/cache/img7.png"));
    allimage.push(fs.createReadStream(__dirname + "/cache/img8.png"));
    allimage.push(fs.createReadStream(__dirname + "/cache/img9.png"));
    allimage.push(fs.createReadStream(__dirname + "/cache/img10.png"));
    allimage.push(fs.createReadStream(__dirname + "/cache/img11.png"));
    allimage.push(fs.createReadStream(__dirname + "/cache/img12.png"));
    allimage.push(fs.createReadStream(__dirname + "/cache/img13.png"));
    allimage.push(fs.createReadStream(__dirname + "/cache/img14.png"));
    allimage.push(fs.createReadStream(__dirname + "/cache/img15.png"));
    allimage.push(fs.createReadStream(__dirname + "/cache/img16.png"));
    allimage.push(fs.createReadStream(__dirname + "/cache/img17.png"));
    allimage.push(fs.createReadStream(__dirname + "/cache/img18.png"));
    allimage.push(fs.createReadStream(__dirname + "/cache/img19.png"));
    allimage.push(fs.createReadStream(__dirname + "/cache/img20.png"));
    allimage.push(fs.createReadStream(__dirname + "/cache/img21.png"));
    allimage.push(fs.createReadStream(__dirname + "/cache/img22.png"));
    allimage.push(fs.createReadStream(__dirname + "/cache/img23.png"));
    allimage.push(fs.createReadStream(__dirname + "/cache/img24.png"));
    allimage.push(fs.createReadStream(__dirname + "/cache/img25.png"));
    for (let stt in result) {
        var title = result[stt].title;
        var uid = result[stt].id;
        var language = result[stt].language;
        msg += `Tiêu đề : ${title}\nCode : ${uid}\nNgôn ngữ : ${language}\n\n`
    }
    console.log(msg)
    return api.sendMessage({
        body: msg,
        attachment: allimage
    }, event.threadID);
}