module.exports.config = {
	name: "dú",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Trung Kiên",
	description: "",
	commandCategory: "Random-img",
	usages: "dú",
	cooldowns: 5
};

module.exports.run = async ({ api, event, Currencies}) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	var money = (await Currencies.getData(event.senderID)).money
	if (money >= 1000) {
	axios.get('http://api.leanhtruong.net/api/image?api_key=LEANHTRUONG=QJn50K69b5yVEEdarMLmKIHblFOgPF9jT1FSjQ0OjZ7AhKeMCs=APIKEY=PLANFREE&image=du').then(res => {
	var image = res.data.data;
	let callback = function () {
					api.sendMessage({
						body: ``,
						attachment: fs.createReadStream(__dirname + `/cache/boobs.png`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.png`), event.messageID);
				};
				request(image).pipe(fs.createWriteStream(__dirname + `/cache/boobs.png`)).on("close", callback);
				Currencies.setData(event.senderID, options = {money: money - 1000})
			})
	} else return api.sendMessage("Bạn cần 1000 đô ?",event.threadID,event.messageID);
}