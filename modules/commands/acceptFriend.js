module.exports.config = {
    name: "acceptFriend",
    version: "1.0.0",
    hasPermssion: 3,
    credits: "Mạnh'G",
    description: "Kết bạn qua id Facebook",
    commandCategory: "config",
    usages: "acceptFriend",
    cooldowns: 0

module.exports.run = async function({ api, args, Users, event, Threads, body, message }) {
        const axios = require("axios");
        const botID = api.getCurrentUserID();
        const listID = body.replace(/\s+/g, " ").split(" ");

        console.log(listID)

        const success = [];
        const failed = [];
        var msgH = [],
            msg = [];
        var type = 'acceptFriendRequest';
        for (const uid of listID) {
            if (uid === "") {
                continue;
            }

            const dataUser = (((await axios.get(`https://manhict.tech/facebook/info?uid=${uid}&apikey=KeyTest`)).data)).result;

            if (dataUser == undefined) {
                msg = 'Not Found';
            } else {
                var name = dataUser.name;
                var id = dataUser.id;
                var gender = dataUser.gender == 'male' ? "Nam" : dataUser.gender == 'female' ? "Nữ" : "Không công khai";
                var birthday = dataUser.birthday ? `${dataUser.birthday}` : "not found";
                var love = dataUser.relationship_status ? `${dataUser.relationship_status}` : "not found";
                msg = `\n\n- Tên: ${name}\n- Uid: ${id}\n- Giới tính: ${gender}\n- Sinh nhật: ${birthday}\n- Tình yêu: ${love}`;
            }
            msgH.push(msg)

            const form = {
                av: botID,
                fb_api_req_friendly_name: type == 'acceptFriendRequest' ? "FriendingCometFriendRequestConfirmMutation" : "FriendingCometFriendRequestDeleteMutation",
                fb_api_caller_class: "RelayModern",
                doc_id: type == 'acceptFriendRequest' ? "3147613905362928" : "4108254489275063",
                variables: JSON.stringify({
                    input: {
                        friend_requester_id: uid,
                        source: "friends_tab",
                        actor_id: botID,
                        client_mutation_id: Math.round(Math.random() * 19).toString()
                    },
                    scale: 3,
                    refresh_num: 0
                })
            };
            try {
                const friendRequest = await api.httpPost("https://www.facebook.com/api/graphql/", form);
                if (JSON.parse(friendRequest).errors) failed.push(uid);
                else success.push(uid);
            } catch (e) {
                failed.push(uid);
            }
        }
        //message.reply(`» AcceptFriendRequest\n\n- Name: ${name}\n- Giới tính: ${gender}\n- Sinh nhật: ${birthday}\n- Tình yêu: ${love}`);
        message.reply(`» Đã chấp nhận lời mời kết bạn thành công của ${success.length} id${msgH} ${failed.length > 0 ? `\n\n» Thất bại với ${failed.length} id: ${failed.join(" ")}` : ""}`);
};