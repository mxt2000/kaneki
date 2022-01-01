module.exports.config = {
	name:"tiktokgaixinh",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "HTHB-api mod by Kaneki",
	description: "Random ảnh theo api - uptime",
	commandCategory: "system",
	cooldowns: 3
};
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://apivippro.kudasaikaneki.repl.co/tiktokgaixinh/?apikey=myvoquyen').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
                                                body: ``,
						attachment: fs.createReadStream(__dirname + `/cache/tiktok.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/tiktok.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/tiktok.${ext}`)).on("close", callback);
			})
}