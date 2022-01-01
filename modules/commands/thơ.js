module.exports.config = {
	name: "thơ",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VĐT&NTH",
	description: "",
	commandCategory: "News",
	usages: "gai",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
const axios = require('axios');
const res = await axios.get(`https://apixin.kudasaikaneki.repl.co/tho`);
var thính = res.data.data
return api.sendMessage(` ${thính} `, event.threadID, event.messageID)
}