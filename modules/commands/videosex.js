module.exports.config = {
	name:"videosex",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "",
	description: "Random video sex theo api",
	commandCategory: "system",
	cooldowns: 3
};
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://apixin.kudasaikaneki.repl.co/sex').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
                                                body: `Video sex của mày đây`,
						attachment: fs.createReadStream(__dirname + `/cache/sex.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sex.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/sex.${ext}`)).on("close", callback);
			})
}