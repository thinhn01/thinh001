﻿module.exports.config = {
    name: "ins",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Shiron",
    description: "xem thông tin người dùng instagram",
    commandCategory: "instagram",
    usages: "instagram",
    cooldowns: 5
};
module.exports.run = async function ({ api, args, event, Threads, Users }) {
    const request = require("request")
  const fs = require("fs")
  const axios = require("axios")
 try{
let user = args.join(" ");
const res = await axios.get(`http://api-ttk.herokuapp.com/ig?username=${user}`);
var usn = res.data.username;
var fnm = res.data.fullname;
var bio = res.data.bio;
var pst = res.data.post;
var fle = res.data.followers;
var flw = res.data.following;

if (!user) return api.sendMessage("Vui lòng nhập username instagram?", event.threadID, event.messageID);
var callback = () => api.sendMessage({body:`=> ID: ${usn}\n=> Tên đầy đủ: ${fnm}\n=> Tiểu Sử:${bio}\n=> Bài Viết: ${pst}\n=> Người Theo Dõi: ${fle}\n=> Đang Theo Dõi: ${flw}`,attachment: fs.createReadStream(__dirname + "/cache/ins.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ins.jpg"),event.messageID);
return request(`${res.data.profile}`).pipe(fs.createWriteStream(__dirname+'/cache/ins.jpg')).on('close',() => callback());   }
catch (err) {
        console.log(err)
        return api.sendMessage("Đã xảy ra lỗi", event.threadID);
    }  

}