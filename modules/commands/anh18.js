module.exports.config = {
  name: "anh18",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kaneki",
  description: "Xem ảnh gái sẹc xy",
  commandCategory: "Random-img gái sẹc xy",
  usages: "ảnh 18+",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://anh18.adtnhom.repl.co').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `⚡️Gái sẹc xy free của bạn đây\n⚡️Số ảnh hiện có: ${count} ảnh`,
            attachment: fs.createReadStream(__dirname + `/cache/gai18.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gai18.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/gai18.${ext}`)).on("close", callback);
      })
}
