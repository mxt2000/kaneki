module.exports.config = {
	name:"hentai",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "HTHB-api mod by Kaneki",
	description: "Random ảnh hentai theo api",
	commandCategory: "hentai",
	cooldowns: 3
};
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://apivippro.kudasaikaneki.repl.co/hentai/?apikey=myvoquyen').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
            body: `Ảnh hentai cho ai đang nứng đây`,
						attachment: fs.createReadStream(__dirname + `/cache/anh.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/anh.${ext}`)).on("close", callback);
			})
}