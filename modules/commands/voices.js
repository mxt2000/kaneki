module.exports.config = {    
  name: "voicest",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "chinhle",
  description: "text to speech ",
  commandCategory:"media",
  dependencies: {
    "tts-zalo": "nWaXzdlpZzdMKdcjz1DCQ2xXH5tGxm6r"
  }
};

module.exports = {
  config: this.config,
  start: async function({ api, args, message, event, download, globalmirai }) {
    const fs = require("fs-extra");
    const axios = require('axios');
    const qs = require('querystring');
    const apikey = globalmirai.configCommands.envGlobal["tts-zalo"];
    
    let content = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
    if (!content) return api.sendMessage("Vui lòng nhập một đoạn văn bản hoặc reply một tin nhắn!", event.threadID, event.messageID);
    
    const url = "https://api.zalo.ai/v1/tts/synthesize";
    const path = __dirname + "/cache/texttospeech.mp3";
    const datapush = {
      input: content.replace(/\n/g, " "),
      encode_type: 1,
      speaker_id: 3// 0 | 1 | 2 | 3
    };
    
    const result = await axios.post(url, qs.stringify(datapush), {
      headers: { 
        apikey
      }
    });
    const link = result.data.data.url;
    
    let getfile;
    let ERROR = true;
    while (ERROR == true) {
      try {
        getfile = (await axios.get(link, { responseType: "arraybuffer" })).data;
        ERROR = false;
      }
      catch(e) {
        continue;
      }
    }
    fs.writeFileSync(path, Buffer.from(getfile));
    message.reply({ attachment: fs.createReadStream(path) }, () => fs.unlink(path));
  }
};