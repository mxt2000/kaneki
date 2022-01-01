module.exports.config = {
	name: "master",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "Crystal",
	description: "Liên Hệ Admin Bot",
	commandCategory: "Thông Tin", 
	usages: "master [key]", 
	cooldowns: 8,
	dependencies: [] 
};

module.exports.run = async ({ api, event, args, client, utils }) => {
	if (args.join() == "") {api.sendMessage("Bot hiện đang có:\nAdmin key 1 \nBot key 2",event.threadID, event.messageID);
	}
	if (args[0] == "1") {
		return api.sendMessage("Admin: Lê Công Quyền\nFb : https://www.facebook.com/khai.1209/", event.threadID, event.messageID);
	}
	else if (args[0] == "2") {
		return api.sendMessage("Bot: Chatbot Kaneki\nFb : https://www.facebook.com/crystal.chatbot/", event.threadID, event.messageID);
	}
}