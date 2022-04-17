const fs = require("fs");
module.exports.config = {
	name: "tkbvip",
    version: "1.1.8",
	hasPermssion: 0,
	credits: "tdunguwu", 
	description: "xem tkb thoai",
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
							body: "[ Thời Khóa Biểu ]" +
                            "\n === Sáng ===" +
                            "\n- Sinh Học" +
                            "\n- Vật lí" +
                            "\n- Tiếng Anh" +
                            "\n=== Chiều ===" +
                            "\n- Ngữ Văn" +
                            "\n- Ngữ Văn"
                            , 
							
						}, event.threadID, event.messageID);
						break;
					case "2":
					api.unsendMessage(handleReply.messageID);
						api.sendMessage({
							body: "[ Thời Khóa Biểu ]" +
                            "\n === Sáng ===" +
                            "\n- Tiếng Anh" +
                            "\n- Sinh Học" +
                            "\n- Hóa Học" +
                            "\n=== Chiều ===" +
                            "\n- Công Nghệ" +
                            "\n- Tin Học"
                            , 
						
						}, event.threadID, event.messageID);
						break;
					case "3":
					api.unsendMessage(handleReply.messageID);
						api.sendMessage({
							body: "[ Thời Khóa Biểu ]" +
                            "\n === Sáng ===" +
                            "\n- Địa Lý" +
                            "\n- Tiếng Anh" +
                            "\n=== Chiều ===" +
                            "\n- Tin Học" + 
                            "\n- Ngữ Văn" +
                            "\n- Thể Dục"
                            , 
						
						}, event.threadID, event.messageID); 
						break;
					case "4":
					api.unsendMessage(handleReply.messageID);
						api.sendMessage({
							body: "[ Thời Khóa Biểu ]" +
                            "\n === Sáng ===" +
                            "\n- Ngủ" +
                            "\n- Giáo Dục Công Dân" +
                            "\n- Hóa Học" +
                            "\n === Chiều ===" +
                            "\n có tiết loz nào đâu mà học=))",
                           
						
						}, event.threadID, event.messageID); 
						break;
					case "5":
					api.unsendMessage(handleReply.messageID);
						api.sendMessage({
							body: "[ Thời Khóa Biểu ]" +
                            "\n === Sáng ===" +
                            "\n- Địa Lý" +
                            "\n- Toán x2" +
                            "\n === Chiều ===" +
                            "\n khỏe re à tại có loz gì học đâu=)))", 
				
						}, event.threadID, event.messageID); 
						break;
					case "6":
					api.unsendMessage(handleReply.messageID);
						api.sendMessage({
							body: "[ Thời Khóa Biểu ]" +
                            "\n === Sáng ===" +
                            "\n- Toán" +
                            "\n- Toán" +
                            "\n- Vật lí" +
                            "\n- Gặp nhau cuối tuần =)))" +
                            "\n === Chiều ===" +
                            "\n- GDQP-AN" +
                            "\n- Thể Dục" +
                            "\n Lịch Sử",
						
						}, event.threadID, event.messageID); 
						break;
					case "7":
					api.unsendMessage(handleReply.messageID);
						api.sendMessage({
							body: "Đumamay chủ nhật thì phải để người ta nghỉ chứ học loz gì =)???", 
					
						}, event.threadID, event.messageID); 
						break;
					case "8":
					api.unsendMessage(handleReply.messageID);
						api.sendMessage({
							body: "ALL TKB của tuần đâu uwu", 
						attachment: fs.createReadStream(__dirname + `/cache/TKB.png`)
						}, event.threadID, event.messageID); 
						break;
					
					default:
				const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("CHỌN SỐ ĐI ĐỊC !!!", event.threadID, event.messageID);
            	if (choose > 8 || choose < 1) return api.sendMessage("bạn ơi bạn chọn sai rồi kìa chỉ có từ 1 -> 8 THUIII.", event.threadID, event.messageID); 
		    
			}
		}
	}
}

module.exports.run = async ({ api, event, handleReply }) => {
	const fs = require("fs");
	const { threadID, messageID, senderID } = event;
	return api.sendMessage({ body: "==== Tkb của tdung ====" +
                "\n1. Thứ 2" +
                "\n2. Thứ 3" +
                "\n3. Thứ 4" +
                "\n4. Thứ 5" +
                "\n5. Thứ 6" +
                "\n6. Thứ 7" +
                "\n7. chủ nhật uwu" +
                "\n8. All" +
                "\n\nReply tin nhắn theo số để xem chi tiết❤"
            }, event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
        })  
    })
}