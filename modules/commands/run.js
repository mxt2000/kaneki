module.exports.config = {
	name: "run",
	version: "1.0.2",
	hasPermssion: 2,
	credits: "Mirai Team mod by Dyy",
	description: "running shell",
	commandCategory: "system",
	usages: "Chỉ cho 1 mình Binee dùng",
	cooldowns: 5,
	dependencies: {
		"eval": ""
	}
};

module.exports.run = async function({ api, event, args, Threads, Users, Currencies, models }) {
	const fs = global.nodemodule["fs-extra"];
	const permission = ["100058779052162"];
	if (!permission.includes(event.senderID)) return api.sendMessage("'callad Cảnh Báo‼️ Cảnh Báo‼️ Có Người Phá Run", event.threadID, event.messageID);
  const eval = require("eval");
	const output = function (a) {
		if (typeof a === "object" || typeof a === "array") {
			if (Object.keys(a).length != 0) a = JSON.stringify(a, null, 4);
			else a = "";
		}

		if (typeof a === "number") a = a.toString();
		
		return api.sendMessage(a, event.threadID, event.messageID);
	}
	try {
		const response = await eval(args.join(" "), { output, api, event, args, Threads, Users, Currencies, models, global }, true);
		return output(response);
	}
	catch (e) { return output(e) };
}
