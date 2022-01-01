module.exports.config = {
    name: "sendmsg",
    version: "0.0.2",
    hasPermssion: 2,
    credits: "Dũng UwU fix by HTHB",
    description: "sendmsg",
    commandCategory: "general",
    usages: "sendmsg [user]/[thread] id msg",
    cooldowns: 5,
};

module.exports.run = async function({ api, event, args, utils }) {
    const moment = require("moment-timezone");
    const permission = ["100058779052162"]; if (!permission.includes(event.senderID)) return api.sendMessage("Làm j thek :v", event.threadID, event.messageID);
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
    var msg = args.splice(2).join(" ");
    if (args[0]=='user') {
        return api.sendMessage(`Vào lúc: ${gio}\n𝑩𝑨̣𝑵 𝑪𝑶́ 𝑻𝑰𝑵 𝑵𝑯𝑨̆́𝑵 𝑻𝑼̛̀ 𝑨𝑫𝑴𝑰𝑵 𝑮𝑼̛̉𝑰 Đ𝑬̂́𝑵 !!!\n𝐍ộ𝐢 𝐝𝐮𝐧𝐠: ` + msg, args[1]).then(
            api.sendMessage('Đã 𝙜ử𝙞 𝙩𝙞𝙣 𝙣𝙝ắ𝙣 đế𝙣 𝙩𝙝à𝙣𝙝 𝙫𝙞ê𝙣 ' + args[1] + ' 𝙩𝙝à𝙣𝙝 𝙘ô𝙣𝙜', event.threadID, event.messageID));
    } else {
            if (args[0]=='thread') { return api.sendMessage(`Vào lúc: ${gio}\n𝑻𝑰𝑵 𝑵𝑯𝑨̆́𝑵 𝑹𝑰𝑬̂𝑵𝑮 Đ𝑬̂́𝑵 𝑵𝑯𝑶́𝑴 𝑩𝑨̣𝑵 𝑻𝑼̛̀ 𝑨𝑫𝑴𝑰𝑵 !\n𝐍ộ𝐢 𝐝𝐮𝐧𝐠: ` + msg, args[1]).then(
            api.sendMessage('Đã 𝙜ử𝙞 𝙩𝙞𝙣 𝙣𝙝ắ𝙣 đế𝙣 𝙣𝙝ó𝙢 ' + args[1] + ' 𝙩𝙝à𝙣𝙝 𝙘ô𝙣𝙜', event.threadID, event.messageID))
            }
                else return utils.throwError("sendmsg", event.threadID, event.messageID);
        }
    }