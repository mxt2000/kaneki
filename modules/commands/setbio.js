module.exports.config = {
	name: "setbio",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Lợi",
	description: "Đổi tiểu sử",
	commandCategory: "Group",
	usages: "setbio [bio]",
	cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
  const permission = ["100058779052162"]; if (!permission.includes(event.senderID)) return api.sendMessage("_callad Anh Quyền Kaneki ơi, có đứa muốn đổi tiểu sử em nè!", event.threadID, event.messageID);
	 api.changeBio(`${args.join(" ")}`);
	  api.sendMessage(`Đã đổi tiểu sử của bot là :${args.join(" ")}`, event.threadID);
}