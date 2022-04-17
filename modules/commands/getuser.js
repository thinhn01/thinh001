module. exports. config = {
    name: "getuser",
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
    const apikey = 'ShironVip_MinCute'

    if(!args[0]){
    if(event.type == "message_reply") { uid = event.messageReply.senderID }
    else uid = event.senderID;
    const res = await axios.get(`https://hoangdogianguyenofficial.herokuapp.com/info?uid=${uid}&apikey=${apikey}`);  
    var gender = res.data.data.gender == 'male' ? "Nam" : res.data.data.gender == 'female' ? "Nữ" : "Không công khai";
    var birthday = res.data.data.birthday ? `${res.data.data.birthday}` : "Không công khai";
    var love = res.data.data.relationship_status ? `${res.data.data.relationship_status}` : "Độc Thân"
    var hometown = res.data.data.hometown ? `${res.data.data.hometown}` : "Không công khai"
    var location = res.data.data.location ? `${res.data.data.location}` : "Không công khai"
    var url_profile = res.data.data.url_profile  ? `${res.data.data.url_profile}` : `${url_profile}`
    var callback = () => api.sendMessage({body:`👤Tên: ${res.data.data.fullname}\n🔎UID: ${res.data.data.user_id}\n👀Người Theo Dõi: ${res.data.data.follow_user}\n🎎Giới tính: ${gender}\n🎂Sinh Nhật: ${birthday}\n❤️Mối quan hệ: ${love}\n🏠Sống tại: ${location}\n🌏Đến từ: ${hometown}\n📌URL cá nhân: ${url_profile}`,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${uid}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback());
   } 
    else {
    if (args.join().indexOf('@') !== -1){
    var mentions = Object.keys(event.mentions)
    const res = await axios.get(`https://hoangdogianguyenofficial.herokuapp.com/info?uid=${mentions}&apikey=${apikey}`);  
    var gender = res.data.data.gender == 'male' ? "Nam" : res.data.data.gender == 'female' ? "Nữ" : "Không công khai";
    var birthday = res.data.data.birthday ? `${res.data.data.birthday}` : "Không công khai";
    var love = res.data.data.relationship_status ? `${res.data.data.relationship_status}` : "Độc Thân"
    var hometown = res.data.data.hometown ? `${res.data.data.hometown}` : "Không công khai"
    var location = res.data.data.location ? `${res.data.data.location}` : "Không công khai"
    var url_profile = res.data.data.url_profile  ? `${res.data.data.url_profile}` : `${url_profile}`
    var callback = () => api.sendMessage({body:`👤Tên: ${res.data.data.fullname}\n🔎UID: ${res.data.data.user_id}\n👀Người Theo Dõi: ${res.data.data.follow_user}\n🎎Giới tính: ${gender}\n🎂Sinh Nhật: ${birthday}\n❤️Mối quan hệ: ${love}\n🏠Sống tại: ${location}\n🌏Đến từ: ${hometown}\n📌URL cá nhân: ${url_profile}`,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback());
    }
    else { if (args[0].indexOf(".com/")!==-1) {
    const res_ID = await axios.get(`https://hoangdogianguyenofficial.herokuapp.com/finduid?url=${args[0]}`);  
    const res = await axios.get(`https://hoangdogianguyenofficial.herokuapp.com/info?uid=${res_ID.data.id}&apikey=${apikey}`);  
    var gender = res.data.data.gender == 'male' ? "Nam" : res.data.data.gender == 'female' ? "Nữ" : "Không công khai";
    var birthday = res.data.data.birthday ? `${res.data.data.birthday}` : "Không công khai";
    var love = res.data.data.relationship_status ? `${res.data.data.relationship_status}` : "Độc Thân"
    var hometown = res.data.data.hometown ? `${res.data.data.hometown}` : "Không công khai"
    var location = res.data.data.location ? `${res.data.data.location}` : "Không công khai"
    var url_profile = res.data.data.url_profile  ? `${res.data.data.url_profile}` : `${url_profile}`
     var callback = () => api.sendMessage({body:`👤Tên: ${res.data.data.fullname}\n🔎UID: ${res.data.data.user_id}\n👀Người Theo Dõi: ${res.data.data.follow_user}\n🎎Giới tính: ${gender}\n🎂Sinh Nhật: ${birthday}\n❤️Mối quan hệ: ${love}\n🏠Sống tại: ${location}\n🌏Đến từ: ${hometown}\n📌URL cá nhân: ${url_profile}`,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${res_ID.data.id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback());
    }
    else {
    if (!parseInt(args[0])) {return api.sendMessage(`Vui lòng chỉ nhập 1 ID tài khoản Facebook`, event.threadID, event.messageID) }
    const res = await axios.get(`https://hoangdogianguyenofficial.herokuapp.com/info?uid=${args[0]}&apikey=${apikey}`);  
    var gender = res.data.data.gender == 'male' ? "Nam" : res.data.data.gender == 'female' ? "Nữ" : "Không công khai";
    var birthday = res.data.data.birthday ? `${res.data.data.birthday}` : "Không công khai";
    var love = res.data.data.relationship_status ? `${res.data.data.relationship_status}` : "Độc Thân"
    var hometown = res.data.data.hometown ? `${res.data.data.hometown}` : "Không công khai"
    var location = res.data.data.location ? `${res.data.data.location}` : "Không công khai"
    var url_profile = res.data.data.url_profile  ? `${res.data.data.url_profile}` : `${url_profile}`
     var callback = () => api.sendMessage({body:`👤Tên: ${res.data.data.fullname}\n🔎UID: ${res.data.data.user_id}\n👀Người Theo Dõi: ${res.data.data.follow_user}\n🎎Giới tính: ${gender}\n🎂Sinh Nhật: ${birthday}\n❤️Mối quan hệ: ${love}\n🏠Sống tại: ${location}\n🌏Đến từ: ${hometown}\n📌URL cá nhân: ${url_profile}`,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${args[0]}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback());
    }
  }
}
}