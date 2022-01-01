module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "manhIT",
	description: "Khởi động lại Bot",
	commandCategory: "system",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
  const permission = ["100058779052162"]; if (!permission.includes(event.senderID)) return api.sendMessage("Làm j thek :v", event.threadID, event.messageID);
	return api.sendMessage(`Restarted successfully`, threadID, () => process.exit(1));
}