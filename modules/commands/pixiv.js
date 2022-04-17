module.exports.config = {
    name: "pixiv",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Shiron",
    description: "Tìm kiếm pixiv",
    commandCategory: "pixiv",
    usages: "[tên pixiv]",
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
    const res = await axios.get(`https://api-ttk.herokuapp.com/social/pixiv?q=${encodeURIComponent(type)}`);
    var result = res.data.result;
    var msg = [];
    let img1 = `${res.data.result[0].urls.regular}`;
    let img2 = `${res.data.result[1].urls.regular}`;
    let img3 = `${res.data.result[2].urls.regular}`;
    let img4 = `${res.data.result[3].urls.regular}`;
    let img5 = `${res.data.result[4].urls.regular}`;
    let img6 = `${res.data.result[5].urls.regular}`;
    let img7 = `${res.data.result[6].urls.regular}`;
    let img8 = `${res.data.result[7].urls.regular}`;
    let img9 = `${res.data.result[8].urls.regular}`;
    let img10 = `${res.data.result[9].urls.regular}`;
    let img11 = `${res.data.result[10].urls.regular}`;
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
    console.log(msg)
    return api.sendMessage({
        body: msg,
        attachment: allimage
    }, event.threadID);
}