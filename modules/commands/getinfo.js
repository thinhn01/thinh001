module.exports.config = {
    name: "getinfo",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Xem thông tin của người dùng facebook",
    commandCategory: "Nhóm",
    usages: "[reply/tag/id]",
    cooldowns: 3
    
};
module. exports. run = async({api,event,args}) => {
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const axios = global.nodemodule['axios'];  

    if(!args[0]){
    if(event.type == "message_reply") { uid = event.messageReply.senderID }
    else uid = event.senderID;
    const res = await axios.get(`https://api.mincute.repl.co/facebook/info?uid=${uid}`);  
    var gender = res.data.data.gender == 'male' ? "Nam" : res.data.data.gender == 'female' ? "Nữ" : "Không công khai";
    var birthday = res.data.data.birthday ? `${res.data.data.birthday}` : "Không công khai";
    var username = res.data.data.username ? `${res.data.data.username}` : "Không công khai";
    var web = res.data.data.website ? `${res.data.data.website}` : "Không công khai";
    var love = res.data.data.relationship_status == 'Single' ? "Độc Thân" : res.data.data.relationship_status == `It's complicated` ? "Có mối quan hệ phức tạp" : res.data.data.relationship_status == 'In a civil union' ? `Chung sống có đăng ký với ${res.data.data.love.name}` : res.data.data.relationship_status == 'In a relationship' ? `Đang hẹn hò với ${res.data.data.love.name}` : res.data.data.relationship_status == 'Married' ? `Đã kết hôn với ${res.data.data.love.name}` : "Không Công Khai";
    var location = res.data.data.location ?  `${res.data.data.location.name}`: "Không công khai";
    var hometown = res.data.data.hometown ? `${res.data.data.hometown.name}` : "Không công khai";
    var callback = () => api.sendMessage({body:`👤Tên: ${res.data.data.name}\n🔎UID: ${res.data.data.uid}\n👀Tên người dùng: ${username}\n🎎Giới tính: ${gender}\n🎂Sinh Nhật: ${birthday}\n❤️Mối quan hệ: ${love}\n🏠Sống tại: ${location}\n🌏Đến từ: ${hometown}\n📩Website: ${web}\n📌URL cá nhân: ${res.data.data.link}`,
        attachment: fs.createReadStream(__dirname + "/cache/info1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/info1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/info1.png')).on('close',
        () => callback());
   } 
    else {
    if (args.join().indexOf('@') !== -1){
    var mentions = Object.keys(event.mentions)
    const res = await axios.get(`https://api.mincute.repl.co/facebook/info?uid=${mentions}`);  
    var gender = res.data.data.gender == 'male' ? "Nam" : res.data.data.gender == 'female' ? "Nữ" : "Không công khai";
    var birthday = res.data.data.birthday ? `${res.data.data.birthday}` : "Không công khai";
    var username = res.data.data.username ? `${res.data.data.username}` : "Không công khai";
    var web = res.data.data.website ? `${res.data.data.website}` : "Không công khai";
    var love = res.data.data.relationship_status == 'Single' ? "Độc Thân" : res.data.data.relationship_status == `It's complicated` ? "Có mối quan hệ phức tạp" : res.data.data.relationship_status == 'In a civil union' ? `Chung sống có đăng ký với ${res.data.data.love.name}` : res.data.data.relationship_status == 'In a relationship' ? `Đang hẹn hò với ${res.data.data.love.name}` : res.data.data.relationship_status == 'Married' ? `Đã kết hôn với ${res.data.data.love.name}` : "Không Công Khai";
    var location = res.data.data.location ?  `${res.data.data.location.name}`: "Không công khai";
    var hometown = res.data.data.hometown ? `${res.data.data.hometown.name}` : "Không công khai";
    var callback = () => { 
        api.sendMessage({body:`👤Tên: ${res.data.data.name}\n🔎UID: ${res.data.data.uid}\n👀Tên người dùng: ${username}\n🎎Giới tính: ${gender}\n🎂Sinh Nhật: ${birthday}\n❤️Mối quan hệ: ${love}\n🏠Sống tại: ${location}\n🌏Đến từ: ${hometown}\n📩Website: ${web}\n📌URL cá nhân: ${res.data.data.link}`,
        attachment: fs.createReadStream(__dirname + "/cache/info12.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/info12.png"),event.messageID); 
    }
    return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/info12.png')).on('close',
        () => callback());
    }
    else { if (args[0].indexOf(".com/")!==-1) {
    const res_ID = await axios.get(`https://hoangdogianguyenofficial.herokuapp.com/finduid?url=${args[0]}`);  
    const res = await axios.get(`https://api.mincute.repl.co/facebook/info?uid=${res_ID.data.id}`);  
    var gender = res.data.data.gender == 'male' ? "Nam" : res.data.data.gender == 'female' ? "Nữ" : "Không công khai";
    var birthday = res.data.data.birthday ? `${res.data.data.birthday}` : "Không công khai";
    var username = res.data.data.username ? `${res.data.data.username}` : "Không công khai";
    var web = res.data.data.website ? `${res.data.data.website}` : "Không công khai";
    var love = res.data.data.relationship_status == 'Single' ? "Độc Thân" : res.data.data.relationship_status == `It's complicated` ? "Có mối quan hệ phức tạp" : res.data.data.relationship_status == 'In a civil union' ? `Chung sống có đăng ký với ${res.data.data.love.name}` : res.data.data.relationship_status == 'In a relationship' ? `Đang hẹn hò với ${res.data.data.love.name}` : res.data.data.relationship_status == 'Married' ? `Đã kết hôn với ${res.data.data.love.name}` : "Không Công Khai";
    var location = res.data.data.location ?  `${res.data.data.location.name}`: "Không công khai";
    var hometown = res.data.data.hometown ? `${res.data.data.hometown.name}` : "Không công khai";
    var callback = () => api.sendMessage({body:`👤Tên: ${res.data.data.name}\n🔎UID: ${res.data.data.uid}\n👀Tên người dùng: ${username}\n🎎Giới tính: ${gender}\n🎂Sinh Nhật: ${birthday}\n❤️Mối quan hệ: ${love}\n🏠Sống tại: ${location}\n🌏Đến từ: ${hometown}\n📩Website: ${web}\n📌URL cá nhân: ${res.data.data.link}`,
        attachment: fs.createReadStream(__dirname + "/cache/info123.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/info123.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${res_ID.data.id}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/info123.png')).on('close',
        () => callback());
    }
    else {
    if (!parseInt(args[0])) {return api.sendMessage(`Vui lòng chỉ nhập 1 ID tài khoản Facebook`, event.threadID, event.messageID) }
    const res = await axios.get(`https://api.mincute.repl.co/facebook/info?uid=${args[0]}`);  
    var gender = res.data.data.gender == 'male' ? "Nam" : res.data.data.gender == 'female' ? "Nữ" : "Không công khai";
    var birthday = res.data.data.birthday ? `${res.data.data.birthday}` : "Không công khai";
    var username = res.data.data.username ? `${res.data.data.username}` : "Không công khai";
    var web = res.data.data.website ? `${res.data.data.website}` : "Không công khai";
    var love = res.data.data.relationship_status == 'Single' ? "Độc Thân" : res.data.data.relationship_status == `It's complicated` ? "Có mối quan hệ phức tạp" : res.data.data.relationship_status == 'In a civil union' ? `Chung sống có đăng ký với ${res.data.data.love.name}` : res.data.data.relationship_status == 'In a relationship' ? `Đang hẹn hò với ${res.data.data.love.name}` : res.data.data.relationship_status == 'Married' ? `Đã kết hôn với ${res.data.data.love.name}` : "Không Công Khai";
    var location = res.data.data.location ?  `${res.data.data.location.name}`: "Không công khai";
    var hometown = res.data.data.hometown ? `${res.data.data.hometown.name}` : "Không công khai";
    var callback = () => api.sendMessage({body:`👤Tên: ${res.data.data.name}\n🔎UID: ${res.data.data.uid}\n👀Tên người dùng: ${username}\n🎎Giới tính: ${gender}\n🎂Sinh Nhật: ${birthday}\n❤️Mối quan hệ: ${love}\n🏠Sống tại: ${location}\n🌏Đến từ: ${hometown}\n📩Website: ${web}\n📌URL cá nhân: ${res.data.data.link}`,
        attachment: fs.createReadStream(__dirname + "/cache/info23.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/info23.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${args[0]}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/info23.png')).on('close',
        () => callback());
    }
  }
}
}