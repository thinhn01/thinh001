module.exports.config = {
	name: "hoangdao",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "HĐGN",
	description: "Cung hoàng đạo",
	commandCategory: "Game",
	usages: "",
	cooldowns: 0
};

module.exports.run = async ({ api, event, args }) => {
const { threadID, messageID } = event;
const fs = require("fs")
const axios = require('axios')
var d = parseInt(args[2])
var b = parseInt(args[0])
var c = parseInt(args[1])
var a = c*100 + b
const moment = require("moment-timezone");
  var time = moment.tz('Asia/Ho_Chi_Minh').format('YYYY');
let path = __dirname + '/cache/hoangdao.png';
  
if (args.join() == "") { 
 let getdata = (await axios.get(`https://i.imgur.com/rYmt2Y1.jpg`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

return api.sendMessage({body: `[!]Thiếu[!] Ngày Tháng Năm
Để xem thông tin về cung hoàng đạo`, attachment: fs.createReadStream(path)},threadID,messageID) }


else if ( args[2] > time ) return api.sendMessage("Mới từ tương lai đến à :)",threadID,messageID)

else if ( a < 101 || a > 1231 ) return api.sendMessage("Ngưng xộn lào :) ",threadID,messageID) 

else if ( c < 13 )
{ if ( d%4 == 0 && c == 2 && b > 29 ) return api.sendMessage("Ngưng xộn lào :) ",threadID,messageID) ;
 else if ( d%4 !== 0 && c == 2 && b > 28 ) return api.sendMessage("Ngưng xộn lào :) ",threadID,messageID) ;

else if ( c > 7 ) { c = c +1 }
else if ( c % 2 == 0 && b > 30 ) return api.sendMessage("Ngưng xộn lào :) ",threadID,messageID) ;
else if ( b > 31 ) return api.sendMessage("Ngưng xộn lào :) ",threadID,messageID) 
}


if ( 320 < a && a < 420) {
  let getdata = (await axios.get(`https://i.imgur.com/JhK14MU.jpg`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

return api.sendMessage({body: `♈Aries - Bạch Dương (21/3 - 19/4)

✡Tuyên ngôn:“Tôi là tôi - Còn cậu thì không phải (là tôi)!”
✔Điểm mạnh:Dám nghĩ dám làm, can đảm, cần cù, sức mạnh của ý chí cao
❌Điểm yếu:Thiếu kiên nhẫn, nóng nảy`, attachment: fs.createReadStream(path)},threadID,messageID); 
}


if ( 419 < a && a <  521 ) {
  let getdata = (await axios.get(`https://i.imgur.com/TYWfVXh.jpg`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));


return api.sendMessage({body:`♉Taurus - Kim Ngưu (20/4 - 20/5)

✡Tuyên ngôn:“Cái gì có thể mua được, cái đó là của tôi”
✔Điểm mạnh:Tự tin, kiên định, gọn gàng, tốt bụng, giàu năng lượng.
❌Điểm yếu:Cố chấp, thù dai
`, attachment: fs.createReadStream(path)},threadID,messageID); }


if (  520 < a  && a < 622 ) {
  let getdata = (await axios.get(`https://i.imgur.com/NTBWFMO.jpg`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

return api.sendMessage({body:`♊Gemini - Song Tử (21/5 - 21/6)

✡Tuyên ngôn:“Bạn thích vụ này rồi đấy, nói tiếp, nói tiếp đi!”
✔Điểm mạnh:Khéo léo, hài hước, thuyết phục
❌Điểm yếu:Dễ dàng thay đổi, hay lo lắng
`, attachment: fs.createReadStream(path)},threadID,messageID); }


if (  621 < a  && a < 723 ){
  let getdata = (await axios.get(`https://i.imgur.com/3tSVCwY.jpg`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

return api.sendMessage({body:`♋Cancer - Cự Giải (22/6 - 22/7)

✡Tuyên ngôn:“Thật đau lòng khi phải nói chia ly - Nên xin đừng cất bước ra đi!”
✔Điểm mạnh:Nhạy cảm, hợp lý, con người của gia đình
❌Điểm yếu:Ủ rũ, cáu kỉnh, độc đoán
`, attachment: fs.createReadStream(path)},threadID,messageID); }


if (722  < a && a < 823 ) { 
  let getdata = (await axios.get(`https://i.imgur.com/g7v9JbH.jpg`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

return api.sendMessage({body:`♌Leo - Sư Tử (23/7 - 22/8)

✡Tuyên ngôn:“Màn trình diễn phải tiếp tục - để tôi thể hiện chứ!”
✔Điểm mạnh:Tự tin, can đảm, quý phái, duy tâm
❌Điểm yếu:Bốc đồng, độc đoán, thích khoái lạc
`, attachment: fs.createReadStream(path)},threadID,messageID); }


if ( 822 < a && a < 923 ) {  let getdata = (await axios.get(`https://i.imgur.com/9DmgzLF.jpg`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

return api.sendMessage({body:`♍Virgo - Xử Nữ (23/8 - 22/9)

✡Tuyên ngôn:“Em vừa tạo một danh sách - và còn kiểm tra nó hai lần.”
✔Điểm mạnh:Gọn gàng, cần cù, điềm tĩnh, thông minh sắc sảo
❌Điểm yếu:Thích bắt lỗi, cầu toàn, quan tâm đến vật chất
`, attachment: fs.createReadStream(path)},threadID,messageID); }


if ( 922 < a && a < 1023 ) {  let getdata = (await axios.get(`https://i.imgur.com/8sl4UTe.jpg`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

return api.sendMessage({body:`♎Libra - Thiên Bình (23/9 - 22/10)

✡Tuyên ngôn:“Chúng mình cùng hội cùng thuyền - Nên cưa đôi nha!”
✔Điểm mạnh:Mang cảm giác về vẻ đẹp, khôn ngoan, hữu ích, thân thiện
❌Điểm yếu:Thất thường, thờ ơ, thích sự tiện lợi
`, attachment: fs.createReadStream(path)},threadID,messageID); }

if (  1022 < a && a < 1123 ) {  let getdata = (await axios.get(`https://i.imgur.com/16d17ZB.jpg`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

return api.sendMessage({body:`♏Scorpio - Bọ cạp (23/10 - 22/11) 

✡Tuyên ngôn:“Tin tôi đi - cậu không cần phải biết những bí mật của tôi đâu!”
✔Điểm mạnh:Quyết tâm, chăm chỉ
❌Điểm yếu:Thù hằn, thiếu tự chủ, bắt buộc, không tha thứ
`, attachment: fs.createReadStream(path)},threadID,messageID); }

if ( 1122 < a && a < 1222 ) {  let getdata = (await axios.get(`https://i.imgur.com/Dk2Zep0.jpg`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

return api.sendMessage({body:`♐Sagittarius - Nhân Mã (23/11 - 21/12)

✡Tuyên ngôn:“Tôi tin rằng tất cả chúng ta ở đây đều có vai trò gì đó!”
✔Điểm mạnh:Cởi mở, từ thiện, thích phiêu lưu, dám nghĩ dám làm
❌Điểm yếu:Bồn chồn, bướng bỉnh`
, attachment: fs.createReadStream(path)},threadID,messageID); } 

if ( 119 < a  && a < 219) {  let getdata = (await axios.get(`https://i.imgur.com/lk7E1Kf.jpg`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

return api.sendMessage({body:`♒Aquarius - Bảo Bình (20/1 - 18/2)

✡Tuyên ngôn:“Tôi là một cái vung tròn tròn úp trên một cái nồi méo méo trong một thế giới cong queo!”
✔Điểm mạnh:Tốt bụng, đáng tin, trung thành
❌Điểm yếu:Tức giận, vô cảm
`, attachment: fs.createReadStream(path)},threadID,messageID); } 

if ( 218 < a  && a < 321) {  let getdata = (await axios.get(`https://i.imgur.com/IHoEg61.jpg`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

return api.sendMessage({body:`♓Pisces - Song Ngư (19/2 - 20/3)

✡Tuyên ngôn:“Với một trái tim rộng mở, tôi bơi đến tận vùng nước sâu thẳm nhất của vạn vật!”
✔Điểm mạnh:Nhạy cảm, dễ tính, vui vẻ, ấm áp
❌Điểm yếu:Mơ mộng, bồn chồn, thiếu tự tin
`, attachment: fs.createReadStream(path)},threadID,messageID); } 

if ( 1221 < a  && a < 1232 || 100 < a  && a < 120 ) { 
  let getdata = (await axios.get(`https://i.imgur.com/3hzbIOt.jpg`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

return api.sendMessage({body:`♑Capricorn - Ma Kết (22/12 - 19/1)

✡Tuyên ngôn:“Đời bắt tôi đợi - Nhưng tôi là kẻ xứng đáng mà!”
✔Điểm mạnh:Kiên trì, quyết đoán, nghiêm túc, ít nói, sắc sảo
❌Điểm yếu:Khó tình, cố chấp, bi quan
`, attachment: fs.createReadStream(path)},threadID,messageID);} 
};