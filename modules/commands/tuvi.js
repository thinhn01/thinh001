module.exports.config = {
	name: "tuvi",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "HĐGN",
	description: "Tử Vi",
	commandCategory: "game",
	dependencies: {},
	usages: "Năm sinh",
	cooldowns: 0
};


module.exports.run = async ({ api, event, args }) => {
const { threadID, messageID, senderID } = event;
const fs = require("fs")
const axios = require('axios')
if ( args.join() == "") { 

let path = __dirname + '/cache/tuvi.png';
    let getdata = (await axios.get(`https://i.imgur.com/x3h5aJ0.jpg`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
}


 let a = args.join(" ");
var msg = ""
var b = a.charCodeAt(a.length - 1).toString(10)
var nam = args[0]
var na = nam % 12
var n = nam % 5

var ti = "Trong số 12 con giáp, chuột được chọn và con vật tiên phong, dẫn đầu, bởi vậy những người thuộc tuổi này thường có tài năng lãnh đạo, quản lí rất tốt. Hơn nữa, những người tuổi Tý còn được mọi người ngưỡng mộ bởi sự thông minh, sáng tạo, nhanh nhẹn tháo vát của mình."
var suu = "Trong cuộc đua của 12 con giáp, trâu là con vật đạt vị trí số hai, đại diện cho sức mạnh về cả thể chất lẫn tinh thần. Bởi vậy những người tuổi Sửu đa số sống tự lập, trưởng thành sớm, có tính cách mạnh mẽ và kiên định. Người tuổi này có nhiều ước mơ, hoài bão, ý chí lớn, không ngại khó khăn, nguy hiểm."
var dan = "Tuổi Dần đại diện cho những người quyền lực, mạnh mẽ, năng động trong cuộc sống. Họ thích những công việc mạo hiểm, đem đến vinh quanh, thành công rực rỡ cho mình. Người tuổi này có tài lãnh đạo, luôn nhiệt tình giúp đỡ những người xung quanh và ra sức bảo vệ gia đình của mình."
var mao = "Tuổi Mão đại diện cho những con người thông minh, mưu trí, nhanh nhẹn và có con mắt tinh tế, nhìn xa trông rộng. Người tuổi này rất tốt bụng, nhiệt tình và luôn sẵn sàng giúp đỡ những người gặp khó khăn. Họ có khả năng thích nghi với hoàn cảnh, chịu đựng những áp lực của công việc, cuộc sống."
var thin = "Trong 12 con giáp, Rồng là con vật đại diện cho sức mạnh phi thường, thiêng liêng, được mọi người tôn kính. Những người tuổi Rồng vì thế mà thông minh sắc sảo, luôn đạt được nhiều thành công trong cuộc sống, có uy quyền, địa vị."
var ty = "Tuổi Tỵ là những người khôn ngoan, khéo léo và mạo hiểm. Họ giàu tình cảm, có đời sống nội tâm khá phong phú, lãng mạn và luôn khiến người khác bị thu hút bởi vẻ đẹp, sự uyển chuyển của mình."
var ngo = "Ngựa là con vật yêu thích cuộc sống tự do, hoang dã để được hòa mình vào thiên nhiên. Những người tuổi Ngọ vì thế mà rất năng động, nhiệt tình, thích những nơi đông người và đam mê khám phá những điều mới mẻ trong cuộc sống."
var mui = "Tuổi Mùi đại diện cho những người sống giàu tình cảm, nhân hậu, tốt bụng, luôn sẵn sàng giúp đỡ mọi người xung quanh. Đặc biệt, người tuổi này thông minh sắc sảo, tài trí hơn người, có con mắt nhìn xa trông rộng và khả năng phân tích nhạy bén."
var than = "Có thể nói rằng, Khỉ là con vật thông minh, khôn khéo nhất trong 12 con giáp. Bởi vậy mà những người tuổi Thân không những tài giỏi, thông minh, nhanh nhẹn mà còn giàu lòng vị tha, luôn sẵn sàng giúp đỡ những người gặp khó khăn."
var dau = "Trong số 12 con giáp, gà là con vật đại diện cho sự năng động, nhiệt tình và kiêu hãnh. Vì thế mà những người tuổi Dậu luôn luôn sôi nổi, yêu đời, tràn đầy năng lượng sống. Họ được mọi người yêu quý bởi lòng tốt bụng, tinh thần trách nhiệm và tính tình ngay thẳng."
var tuat = "Tuổi Tuất là những người nhân hậu, tốt bụng, sẵn sàng giúp đỡ mọi người xung quanh. Họ có thể vì người khác mà quên đi lợi ích của bản thân mình. Những người này coi trọng danh dự và chữ tín, một khi đã hứa, tuổi Tuất nhất định sẽ thực hiện."
var hoi = "Tuổi Hợi là những người giàu lòng trắc ẩn, nhân ái và yêu thương mọi người. Họ sống tự do, thoải mái và phóng khoáng, bởi vậy tuổi Hợi được mọi người xung quanh quý mến, tôn trọng. Nhờ vào tài năng và sự chăm chỉ của mình, những người này sớm xây dựng được một sự nghiệp vững chắc, ổn định."

var a1 = "https://i.imgur.com/FyKZfhF.jpg"


var a2 = "https://i.imgur.com/IU5Th1q.png"


var a3 = "https://i.imgur.com/LHzJz9v.jpg"


var a4 = "https://i.imgur.com/Ai1fL2M.jpg"


var a5 = "https://i.imgur.com/AasYJtF.jpg"


var a6 = "https://i.imgur.com/A7iXTxs.jpg"


var a7 = "https://i.imgur.com/CYQ6WDj.jpg"


var a8 = "https://i.imgur.com/L057NoA.jpg"


var a9 = "https://i.imgur.com/b88YQ7b.jpg"


var a10 = "https://i.imgur.com/v6dOf4I.jpg"


var a11 = "https://i.imgur.com/N1laF3p.jpg"


var a12 = "https://i.imgur.com/NzWMKEL.jpg"

let path = __dirname + '/cache/tuvi.png';



if ( b == 48 ) {
msg += "Canh "
}
else if ( b == 49 ) {
msg += "Tân "
}
else if ( b == 50 ) {
msg += "Nhâm "
}
else if ( b == 51 ) {
msg += "Quý "
}
else if ( b == 52 ) {
msg += "Giáp "
}
else if ( b == 53 ) {
msg += "Ất "
}
else if ( b == 54 ) {
msg += "Bính "
}
else if ( b == 55 ) {
msg += "Đinh "
}
else if ( b == 56 ) {
msg += "Mậu "
}
else if ( b == 57 ) {
msg += "Kỷ "
}
if ( na == 1 ) {
    let getdata = (await axios.get(`${a10}`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

msg += `Dậu

Năm hợp: Sửu, Tỵ
Năm khắc: Mẹo\n`
}
else if ( na == 2 ) {
    let getdata = (await axios.get(`${a11}`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

msg += `Tuất

Năm hợp: Dần, Ngọ
Năm khắc: Thìn\n`
}
else if ( na == 3 ) {
    let getdata = (await axios.get(`${a12}`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

msg += `Hợi

Năm hợp: Mẹo, Mùi
Năm khắc: Tỵ\n`
}
else if ( na == 4 ) {
    let getdata = (await axios.get(`${a1}`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

msg += `Tý

Năm hợp: Thìn, Thân
Năm khắc: Ngọ\n`
}
else if ( na == 5 ) {
    let getdata = (await axios.get(`${a2}`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

msg += `Sửu

Năm hợp: Tỵ, Dậu
Năm khắc: Mùi\n`
}
else if ( na == 6 ) {
    let getdata = (await axios.get(`${a3}`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

msg += `Dần

Năm hợp: Ngọ, Tuất
Năm khắc: Thân\n` 
}
else if ( na == 7 ) {
    let getdata = (await axios.get(`${a4}`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

msg += `Mão

Năm hợp: Mùi, Hợi
Năm khắc: Dậu\n`
}
else if ( na == 8 ) {
    let getdata = (await axios.get(`${a5}`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

msg += `Thìn 

Năm hợp: Thân, Tý
Năm khắc: Tuất\n` 
}
else if ( na == 9 ) {
    let getdata = (await axios.get(`${a6}`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

msg += `Tỵ 

Năm hợp: Dậu, Sửu
Năm khắc: Hợi\n`
}
else if ( na == 10 ) {
    let getdata = (await axios.get(`${a7}`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

msg += `Ngọ 

Năm hợp: Tuất, Dần
Năm khắc: Tí\n`
}
else if ( na == 11 ) {

    let getdata = (await axios.get(`${a8}`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

msg += `Mùi 

Năm hợp: Hợi, Mẹo
Năm khắc: Sửu\n`
}
else if ( na == 0 ) {
    let getdata = (await axios.get(`${a9}`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

msg += `Thân

Năm hợp: Tý Thìn
Năm khắc: Dần\n`
}
if ( n == 2 ) {
msg += "\nMạng: Kim \n\n"
}
else if ( n == 3 ) {
msg += "\nMạng: Mộc\n\n"
}
else if ( n == 4 ) {
msg += "\nMạng: Thủy\n\n"
}
else if ( n == 1 ) {
msg += "\nMạng: Thổ\n\n"
}
else if ( n == 0 ) {
msg += "\nMạng: Hỏa\n\n"
}

if ( na == 1 ) {
msg +=  dau
}
else if ( na == 2 ) {
msg +=  tuat
}
else if ( na == 3 ) {
msg +=  hoi
}
else if ( na == 4 ) {
msg +=  ty
}
else if ( na == 5 ) {
msg +=  suu
}
else if ( na == 6 ) {
msg +=  dan
}
else if ( na == 7 ) {
msg +=  mao
}
else if ( na == 8 ) {
msg +=  thin
}
else if ( na == 9 ) {
msg += ty
}
else if ( na == 10 ) {
msg += ngo
}
else if ( na == 11 ) {
msg +=  mui
}
else if ( na == 0 ) {
msg +=  than
} 
api.sendMessage({body: "Năm sinh " + nam + " - " + msg, attachment: fs.createReadStream(path) }
,event.threadID,() => fs.unlinkSync(path) ,event.messageID)
};