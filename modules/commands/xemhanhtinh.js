module.exports.config = {
	name: "xemhanhtinh",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "HĐGN",
	description: "tên hành tinh",
	commandCategory: "Game",
	cooldowns: 5,
	dependencies: {}
};

module.exports.run = async ({ api, event, args }) => {
const { threadID, messageID, senderID } = event;
const fs = require("fs")
const axios = require('axios')
let path = __dirname + '/cache/earth.png';
if ( args.join() == "") { 
    let getdata = (await axios.get(`https://i.imgur.com/1tgtzlG.jpg`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

api.sendMessage({
body: `Nhập ${global.config.PREFIX}xemhanhtinh [Tên]
Hiện tại có
☆1 Ngôi sao:
Sun - Mặt trời
☆9 Hành Tinh:
Mecury - Sao thủy
Venus - Sao kim
Earth - Trái đất
Moon - Mặt trăng
Mars - Sao hỏa
Jupiter - Sao thổ
Saturn - Sao mộc
Uranus - Sao thiên vương
Neptune - Sao hải vương
☆5 Hành Tinh Lùn:
Ceres
Pluto
Haumea
Makemake
Eris`, attachment: fs.createReadStream(path)
},threadID,messageID); }


switch (args[0]) {
case "earth": {
    let getdata = (await axios.get(`https://i.imgur.com/GfaHSgv.jpg`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
return api.sendMessage({
body: `Trái đất - Earth
Bán trục lớn 149 597 887kmhay 1,00000011AU.

Chu vi 940 × 106kmhay 6,283 AU.
Độ lệch tâm 0,01671022
Chu kỳ 365,25696ngàyhay 1,0000191năm.

Chu kỳ biểu kiến không áp dụng.
Vận tốc quỹ đạo:
-trung bình 29,783km/s.
-tối đa 30,287km/s.
-tối thiểu 29,291km/s.
Áp suấtkhí quyển tại bề mặt 101,3kPa
Cấu tạo củakhí quyển
Nitơ (N2) 78,08%
Oxy(O2) 20,95%
Argon (Ar) 0,93%
Carbon dioxide (CO2) 0,038%
Hơi nước (H2O) 1% (thay đổi theo điều kiệnthời tiết)`,
attachment: fs.createReadStream(path)
},threadID,messageID);
}

case "mecury": {
    let getdata = (await axios.get(`https://i.imgur.com/2xY9VKp.jpg`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
return api.sendMessage({
body: `Sao Thủy - Mecury
Bán kính trung bình 2.439,7 ± 1,0 km2 hay 0,3829 Trái Đất

Hình cầu dẹt
Diện tích bề mặt 7,48×107km2 hay0,147 Trái Đất

Thể tích 6,083×1010km3 hay 0,056 Trái Đất

Khối lượng 3,3022×1023kg hay 0,055 Trái Đất

Áp suất khí quyểnbề măt rất nhỏ
Thành phần khí quyển
42% Phân tửOxy 
29,0%Natri
22,0%Hiđrô 
6,0%Heli
0,5%Kali 
Rất ítAgon,Nitơ,Cacbon dioxide,Hơi nước,Xenon,KryptonvàNeon

`,
attachment: fs.createReadStream(path)
},threadID,messageID);
}


case "venus": {
    let getdata = (await axios.get(`https://i.imgur.com/u6oDbXc.jpg`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
return api.sendMessage({
body: `Sao Kim - Venus
Bán kính trung bình

6.051,8 ± 1,0km hay 0,9499 Trái Đất

Hình cầu dẹt
Diện tích bề mặt 4,60×108km hay 20,902 Trái Đất

Thể tích 9,28×1011km3 hay 0,866 Trái Đất

Khối lượng 4,8685×1024kg hay 0,815 Trái Đất

Áp suất khí quyểnbề mặt 92bar(9,2MPa)
Thành phần khí quyển

~96,5%CO2
~3,5%N2
0,015%SO2
0,007%Ar
0,002%hơi nước
0,0017%CO
0,0012%He
0,0007%Ne 
rất ítOCS 
rất ítHCl
rất ítHF

`,
attachment: fs.createReadStream(path)
},threadID,messageID);
}

case "mars": {
    let getdata = (await axios.get(`https://i.imgur.com/E1gz2F5.jpg`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
return api.sendMessage({
body: `Sao Hỏa - Mars
Bán kínhXích đạo 3.396,2 ± 0,1 km hay 0,533 Trái Đất
Bán kínhcực 3.376,2 ± 0,1 km
Hình cầu dẹt 0,005 89 ± 0,000 15
Diện tích bề mặt 144.798.500km2 hay 0,284 Trái Đất
Thể tích 1,6318×1011km3 hay 0,151 Trái Đất
Khối lượng 6,4185×1023kg hay 0,107 Trái Đất
Áp suất khí quyểnbề mặt 0,636 (0,4–0,87)kPa
Thành phần khí quyển(tỷ lệ mol)
95,32%Carbon dioxide
2,7%Nitrogen
1,6%Argon
0,13%Oxygen
0,08%Carbon monoxide
210ppmhơi nước
100 ppmNitơ monoxide
15 ppmHydro
2,5 ppmNeon
850ppbHDO
300 ppbKrypton
130 ppbfomanđêhít
80 ppbXenon
30 ppbOzone
18 ppbHydro peroxide
10 ppbMetan`,
attachment: fs.createReadStream(path)
},threadID,messageID);
}


case "jupiter": {
    let getdata = (await axios.get(`https://i.imgur.com/17Q20HE.jpg`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
return api.sendMessage({
body: `Sao Mộc - Jupiter
Bán kính trung bình 69.911 ± 6km
Bán kínhXích đạo 71.492 ± 4 km hay 11,209Trái Đất

Bán kínhcực 66.854 ± 10 km hay 10,517 Trái Đất

Hình cầu dẹt 0,06487 ± 0,00015
Diện tích bề mặt 6,1419×1010km2 hay 121,9 Trái Đất
Thể tích 1,4313×1015km3 hay 1321,3 Trái Đất

Khối lượng 1,8986×1027kg hay 317,8 Trái Đất hay 1/1047 Mặt Trời

Áp suất khí quyểnbề mặt 20–200kPa(lớp mây)
Biên độ cao 27 km
Thành phần khí quyển
89,8±2,0% hydro(H2)
10,2±2,0% heli
~0,3% methan
~0,026% amonia
~0,003% hydro deuteri(HD)
0,0006% ethan
0,0004% nước
Băng:amonia 
nước 
amoni hyđro sulfit(NH4SH)`,
attachment: fs.createReadStream(path)
},threadID,messageID);
}

case "saturn": {
    let getdata = (await axios.get(`https://i.imgur.com/cU0BBza.jpg`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
return api.sendMessage({
body: `Sao Thổ - Saturn
Bán kínhXích đạo

60.268 ± 4 km hay 9,4492 Trái Đất

Bán kínhcực 54364 ± 10 km hay 8,5521 Trái Đất

Hình cầu dẹt 0,09796 ± 0,00018 
Diện tích bề mặt 4,27×1010km² hay 83,703 Trái Đất

Thể tích 8,2713×1014km3 hay 763,59 Trái Đất

Khối lượng 5,6846×1026kg hay 95,152 Trái Đất

Biên độ cao59,5 km
Thành phần khí quyển
~96%Hiđrô(H2)
~3%Heli
~0.4%Mêtan
~0.01%Amonia
~0.01%Hydrogen deuteride(HD)
0.0007%Êtan
Băng:
Amonia
Nước
Amoni hydrosulfide(NH4SH)`,
attachment: fs.createReadStream(path)
},threadID,messageID);
}
case "uranus": {
    let getdata = (await axios.get(`https://i.imgur.com/D6kgar7.jpg`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
return api.sendMessage({
body: `Sao Thiên Vương - Uranus
Bán kínhXích đạo 25.559 ± 4 km hay 4,007 Trái Đất
Bán kínhcực 24.973 ± 20 km hay 3,929 Trái Đất
Hình cầu dẹt 0,0229 ± 0,0008
Chu vi 159.354,1 km
Diện tích bề mặt 8,1156×109km2 hay 15,91 Trái Đất
Thể tích 6,833×1013km3
63,086 Trái Đất
Khối lượng(8,6810 ± 0,0013)×1025kg hay14,536 Trái Đất
Biên độ cao 27,7 km
Thành phần khí quyển(Dưới 1,3bar)
83±3%Hiđrô(H2)
15±3%Heli
2,3%Mêtan
0,009% Hydrogen deuteride (0,007– HD (0,015%) )
Băng: Amonia
Nước 
Amonium hydrosulfide(NH4SH)
Mêtan(CH4)`,
attachment: fs.createReadStream(path)
},threadID,messageID);
}
case "neptune": {
    let getdata = (await axios.get(`https://i.imgur.com/SaIbQ7c.jpg`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
return api.sendMessage({
body: `Sao Hải Vương - Neptune
Bán kínhXích đạo 24.764 ± 15 km hay 3,883 Trái Đất
Bán kínhcực 24.341 ± 30 km hay 3,829 Trái Đất
Hình cầu dẹt 0,0171 ± 0,0013
Biên độ cao 19,7 ± 0,6 km
Thành phần khí quyển
80±3.2% Hydro(H2)
19±3.2% Heli(He)
1.5±0.5% Mêtan(CH4)
~0.019%Hydrogen deuteride(HD)
~0.00015%Êtan(C2H6)

Băng:
Amonia(NH3)
Nước(H2O)
Amoni hydrosulfide(NH4SH)
Mêtan (?)`,
attachment: fs.createReadStream(path)
},threadID,messageID);
}

case "sun": {
    let getdata = (await axios.get(`https://i.imgur.com/bX7qcon.jpg`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
return api.sendMessage({
body: `Mặt Trời - Sun
Đường kính trung bình 1,392 ×106km hay 109 lần Trái Đất
Độ dẹt 9×10-6
Diện tíchbề mặt 6,0877 ×1012km²
(11.900 lần Trái Đất)
Thể tích 1,4122 ×1018km³ (1.300.000 lần Trái Đất)
Khối lượng1,9891 ×1030kg 332.946 lần Trái Đất)
Thành phần
Hiđrô 73,46%
Heli 24,85%
Ôxy 0,77%
Cacbon 0,29%
Sắt 0,16%
Lưu huỳnh 0,12%
Neon 0,12%
Nitơ 0,09%
Silic 0,07%
Magiê 0,05%`,
attachment: fs.createReadStream(path)
},threadID,messageID);
}


case "moon": {
    let getdata = (await axios.get(`https://i.imgur.com/IRQu9AE.jpg`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
return api.sendMessage({
body: `Mặt Trăng - Moon
Bán trục lớn 384.400km(0,0026AU)
Chu vi quỹ đạo 2.413.402 km (0,016 AU)

Đặc điểmkhí quyển
Áp suất khí quyển 3 × 10-13kPa
Heli 25%
Neon 25%
Hiđrô 23%
Agon 20%
Mêtan
Amoniac
Điôxít cacbon rất ít`,
attachment: fs.createReadStream(path)
},threadID,messageID);
}

case "ceres": {
    let getdata = (await axios.get(`https://i.imgur.com/M1X2TSh.jpg`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
return api.sendMessage({
body: `HÀNH TINH LÙN
Ceres(tiếng Latin:Cerēs, còn gọisao Cốc ThầnhayCốc Thần Tinh), làhành tinh lùnnhỏ nhất được biết trongHệ Mặt Trờivà là hành tinh lùn duy nhất trongvành đai tiểu hành tinhchính ở khoảng giữaSao MộcvàSao Hỏa. Hành tinh lùn này đượcGiuseppe Piazziphát hiện vào ngày 1 tháng 1 năm 1801và được đặt tên theonữ thần Hy LạpCeres– nữ thần của cây cỏ, mùa màng và tình mẫu tử. Trong một nửa thế kỷ nó được cho làhành tinhthứ 8.

Bán kínhXích đạo 487,3 ± 1,8 km

Bán kínhcực454,7 ± 1,6 km

Khối lượng9,43 ± 0,07×1020kg`,
attachment: fs.createReadStream(path)
},threadID,messageID);
}

case "pluto": {
    let getdata = (await axios.get(`https://i.imgur.com/JCm8MbK.jpg`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
return api.sendMessage({
body: `HÀNH TINH LÙN
Sao Diêm VươnghayDiêm Vương tinh(chữ Hán: 閻王星), cònđược định danh hình thứclà134340 
Pluto(từ tiếng La tinh: Plūto, tiếng Hy Lạp:Πλούτων), làhành tinh lùnnặng thứ hai đã được biết trongHệ Mặt Trời(sauEris) và làvật thể nặng thứ mườitrực tiếp quay quanhMặt Trời.

Khám phá bởi Clyde W. Tombaugh
Nơi khám phá Đài thiên văn Lowell
Ngày phát hiện 18 tháng 2 năm 1930
Bán kính trung bình 0.1868Trái Đất

Hình cầu dẹt <1%
Diện tích bề mặt 0.035 Trái Đất
Thể tích
Khối lượng 0.177Mặt Trăng

Áp suất khí quyểnbề mặt 1.0Pa(2015)
Thành phần khí quyển Nitrogen,methane,carbon monoxit`,
attachment: fs.createReadStream(path)
},threadID,messageID);
}

case "haumea": {
    let getdata = (await axios.get(`https://i.imgur.com/c1mJc9e.jpg`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
return api.sendMessage({
body: `HÀNH TINH LÙN
Tên chỉ định(136108) Haumea
Phiên âm/haʊˈmeɪ.ə,
Đặt tên theo Haumea
Tên chỉ định thay thế 2003 EL61
Kích thước
≈ 2,100×1,680×1,074km (best fit assuming HE)××km(if ring does not contribute to brightness)

Bán kính trung bình
≈ (best fit) to(if ring contributes 5% of brightness)`,
attachment: fs.createReadStream(path)
},threadID,messageID);
}

case "makemake": {
    let getdata = (await axios.get(`https://i.imgur.com/vSGAqKy.jpg`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
return api.sendMessage({
body: `HÀNH TINH LÙN
Makemake([ˈmakeˈmake]), trang trọng gọi là(136472)Makemake, làhành tinh lùnlớn thứ 3 tronghệ Mặt Trờivà là một trong 2 vật thểvòng đai Kuiper(KBO). Đường kính của nó vào khoảng 2/3 củaSao Diêm Vương. Makemake có một vệ tinh đã được phát hiện. Nhiệt độ trung bình cực kì thấp (khoảng 30K) nghĩa rằng bề mặt của nó được bao bọc bởimêtan,êtanvà có thểnitơbăng.

Khám phá bởi
Michael E. BrownChad TrujilloDavid Rabinowitz

Ngày phát hiện 31 tháng 3 năm 2005`,
attachment: fs.createReadStream(path)
},threadID,messageID);
}

case "eris": {
    let getdata = (await axios.get(`https://i.imgur.com/lcXwLYs.png`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
return api.sendMessage({
body: `HÀNH TINH LÙN
136199 Eris(trước đây được gọi là2003 UB313) làhành tinh lùnlớn thứ hai trongThái Dương hệsauSao Diêm Vươngvà là thiên thể thứ 11 quay quanh Mặt Trời (tính theo khoảng cách, không kểvành đai Kuipervà cácvệ tinh tự nhiên).
Khám phá bởi

M. E. BrownC. A. TrujilloD. L. Rabinowitz[1]

Ngày phát hiện 5 tháng 1 năm 2005`,
attachment: fs.createReadStream(path)
},threadID,messageID);
}




}}