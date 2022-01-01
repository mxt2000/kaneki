module.exports.config = {
	name: "kiemtra",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Kaneki",
	description: "Kiểm Tra Toàn Bộ Thông Tin Nhóm",
	commandCategory: "modulethong",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`[ KIỂM TRA THÔNG TIN NHÓM ] 
1 \n👀 Phê duyệt: ${pd}\n🧠 Emoji: ${icon}\n👉 Thông tin nhóm: gồm ${threadMem} thành viên\nSố thành viên nam👨‍🦰: ${nam} thành viên\nSố thành viên nữ 👱‍♀️: ${nu} thành viên\nVới ${qtv} quản trị viên\n🤔 Tổng số tin nhắn: ${sl} tin 🤩\n Code By Quyền Kaneki Chúc Các Bạn Sử Dụng Bot Vui Vẻ ❤`, event.threadID, event.messageID);
