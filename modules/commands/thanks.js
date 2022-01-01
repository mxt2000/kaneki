module.exports.config = {
    name: "thanks",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Kaneki",
    description: "",
    commandCategory: "không cần dấu lệnh",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "good.gif")) request("").pipe(fs.createWriteStream(dirMaterial + "good.gif"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: ``,
                attachment: fs.createReadStream(__dirname + `/noprefix/good.gif`)
            }
    if (event.body.toLowerCase() == "thank"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "Thank"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "thanks"){
        return api.sendMessage(msg,event.threadID,event.messageID);
    if (event.body.toLowerCase() == "Thanks"){
        return api.sendMessage(msg,event.threadID,event.messageID);} 
    if (event.body.toLowerCase() == "thank you"){
        return api.sendMessage(msg,event.threadID,event.messageID);} if (event.body.toLowerCase() == "Thank you"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "thank kiu"){
        return api.sendMessage(msg,event.threadID,event.messageID);} if (event.body.toLowerCase() == "Thank kiu"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
    }