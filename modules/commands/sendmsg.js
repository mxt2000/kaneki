module.exports.config = {
    name: "sendmsg",
    version: "0.0.2",
    hasPermssion: 2,
    credits: "Dลฉng UwU fix by HTHB",
    description: "sendmsg",
    commandCategory: "general",
    usages: "sendmsg [user]/[thread] id msg",
    cooldowns: 5,
};

module.exports.run = async function({ api, event, args, utils }) {
    const moment = require("moment-timezone");
    const permission = ["100058779052162"]; if (!permission.includes(event.senderID)) return api.sendMessage("Lร m j thek :v", event.threadID, event.messageID);
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
    var msg = args.splice(2).join(" ");
    if (args[0]=='user') {
        return api.sendMessage(`Vร o lรบc: ${gio}\n๐ฉ๐จฬฃ๐ต ๐ช๐ถฬ ๐ป๐ฐ๐ต ๐ต๐ฏ๐จฬฬ๐ต ๐ป๐ผฬฬ ๐จ๐ซ๐ด๐ฐ๐ต ๐ฎ๐ผฬฬ๐ฐ ฤ๐ฌฬฬ๐ต !!!\n๐แป๐ข ๐๐ฎ๐ง๐ : ` + msg, args[1]).then(
            api.sendMessage('ฤรฃ ๐แปญ๐ ๐ฉ๐๐ฃ ๐ฃ๐แบฏ๐ฃ ฤแบฟ๐ฃ ๐ฉ๐ร ๐ฃ๐ ๐ซ๐รช๐ฃ ' + args[1] + ' ๐ฉ๐ร ๐ฃ๐ ๐รด๐ฃ๐', event.threadID, event.messageID));
    } else {
            if (args[0]=='thread') { return api.sendMessage(`Vร o lรบc: ${gio}\n๐ป๐ฐ๐ต ๐ต๐ฏ๐จฬฬ๐ต ๐น๐ฐ๐ฌฬ๐ต๐ฎ ฤ๐ฌฬฬ๐ต ๐ต๐ฏ๐ถฬ๐ด ๐ฉ๐จฬฃ๐ต ๐ป๐ผฬฬ ๐จ๐ซ๐ด๐ฐ๐ต !\n๐แป๐ข ๐๐ฎ๐ง๐ : ` + msg, args[1]).then(
            api.sendMessage('ฤรฃ ๐แปญ๐ ๐ฉ๐๐ฃ ๐ฃ๐แบฏ๐ฃ ฤแบฟ๐ฃ ๐ฃ๐รณ๐ข ' + args[1] + ' ๐ฉ๐ร ๐ฃ๐ ๐รด๐ฃ๐', event.threadID, event.messageID))
            }
                else return utils.throwError("sendmsg", event.threadID, event.messageID);
        }
    }