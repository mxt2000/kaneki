module.exports.config = {
 name: "neko",
 version: "1.0.1",
 hasPermssion: 0,
 credits: "JRT",
 description: "Random-img alime", //nhập thứ bạn muốn
 commandCategory: "Random-img alime", //Phần hiển thị trên help
 usages: "nekko", //cách sử dụng
 cooldowns: 1, //thời gian chờ cách nhau
 
 };
   
module.exports.run = async ({ api, event }) => {
 const axios = require('axios');
 const request = require('request');
 const fs = require("fs");
 axios.get('https://nekos.life/api/v2/img/neko').then(res => { //nhập api từ nekos.life
 let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
 
 let callback = function () {
     api.sendMessage({
      body: " Anata no ecchi 🤤 ❤️",
      attachment: fs.createReadStream(__dirname + `/cache/neko.${ext}`)
     }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/neko.${ext}`), event.messageID);
    };
    request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/neko.${ext}`)).on("close", callback);
   })
}