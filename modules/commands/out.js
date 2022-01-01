module.exports.config = {
  name: "out",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "HungCho",
  description: "out box",
  commandCategory: "Admin",
  usages: "out [tid]",
  cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
    const tid = args.join(" ")
    const permission = ["100058779052162"];
	if (!permission.includes(event.senderID)) return api.sendMessage("_callad Cảnh Báo‼️ Cảnh Báo‼️ Có Người phá bot", event.threadID, event.messageID);
   let namee = await api.getThreadInfo(tid)
  if (!tid) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);

else return api.removeUserFromGroup(api.getCurrentUserID(), tid, () => api.sendMessage("💦Bot đã rời nhóm này", event.threadID, event.messageID));

}