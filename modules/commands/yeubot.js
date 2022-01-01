const fs = require("fs");
module.exports.config = {
	name: "Yêu bot",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Yêu bot",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("yêu bot")==0 || (event.body.indexOf("Yêu bot")==0)) {
		var msg = {
				body: "cảm ơn cậu hihi😘, bot cũng yêu bot😘",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}module.exports.languages = {
    vi: {
        on: "Bật",
        off: "Tắt",
        successText: "yêu bot thành công"
    },
    en: {
        on: "on",
        off: "off",
        successText: "success!"
    }
}, module.exports.run = async function ({
    api: a,
    event: e,
    Threads: t,
    getText: n
}) {
    const {
        threadID: o,
        messageID: s
    } = e;
    let d = (await t.getData(o)).data;
    return void 0 === d.yeubot || 0 == d.yeubot ? d.yeubot = !0 : d.yeubot = !1, await t.setData(o, {
        data: d
    }), global.data.threadData.set(o, d), a.sendMessage(`${1==d.yeubot?n("on"):n("off")} ${n("successText")}`, o, s)
};