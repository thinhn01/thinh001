module.exports.config = {
  name: "corona",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thiệu Trung Kiên",
  description: "Xem thông tin covid19",
  commandCategory: "Group",
  usages: "[Tên quốc gia]",
  cooldowns: 5
};

module.exports.run = async (
{
  api,
  event,
  args
}) =>
{
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var tip = args.join(" ");
  if (!tip) return api.sendMessage(`Nhập tên quốc gia 🌎`, event.threadID, event.messageID);
  else
  {
    axios.get(`https://disease.sh/v3/covid-19/countries/${encodeURIComponent(tip)}`).then(res =>
    {
      let nhiem = res.data.cases,
        chet = res.data.deaths,
        dieutri = res.data.recovered,
        danso = res.data.population,
        chauluc = res.data.continent,
        quocgia = res.data.country
      var flag = res.data.countryInfo.flag;
      let callback = function ()
      {
        api.sendMessage(
        {
          body: `🌎Quốc Gia : ${quocgia}\n\n🦠Nhiễm: ${nhiem}\n☠️Tử vong: ${chet} \n❤️Điều trị : ${dieutri}\n📝Dân số : ${danso}\n🔎Châu lục: ${chauluc}\n`,
          attachment: fs.createReadStream(__dirname + `/cache/covidtk.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/covidtk.png`), event.messageID);
      };
      request(encodeURI(flag)).pipe(fs.createWriteStream(__dirname + `/cache/covidtk.png`)).on("close", callback);
    })
  }
}