module.exports.config = {
name: "bannershiron",
version: "1.0.0",
hasPermssion: 0,
credits: "Shiron",
description: "Tạo ảnh banner",
commandCategory: "media",
usages: "bannershiron",
cooldowns: 5
};
module.exports.run = async function ({ api, args, event }) {
    try {
        const axios = require("axios");
        const request = require("request");
        const fs = require("fs-extra");
        var ag = args.join(" ").split(' | ');
        var text1 = ag[0],
            text2 = ag[1],
            text3 = ag[2];
        if (!text1) {
            return api.sendMessage("DANH SÁCH CÁC TAG BANNER\n\n1.CSGO\n2.NARUTO\n3.CROSSFIRE\n4.PUBG\n5.TIKTOK\n6.NEON\n7.LOVE\n8.SHADOW\n9.ROMANTIC\n10.GRASS\n11.CAPTAIN\n12.CNAME\n13.BURNPAPER\n14.FUNNYCUP\n15.COFFECUP\n16.WOOD\n17.FLOWER\n18.WOODEN\n19.3DSUMMER\n20.WOLF\n21.3DNATURE\n22.UNDERWATER\n23.GOLDENROSE\n24.VECTOR\n25.TYTOGRAPHY\n26.UNDERFALL\n27.SMOKENEON\n28.RAINBOW\n29.GRAFFITI\n30.CAMOUFLAGE\n31.3DGLOWING\n32.VINTAGE\n33.HONEY\n34.WHITECUBE\n35.AVATAR\n36.GLOWRAINBOW\n37.NIGHTSKY\n38.FUR\n39.FLAMING\n40.CRISP\n41.EMBROIDERY\n42.BRAKE\n43.3DLIGHT\n44.METALLIC\n45.STRIKING\n46.WATERMELON\n47.BUTTERFLY\n48.HARRY\n49.GLOWN\n50.ARCADE\n51.COFFECUP2\n52.LUXURY\n53.CEMETERY\n54.WOODBLOCK\n55.TYPOGRAPHY\n56.SWEET\n57.SIMPLE\n58.BEVEL\n59.UNDERFLOWER\n60.UNDERFLOWER2\n61.BATTLEFIELD\n62.BLACKPINK\n63.WATERPIPE\n64.HALLOWEEN\n65.HALLOWEEN2\n66.HORROR\n67.SKETCH\n68.SIRCUIT\n69.DISCOVERY\n70.FICTION\n71.GAME8BIT\n72.DEMON\n73.TRANSFORMER\n74.BERRY\n75.LAYERED\n76.THUNDER\n77.MAGMA\n78.3DSTONE\n79.NION\n80.GLITCH\n81.HARRYPOTTER\n81.GLITCH2\n82.EMBOSSED\n83.BROKEN\n84.PAPERCUT\n85.GRADIENT\n86.GLOSSY\n87.WATERCOLOR\n88.MULTICOLOR\n89.DEVIL\n90.BEAR\n91.WONDERFULG\n92.COOLG\n93.COOLWG\n94.CHRISTMAS\n95.LIGHT\n96.SNOW\n97.CLOUDSKY\n98.GRADIENT2\n99.REALISTIC\n100.SUMMER\n\nExample: .bannershiron <tag> | <text> ", event.threadID)
        }
        if (text1 == "pubg") {
            if (!text2 || !text3) {
                return api.sendMessage("Error\n\nExample: .bannershiron pubg | [text1] | [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/pubg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pubg.png`), event.messageID);
                };
                return request(encodeURI(`https://api-ttk.herokuapp.com/banner/pubg?text1=${text2}&text2=${text3}&apikey=lawerteam`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/pubg.png`))
                    .on("close", callback);
            }
        }
        if (text1 == "naruto") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron naruto | [text]", event.threadID);
            } else {
                const res1 = await axios.get(`https://api-ttk.herokuapp.com/banner/naruto?text=${text2}`);
                var url1 = res1.data.url;
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/naruto.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/naruto.png`), event.messageID);
                };
                return request(encodeURI(url1))
                    .pipe(fs.createWriteStream(__dirname + `/cache/naruto.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "smoketext") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron smoketext | [text]", event.threadID);
            } else {
                const res2 = await axios.get(`https://api-ttk.herokuapp.com/banner/smoketext?text=${text2}`);
                var url2 = res2.data.url;
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/smoketext.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/smoketext.png`), event.messageID);
                };
                return request(encodeURI(url2))
                    .pipe(fs.createWriteStream(__dirname + `/cache/smoketext.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "crossfire") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: .bannershiron crossfire | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-ttk.herokuapp.com/banner/crossfire?text=${text2}&apikey=lawerteam`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
        if (text1 == "tiktok") {
            if (!text2 || !text3) {
                return api.sendMessage("Error\n\nExample: .bannershiron tiktok | [text1] | [text2]", event.threadID);
            } else {
                const res3 = await axios.get(`https://api.reiyuura.me/api/photooxy/tiktok-effect?text1=${text2}&text2=${text3}`);
                var url3 = res3.data.result.url;
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/tiktok.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/tiktok.png`), event.messageID);
                };
                return request(encodeURI(url3))
                    .pipe(fs.createWriteStream(__dirname + `/cache/tiktok.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "neon") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron neon | [text]", event.threadID);
            } else {
                const res4 = await axios.get(`https://api.reiyuura.me/api/photooxy/neon?q=${text2}`);
                var url4 = res4.data.result.url;
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/neon.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/neon.png`), event.messageID);
                };
                return request(encodeURI(url4))
                    .pipe(fs.createWriteStream(__dirname + `/cache/neon.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "love") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron love | [text]", event.threadID);
            } else {
                const res5 = await axios.get(`https://api.reiyuura.me/api/photooxy/love-message?q=${text2}`);
                var url5 = res5.data.result.url;
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/love.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/love.png`), event.messageID);
                };
                return request(encodeURI(url5))
                    .pipe(fs.createWriteStream(__dirname + `/cache/love.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "shadow") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron shadow | [text]", event.threadID);
            } else {
                const res6 = await axios.get(`https://api.reiyuura.me/api/photooxy/shadow?q=${text2}`);
                var url6 = res6.data.result.url;
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/shadow.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/shadow.png`), event.messageID);
                };
                return request(encodeURI(url6))
                    .pipe(fs.createWriteStream(__dirname + `/cache/shadow.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "romantic") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron romantic | [text]", event.threadID);
            } else {
                const res7 = await axios.get(`https://api.reiyuura.me/api/photooxy/romantic?q=${text2}`);
                var url7 = res7.data.result.url;
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/romantic.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/romantic.png`), event.messageID);
                };
                return request(encodeURI(url7))
                    .pipe(fs.createWriteStream(__dirname + `/cache/romantic.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "grass") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron grass | [text]", event.threadID);
            } else {
                const res8 = await axios.get(`https://api.reiyuura.me/api/photooxy/message-under-grass?q=${text2}`);
                var url8 = res8.data.result.url;
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/grass.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/grass.png`), event.messageID);
                };
                return request(encodeURI(url8))
                    .pipe(fs.createWriteStream(__dirname + `/cache/grass.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "captain") {
            if (!text2 || !text3) {
                return api.sendMessage("Error\n\nExample: .bannershiron captain | [text1] | [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/captain.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/captain.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/captain_as?apikey=Alphabot&text=${text2}&text2=${text3}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/captain.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "cname") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron cname | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/cname.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/cname.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/cname?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/cname.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "burnpaper") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron burnpaper | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/burnpaper.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/burnpaper.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/burnpaper?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/burnpaper.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "funnycup") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron funnycup | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/funnycup.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/funnycup.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/funnycup?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/funnycup.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "coffeecup") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron coffeecup | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/coffeecup.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/coffeecup.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/coffeecup?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/coffeecup.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "wood") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron wood | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/wood.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/wood.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/wood?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/wood.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "flower") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron flower | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/flower.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/flower.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/flower?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/flower.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "wooden") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron wooden | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/wooden.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/wooden.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/wooden?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/wooden.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "3dsummer") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron 3dsummer | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/3dsummer.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/3dsummer.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/3dsummer?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/3dsummer.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "wolf") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron wolf | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/wolf.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/wolf.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/wolf_metal?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/wolf.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "3dnature") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron 3dnature | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/3dnature.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/3dnature.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/3dnature?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/3dnature.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "underwater") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron underwater | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/underwater.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/underwater.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/underwater?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/underwater.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "goldenrose") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron goldenrose | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/goldenrose.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/goldenrose.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/goldenrose?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/goldenrose.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "vector") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron vector | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/vector.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/vector.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/vector?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/vector.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "typography") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron typography | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/typography.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/typography.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/typography?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/typography.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "underfall") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron underfall | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/underfall.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/underfall.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/underfall?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/underfall.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "smokyneon") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron smokyneon | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/smokyneon.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/smokyneon.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/smokyneon?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/smokyneon.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "rainbow") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron rainbow | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/rainbow.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/rainbow.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/rainbow?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/rainbow.png`))
                    .on("close", callback);
            }

        }  
        if (text1 == "graffiti") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron graffiti | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/graffiti.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/graffiti.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/graffiti?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/graffiti.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "camouflage") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron camouflage | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/camouflage.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/camouflage.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/camouflage?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/camouflage.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "3dglowing") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron 3dglowing | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/3dglowing.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/3dglowing.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/3dglowing?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/3dglowing.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "vintage") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron vintage | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/vintage.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/vintage.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/vintage?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/vintage.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "honey") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron honey | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/honey.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/honey.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/honey?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/honey.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "whitecube") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron whitecube | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/whitecube.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/whitecube.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/whitecube?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/whitecube.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "avatar") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron avatar | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/avatar.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/avatar.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/avatar?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/avatar.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "glowrainbow") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron glowrainbow | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/glowrainbow.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/glowrainbow.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/glowrainbow?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/glowrainbow.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "nightsky") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron nightsky | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/nightsky.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/nightsky.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/nightsky?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/nightsky.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "fur") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron fur | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/fur.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/fur.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/fur?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/fur.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "flaming") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron flaming | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/flaming.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/flaming.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/flaming?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/flaming.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "crisp") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron crisp | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crisp.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crisp.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/crisp?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crisp.png`))
                    .on("close", callback);
            }

        }
         if (text1 == "embroidery") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron embroidery | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/embroidery.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/embroidery.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/embroidery?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/embroidery.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "bcake") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron bcake | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/bcake.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/bcake.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/bcake?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/bcake.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "3dligth") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron 3dligth | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/3dligth.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/3dligth.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/3dligth?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/3dligth.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "metallic") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron metallic | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/metallic.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/metallic.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/metallic?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/metallic.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "striking") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron striking | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/striking.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/striking.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/striking?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/striking.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "watermelon") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron watermelon | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/watermelon.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/watermelon.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/watermelon?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/watermelon.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "butterfly") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron butterfly | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/butterfly.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/butterfly.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/butterfly?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/butterfly.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "harry") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron harry | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/harry.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/harry.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/harry?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/harry.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "glown") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron glown | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/glown.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/glown.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/glowneon?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/glown.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "arcade") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron arcade | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/arcade.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/arcade.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/arcade?apikey=Alphabot&text=Zeeone&text2=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/arcade.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "coffecup2") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron coffecup2 | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/coffecup2.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/coffecup2.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/coffecup2?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/coffecup2.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "luxury") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron luxury | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/luxury.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/luxury.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/luxury?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/luxury.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "cemetery") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron cemetery | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/cemetery.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/cemetery.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/cemetery?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/cemetery.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "woodblock") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron woodblock | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/woodblock.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/woodblock.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/woodblock?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/woodblock.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "typography") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron typography | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/typography.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/typography.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/typography?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/typography.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "sweet") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron sweet | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/sweet.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sweet.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/sweet?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/sweet.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "simple") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron simple | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/simple.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/simple.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/simple?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/simple.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "bevel") {
           if (!text2 || !text3) {
                return api.sendMessage("Error\n\nExample: .bannershiron bevel | [text1] | [text2] ", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/bevel.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/bevel.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/bevel?apikey=Alphabot&text=${text2}&text2=${text3}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/bevel.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "underflower") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron underflower | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/underflower.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/underflower.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/underflower?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/underflower.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "underflower2") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron underflower2 | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/underflower2.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/underflower2.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/underflower2?apikey=Alphabot&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/underflower2.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "battlefield") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron battlefield | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/battlefield.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/battlefield.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/photooxy/battlefield?apikey=Alphabot&text=${text2}&text2=${text3}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/battlefield.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "blackpink") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron blackpink | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/blackpink.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/blackpink.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/blackpink?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/blackpink.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "waterpipe") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron waterpipe | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/waterpipe.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/waterpipe.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/water_pipe?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/waterpipe.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "halloween") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron halloween | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/halloween.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/halloween.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/halloween?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/halloween.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "halloween2") {
           if (!text2 || !text3) {
                return api.sendMessage("Error\n\nExample: .bannershiron halloween2 | [text1] | [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/halloween2.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/halloween2.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/halloween2?text=${text2}&text2=${text3}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/halloween2.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "horror") {
           if (!text2 || !text3) {
                return api.sendMessage("Error\n\nExample: .bannershiron horror | [text1] | [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/horror.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/horror.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/horror?text=${text2}&text2=${text3}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/horror.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "sketch") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron sketch | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/sketch.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sketch.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/sketch?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/sketch.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "sircuit") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron sircuit | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/sircuit.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sircuit.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/sircuit?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/sircuit.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "discovery") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron discovery | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/discovery.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/discovery.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/discovery?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/discovery.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "fiction") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron fiction | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/fiction.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/fiction.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/fiction?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/fiction.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "game8bit") {
           if (!text2 || !text3) {
                return api.sendMessage("Error\n\nExample: .bannershiron game8bit | [text1] | [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/game8bit.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/game8bit.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/game8bit?text=${text2}&text2=${text3}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/game8bit.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "demon") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron demon | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/demon.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/demon.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/demon?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/demon.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "transformer") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron transformer | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/transformer.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/transformer.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/transformer?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/transformer.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "berry") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron berry | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/berry.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/berry.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/berry?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/berry.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "layered") {
           if (!text2 || !text3) {
                return api.sendMessage("Error\n\nExample: .bannershiron layered | [text1] | [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/layered.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/layered.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/layered?text=${text2}&text2=${text3}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/layered.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "thunder") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron thunder | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/thunder.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/thunder.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/thunder?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/thunder.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "magma") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron magma | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/magma.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/magma.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/magma?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/magma.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "3dstone") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron 3dstone | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/3dstone.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/3dstone.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/3dstone?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/3dstone.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "nion") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron nion | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/nion.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/nion.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/neon?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/nion.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "glitch") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron glitch | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/glitch.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/glitch.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/glitch?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/glitch.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "harrypotter") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron harrypotter | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/harrypotter.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/harrypotter.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/harry_potter?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/harrypotter.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "glitch2") {
           if (!text2 || !text3) {
                return api.sendMessage("Error\n\nExample: .bannershiron glitch2 | [text1] | [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/glitch2.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/glitch2.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/glitch2?text=${text2}&text2=${text3}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/glitch2.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "embossed") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron embossed | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/embossed.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/embossed.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/embossed?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/embossed.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "broken") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron broken | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/broken.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/broken.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/broken?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/broken.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "papercut") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron papercut | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/papercut.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/papercut.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/papercut?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/papercut.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "gradient") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron gradient | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/gradient.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gradient.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/gradient?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/gradient.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "glossy") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron glossy | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/glossy.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/glossy.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/glossy?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/glossy.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "watercolor") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron watercolor | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/watercolor.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/watercolor.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/watercolor?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/watercolor.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "multicolor") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron multicolor | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/multicolor.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/multicolor.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/multicolor?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/multicolor.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "devil") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron devil | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/devil.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/devil.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/neon_devil?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/devil.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "bear") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron bear | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/bear.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/bear.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/bear?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/bear.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "wonderfulg") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron wonderfulg | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/wonderfulg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/wonderfulg.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/wonderfulg?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/wonderfulg.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "coolg") {
           if (!text2 || !text3) {
                return api.sendMessage("Error\n\nExample: .bannershiron coolg | [text1] | [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/coolg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/coolg.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/coolg?text=${text2}&text2=${text3}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/coolg.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "coolwg") {
           if (!text2 || !text3) {
                return api.sendMessage("Error\n\nExample: .bannershiron coolwg | [text1] | [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/coolwg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/coolwg.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/coolwg?text=${text2}&text2=${text3}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/coolwg.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "christmas") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron christmas | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/christmas.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/christmas.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/christmas?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/christmas.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "light") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron light | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/light.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/light.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/neon_light?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/light.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "snow") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron snow | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/snow.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/snow.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/snow?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/snow.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "cloudsky") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron cloudsky | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/cloudsky.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/cloudsky.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/cloudsky?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/cloudsky.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "gradient2") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron gradient2 | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/gradient2.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gradient2.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/gradient2?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/gradient2.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "realistic") {
           if (!text2 || !text3) {
                return api.sendMessage("Error\n\nExample: .bannershiron realistic | [text1] | [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/realistic.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/realistic.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/realistic?text=${text2}&text2=${text3}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/realistic.png`))
                    .on("close", callback);
            }

        }
        if (text1 == "summer") {
           if (!text2) {
                return api.sendMessage("Error\n\nExample: .bannershiron summer | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/summer.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/summer.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/summer?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/summer.png`))
                    .on("close", callback);
            }

        }
    } catch (err) {
        console.log(err)
        return api.sendMessage("Đã xảy ra lỗi", event.threadID);
    }
}