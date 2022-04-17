const fs = require("fs");
module.exports.config = {
	name: "nguyentohoahoc",
    version: "test",
	hasPermssion: 0,
	credits: "tdunguwu", 
	description: "Kiến thức hóa học đó XD",
	commandCategory: "Other",
	usages: "",
    cooldowns: 5, 
};

module.exports.handleReply = async ({ api, event, handleReply }) => {
const { threadID, messageID, senderID } = event;
    switch(handleReply.type) {
        case "choosee": {
            switch(event.body) {

					case "1":
						api.unsendMessage(handleReply.messageID);
						api.sendMessage({
							body: "[ Thành Phần Nguyên tử ]" +
                            "\n === K/n ===" +
                            "\n- Các chất đều được cấu tạo từ những hạt cực kì nhỏ bé không thể phân chia được nữa, gọi là nguyên tử" +
                            "\n == Cấu Tạo ==" +
                            "\n- Hạt nhân nguyên tử được tạo thành bởi các p và n. Vì Trong n không mang điện, số p trong hạt nhân phải bằng số điện tích dương của hạt nhân và bằng số electron quay xung quanh hạt nhân" +
                            "\n === Kích Thước ===" +
                            "\n- đường kính khoảng 10^-10m" +
                            "\n- notic Để biểu thị kích thước nguyên tử, người ta dùng đơn vị nanomet hay viết tắt là nm"
                            , 
						
						}, event.threadID, event.messageID);
						break;
					case "2":
					api.unsendMessage(handleReply.messageID);
						api.sendMessage({
							body: "[ Hạt Nhân Nguyên Tử ]" +
                            "\n === Điện tích hạt nhân ===" +
                            "\n- p mang điện tích 1+, nếu hạt nhân có Z p thì điện tích của hạt nhân bằng Z+ và số đơn vị điện tích hạt nhân bằng Z" +
                            "\n- Số đv điện tích hạt nhân Z = p = e" +
                            "\n=== Số Khối ===" +
                            "\n- ký hiệu của số khối là: A" +
                            "\n- Công thức: A = Z + N"
                            , 
						
						}, event.threadID, event.messageID);
						break;
					case "3":
					api.unsendMessage(handleReply.messageID);
						api.sendMessage({
							body: "[ Nguyên Tố Hóa Học ]" +
                            "\n === K/n ===" +
                            "\n- Tính chất hóa học của nguyên tố phụ thuộc vào số e của nguyên tử nguyên tố đó do đó phụ thuộc vào số đơn vị điện tích hạt nhân Z của nguyên tử" +
                            "\n- Nếu các nguyên tử có cùng số đơn vị điện tích hạt nhân Z thì có cùng tính chất hóa học" +
                            "\n === Số Hiệu Nguyên Tử ===" +
                            "\n- Số đơn vị điện tích hạt nhân nguyên tử của 1 nguyên tố được gọi là số hiệu nguyên tử của nguyên tố đó, kí hiệu Z" + 
                            "\n === Kí hiệu nguyên tử ===" +
                            "\n- Số nguyên tử hoặc số proton, số hiệu nguyên tử (ký hiệu Z) của một nguyên tố hóa học là số proton được tìm thấy trong hạt nhân của một nguyên tử. Nó giống hệt với số điện tích của hạt nhân. Số nguyên tử xác định duy nhất một nguyên tố hóa học."
                            , 
						attachment: fs.createReadStream(__dirname + `/cache/khnt.png`)
						}, event.threadID, event.messageID); 
						break;
					case "4":
					api.unsendMessage(handleReply.messageID);
						api.sendMessage({
							body: "[ Đồng Vị ]" +
                            "\n === K/n ===" +
                            "\n- Các đồng vị của cùng một nguyên tố là những nguyên tử có cùng số proton nhưng khác nhau về số nơtron, do đó có số khối A khác nhau." +
                            "\n- Phần lớn các nguyên tố hóa học là hỗn hợp của nhiều đồng vị. các đồng vị của cùng một nguyên tố hóa học có số nơtron trong hạt nhân khác nhau, nên có một số tính chất vật lí khác nhau." 
                            ,
                           
						attachment: fs.createReadStream(__dirname + `/cache/đv.jpg`)
						}, event.threadID, event.messageID); 
						break;
					case "5":
					api.unsendMessage(handleReply.messageID);
						api.sendMessage({
							body: "[ Nguyên Tử Khối và Nguyên Tử Khối Trung Bình Của Các Nguyên Tố HH ]" +
                            "\n === NTK ===" +
                            "\n- Nguyên tử khối là khối lượng tương đối của nguyên tử." +
                            "\n- Nguyên tử khối của một nguyên tử cho biết khối lượng của nguyên tử đó nặng gấp bao nhiêu lần đơn vị khối lượng nguyên tử." +
                            "\n- Khối lượng của nguyên tử bằng tổng khối lượng của proton, notron và electron trong nguyên tử đó. Proton và nơ tron đều có khối lượng xấp xỉ 1u còn electron có khối lượng nhỏ hơn rất nhiều, khoảng 0,00055u. Do đó, có thể coi nguyên tử khối xấp xỉ số khối của hạt nhân." +
                            "\n === NTKTB ===" +
                            "\n- Hầu hết các nguyên tố hóa học là hỗn hợp của nhiều đồng vị với tỉ lệ phần trăm số nguyên tử xác định =>  nguyên tử khối của các nguyên tố có nhiều đồng vị là nguyên tử khối trung bình của hỗn hợp các đồng vị có tính đến tỉ lệ phần trăm số nguyên tử tương ứng. ", 
				attachment: fs.createReadStream(__dirname + `/cache/ntkvntktb.png`)
						}, event.threadID, event.messageID); 
						break;
					case "6":
					api.unsendMessage(handleReply.messageID);
						api.sendMessage({
							body: "[ Lớp E Và Phân Lớp E ]" +
                            "\n === Lớp electron ===" +
                            "\n- Trong nguyên tử, các e được sắp xếp thành từng lớp, các lớp được sắp xếp từ gần hạt nhân ra ngoài. Các e có năng lượng gần bằng nhau được sắp xếp trên cùng 1 lớp." +
                            "\n- Những e ở lớp trong liên kết với hạt nhân bền chặt hơn những e ở lớp ngoài. Năng lượng của e lớp trong thấp hơn năng lượng e ở lớp ngoài. Năng lượng của e chủ yếu phụ thuộc vào số thứ tự của lớp" +
                            "\n- Thứ tự các lớp e được ghi bằng các số nguyên n = 1,2,3….,7" +
                            "\n- n = 1  2  3  4  5  6   7 tương ứng tên lớp: K  L  M  N  O  P  Q" +
                            "Lớp K có n = 1 là lớp gần hạt nhân nhất, lớp Q có n=7  là lớp xa hạt nhân nhất." +
                            "\n === Phân Lớp E ===" 
                            ,
						attachment: fs.createReadStream(__dirname + `/cache/plope.png`)
						}, event.threadID, event.messageID); 
						break;
					case "7":
					api.unsendMessage(handleReply.messageID);
						api.sendMessage({
							body: "[ Thứ Tự Mức Năng Lượng ]" +
                            "\n- Trật tự các mức năng lượng tăng dần theo trình tự sau: 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f 5d 6p 7s 5f 6d… - Từ trình tự mức năng lượng AO trên cho thấy khi điện tích hạt nhân tăng có sự chèn mức năng lượng, mức 4s trở nên thấp hơn 3d, mức 5s thấp hơn 4d, 6s thấp hơn 4f, 5d, ..." + 
                            "\n === Nguyên Tắc Xắp Sếp ===" +
                            "\n- Các nguyên tố sẽ được sắp xếp từ trái qua phải,từ trên xuống dưới theo quy luật thứ tự tăng dần số hiệu nguyên tử. Đây là nguyên tắc sắp xếp trong bảng tuần hoàn các nguyên tố hóa học. Các nguyên tố trong bảng tuần hoàn hóa học sẽ được xếp theo chiều tăng dần của điện tích hạt nhân."
                            , 
					attachment: fs.createReadStream(__dirname + `/cache/bth.png`)
						}, event.threadID, event.messageID); 
						break;
					case "8":
					api.unsendMessage(handleReply.messageID);
						api.sendMessage({
							body:"[ Cấu Hình E Nguyên Tử ]" +
                            "\n === K/n ===" +
                            "\n- Cấu hình electron, hay cấu hình điện tử, nguyên tử cho biết sự phân bố các electron trong lớp vỏ nguyên tử ở các trạng thái năng lượng khác nhau hay ở các vùng hiện diện của chúng" +
                            "\n == Các bước viết cấu hình e ==" +
                            "\n- B1: Xác định số e của nguyên tử (Z)." +
                            "\n- B2: Sắp xếp các e theo thứ tự tăng dần mức năng lượng" +
                            "\n- Ví Dụ: 1s2 2s2 2p6 3s2 3p6 4s2 3d10 ..." +
							"\n- Bước 3: Sắp xếp cấu hình e: theo thứ tự từng lớp (1→7), trong mỗi lớp theo thứ tự từng phân lớp (s→p→d→f)" +
							"\n- Ví Dụ: 1s2 2s2 2p 3s2 3p6 3d10 4s2"
							
							, 
						attachment: fs.createReadStream(__dirname + `/cache/20ngtd.jpg`)
						}, event.threadID, event.messageID); 
						break;
					case "9":
					api.unsendMessage(handleReply.messageID);
						api.sendMessage({
							body:"[ Nguyên Tắc Sắp Xếp ]" +
                            "\n1. Các Nguyên Tố Được Xếp Theo Chiều Tăng Dần Của Điện Tích Hạt Nhân Của Nguyên Tử" +
                            "\n2. Các Nguyên Tố Có Cùng Số Lớp E Được Xếp Thành 1 Hàng" +
							"\n3. Các Nguyên Tố Có Cùng Số E Hóa Trị Trong Nguyên Tử Như Nhau Được Xếp Thành 1 Cột" +
							"\n Bảng Các Nguyên Tố Được Sắp Xếp Theo Quy Tắc Trên Gọi Là Bảng Tuần Hoàn Các Nguyên Tố Hóa Học" 
							
							, 
						//attachment: fs.createReadStream(__dirname + `/cache/20ngtd.jpg`)
						}, event.threadID, event.messageID); 
						break;
						case "10":
					api.unsendMessage(handleReply.messageID);
						api.sendMessage({
							body:"[ Ô Nguyên Tố ]" +
							"\n- Mỗi nguyên tố hóa học được xếp vào một ô của bảng gọi là ô nguyên tố." +
							"\n- Số thứ tự của ô nguyên tố đúng bằng số hiệu nguyên tử của nguyên tố đó."
							, 
						attachment: fs.createReadStream(__dirname + `/cache/ont.png`)
						}, event.threadID, event.messageID); 
						break;
						case "11":
					api.unsendMessage(handleReply.messageID);
						api.sendMessage({
							body:"[ Chu Kì ]" +
							"\n === K/n ===" +
							"\n- Chu kì là dãy các nguyên tố mà nguyên tử của chúng có cùng số lớp electron, được sắp xếp theo chiều điện tích hạt nhân tăng dần." +
							"\n === Chu Kì ===" +
							"\n- Chu kì 1: gồm 2 nguyên tố H (Z=1) đến He (Z=2)." +
							"\n- Chu kì 2: gồm 8 nguyên tố Li(Z=3) đến Ne(Z=10)." +
							"\n- Chu kì 3: gồm 8 nguyên tố Na(Z=11) đến Ar(Z=18)." +
							"\n- Chu kì 4: gồm 18 nguyên tố K(Z=19) đến Kr(Z=36)." +
							"\n- Chu kì 5: gồm 18 nguyên tố Rb(Z=37) đến Xe(Z=54)" +
							"\n- Chu kì 6: gồm 32 nguyên tố Cs(Z=55) đến Rn(Z=86)." +
							"\n- Chu kì 7: Bắt đầu từ nguyên tố Fr(Z=87) đến nguyên tố có Z=110, đây là một chu kì chưa hoàn thành."  +
							"\n === Phân Loại ===" +
							"\n- Chu kì 1,2,3 là các chu kì nhỏ." +
							"\n- Chu kì 4,5,6,7 là các chu kì lớn. " +
							"\n === Nhận Xét ===" +
							"\n- Các nguyên tố trong cùng chu kì có số lớp electron bằng nhau và bằng số thứ tự của chu kì." +
							"\n- Mở đầu chu kì là kim loại kiềm, gần cuối chu kì là halogen (trừ chu kì 1); cuối chu kì là khí hiếm" +
							"\n- 2 hàng cuối bảng là 2 họ nguyên tố có cấu hình electron đặc biệt: Lantan và Actini." +
							"\n === BỔ SUNG ===" +
							"\n- Họ Lantan: gồm 14 nguyên tố đứng sau La(Z=57) thuộc chu kì 6." +
							"\n- Họ Actini: gồm 14 nguyên tố sau Ac(Z=89) thuộc chu kì 7."
							, 
						//attachment: fs.createReadStream(__dirname + `/cache/ont.png`)
						}, event.threadID, event.messageID); 
						break;
						case "12":
					api.unsendMessage(handleReply.messageID);
						api.sendMessage({
							body:"[ Nhóm Nguyên Tố ]" +
							"\n === K/n ===" +
							"\n- Nhóm nguyên tố là tập hợp các nguyên tố mà nguyên tử có cấu hình electron tương tự nhau, do đó có tính chất hóa học gần giống nhau và được sắp xếp thành một cột." +
							"\n === Phân Loại ===" +
							"\n- Bảng tuần hoàn chia thành 8 nhóm A (đánh số từ IA đến VIIIA) và 8 nhóm B (đánh số từ IB đến VIIIB). Mỗi nhóm là một cột, riêng nhóm VIIIB gồm 3 cột" +
							"\n- Nguyên tử các nguyên tố trong cùng một nhóm có số electron hóa trị bằng nhau và bằng số thứ tự của nhóm (trừ hai cột cuối của nhóm VIIIB)." +
							"\n === Nhóm A ===" +
							"\n- Nhóm A gồm 8 nhóm từ IA đến VIIIA." +
							"\n- Các nguyên tố nhóm A gồm nguyên tố s và nguyên tố p" +
							"\n+ Nguyên tố s: Nhóm IA (nhóm kim loại kiềm, trừ H) và nhóm IIA (kim loại kiềm thổ)." +
							"\n+ Nguyên tố p: Nhóm IIIA đến VIIIA (trừ He)." +
							"\n- STT nhóm = Số e lớp ngoài cùng = Số e hóa trị" +
							"\n+ Cấu hình electron hóa trị tổng quát của nhóm A:" +
							"\n⟶ns^a np^b" +
							"\n⟶ĐK:1≤a≤2;0≤b≤6" +
							"\n+ Số thứ tự của nhóm A=a+b" +
							"\n⟶  Nếu a+b≤3 ⇒ Kim loại"+ 
							"\n⟶ Nếu 5≤a+b≤7 ⇒ Phi kim"+
							"\n⟶  Nếu a+b=8 ⇒ Khí hiếm"+
							"\n=> Ví Dụ: Na(Z=11):1s2 2s2 2p6 3s1 ⇒ IA" +
							"\n=> Ví Dụ: O(Z=8):1s2 2s2 2p4 ⇒ VIA" +
							"\n === Nhóm B ===" +
							"\n- Nhóm B gồm 8 nhóm được đánh số từ IIIB đến VIIIB, rồi IB và IIB theo chiều từ trái sang phải trong bảng tuần hoàn." +
							"\n- Nhóm B chỉ gồm các nguyên tố của các chu kỳ lớn." +
							"\n- Nhóm B gồm các nguyên tố d và nguyên tố f (thuộc 2 hàng cuối bảng)."+
							"\n- STT nhóm = Số e lớp ngoài cùng = Số e hóa trị (Ngoại lệ: Số e hóa trị = 9, 10 thuộc nhóm VIIIB)" +
							"\n+ Cấu hình electron hóa trị của nguyên tố d:" +
							"\n⟶(n−1)d^a ns^b" +
							"\n⟶ ĐK: b=2 ; 1 ≤a ≤10" +
							"\n⟶  Nếu a+b <8 ⇒ STT nhóm = a+b" +
							"\n⟶  Nếu a+b= 8,9,10 ⇒ STT nhóm = 8" +
							"\n⟶  Nếu a+b>10 ⇒ STT nhóm = (a+b) −10"
							, 
						attachment: fs.createReadStream(__dirname + `/cache/bth.png`)
						}, event.threadID, event.messageID); 
						break;
						case "13":
					api.unsendMessage(handleReply.messageID);
						api.sendMessage({
							body: "[ SỰ BIẾN ĐỔI TUẦN HOÀN CẤU HÌNH ELECTRON NGUYÊN TỬ CỦA CÁC NGUYÊN TỐ ]" +
                            "\n === K/n ===" +
                            "\n- Từ bảng tuần hoàn các nguyên tố ta thấy, đầu chu kì nguyên tố có cấu hình electron là ns1, cuối mỗi chu kì nguyên tố có cấu hình electron là ns2np6 " +
                            "\n=> Cấu hình electron lớp ngoài cùng của nguyên tử các nguyên tố trong cùng một nhóm A được lặp đi lặp lại sau mỗi chu kì" +
                            "\n=> Chúng biến đổi một cách tuần hoàn." +
                            "\n=> Chính sự biến đổi tuần hoàn electron lớp ngoài cùng của nguyên tử các nguyên tố khi điện tích hạt nhân tăng dần là nguyên nhân của sự biến đổi tuần hoàn tính chất các nguyên tố." 
                            
                            , 
						
						}, event.threadID, event.messageID);
						break;
					default:
				const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("CHỌN SỐ ĐI ĐỊC !!!", event.threadID, event.messageID);
            	if (choose > 13 || choose < 1) return api.sendMessage("bạn ơi bạn chọn sai rồi kìa chỉ có từ 1 -> 8 THUIII.", event.threadID, event.messageID); 
		    
			}
		}
	}
}

module.exports.run = async ({ api, event, handleReply }) => {
	const fs = require("fs");
	const { threadID, messageID, senderID } = event;
	return api.sendMessage({ body: "====== Hóa ======" +
                "\n1. Thành Phần Nguyên Tử" +
                "\n2. Hạt Nhân Nguyên Tử" +
                "\n3. Nguyên Tố Hóa Học" +
                "\n4. Đồng Vị" +
                "\n5. Nguyên Tử Khối và Nguyên Tử Khối Trung Bình Của Các Nguyên Tố HH" +
                "\n6. Lớp e và phân lớp e" +
                "\n7. Thứ Tự Mức Năng Lượng" +
                "\n8. Cấu Hình E Nguyên Tử" +
				"\n9. Nguyên tắc" +
				"\n10. Ô Nguyên Tố" +
				"\n11. Chu Kì" +
				"\n12. Nhóm Nguyên Tố" +
				"\n13. SỰ BIẾN ĐỔI TUẦN HOÀN CẤU HÌNH ELECTRON NGUYÊN TỬ CỦA CÁC NGUYÊN TỐ" +
                "\n\nReply tin nhắn theo số để xem chi tiết"
            }, event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
        })  
    })
}