module.exports.config = {
    name: "taglientuc",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "...",
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "group",
    usages: "tangai @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn chửi", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Bắt đầu thính !");
setTimeout(() => {a({body: "Chào em anh đứng đây từ chiều" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "nhma chưa gặp ai xinh như em" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "xinh gái tâm hồn còn to nữa " + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "ai sui em có má hồng" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "để người quân tử chưa trông đã thèm" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "ối giồi oiii" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "bây h em có 2 lựa chọn " + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "1 là yêu anh" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "2 là lên phường đăng kí kết hôn " + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: "chọn thì chọn ko chọn thì chọn " + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "ko chọn bay fb " + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "chọn đe nhanh lên" + " " + name, mentions: arraytag})}, 31000);
setTimeout(() => {a({body: "3 là ko làm 2 cái trên thì ib lamd quen cg đc " + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a({body: "ko thì thôi :((" + " " + name, mentions: arraytag})}, 39000);
setTimeout(() => {a({body: "Trước đó cho tao xin nghỉ 1p nhé" + " " + name, mentions: arraytag})}, 40000);
setTimeout(() => {a({body: "Xin phép mở đầu thì" + " " + name, mentions: arraytag})}, 65000);
setTimeout(() => {a({body: "th bye ko ib là tui đi đó" + " " + name, mentions: arraytag})}, 70000);
setTimeout(() => {a({body: "đi thật đó nhe" + " " + name, mentions: arraytag})}, 75000);
setTimeout(() => {a({body: "đi đó ko hối hận nhe" + " " + name, mentions: arraytag})}, 80000);
setTimeout(() => {a({body: "th lặn đây" + " " + name, mentions: arraytag})}, 85000);
setTimeout(() => {a("Tao mệt rồi đéo thính nữa")} , 90000);
setTimeout(() => {a({body: "Nào ông chủ update lyric thì thính tiếp nhé" + " " + name, mentions: arraytag})}, 95000);
setTimeout(() => {a({body: "Cảm ơn bạn đã nghe mình thính nha" + " " + name, mentions: arraytag})}, 100000);
setTimeout(() => {a({body: "Xin chào và hẹn gặp lại bạn ở chương trình lần sau nha" + " " + name, mentions: arraytag})}, 105000);
setTimeout(() => {a("Chào tạm biệt 🥺")} , 110000);


  
  }