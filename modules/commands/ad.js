module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Quyền Kaneki",
  description: "Thông tin admin bot ^^",
  commandCategory: "ad",
  usages: "adm",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.postimg.cc/7P7rm5r7/169070986-394589408544592-1474012617617211998-n.jpg",
     ];
     var callback = () => api.sendMessage({body:`梁𝔸𝔻𝕄𝕀ℕ 𝔹𝕆𝕋梁
  👀 ᴛêɴ: Lê Công Quyền
  ❎ ᴛᴜổɪ: 𝟷4
  👤 ɢɪớɪ ᴛíɴʜ: ɴᴀᴍ
  🙄 sɪɴʜ ɴɢàʏ: 30-06-2007
  💫 ᴄʜɪềᴜ ᴄᴀᴏ / ᴄâɴ ɴặɴɢ: 𝟷ᴍ𝟽0 / 62ᴋɢ
  💘 ᴍốɪ ǫᴜᴀɴ ʜệ: Đã có chủ
  😎 ǫᴜê ǫᴜáɴ: Hưng Yên
  🤔 ɴơɪ ở: Đội 1 - thôn Hương Quất - xã Thành Công - huyện Khoái Châu - tỉnh Hưng Yên
  ♓ ᴄᴜɴɢ: Cự Giải
  🌸 ᴛíɴʜ ᴄáᴄʜ: Nhs tin vs mk nhiều là bik á ^^
  📱 ғᴀᴄᴇʙᴏᴏᴋ: https://www.facebook.com/congquyen30062007
📢 ʟưᴜ ý ᴄʜᴏ ᴄáᴄ ǫᴛᴠ ᴠà ᴛᴠ ᴛʀᴏɴɢ ʙᴏx: 
- ᴠᴜɪ ʟòɴɢ ᴋʜôɴɢ sᴘᴀᴍ ᴋʜɪ sử ᴅụɴɢ để ᴛʀáɴʜ ᴅɪᴇ ʙᴏᴛ
- ᴋʜôɴɢ sử ᴅụɴɢ ʟệɴʜ ɴʜɪềᴜ ᴄủᴀ ʟệɴʜ đó
- Đừɴɢ ᴄʜửɪ ʙᴏᴛ ᴠì ɴó đượᴄ ʟậᴘ ᴛʀìɴʜ ᴛự độɴɢ ʀờɪ ʙᴏx
- Đừɴɢ ʀᴇᴘᴏʀᴛ ʙᴏᴛ ᴠì ɴó ᴄᴜᴛᴇ ʟắᴍ 
- ɴếᴜ ʙᴏᴛ ᴋᴏ ʜᴏạᴛ độɴɢ ʜᴀʏ ʙị ʟỗɪ ʜᴀʏ ʟɪêɴ ʜệ ǫᴜᴀ sᴅᴛ ʜᴏặᴄ ɴʜắɴ ᴛɪɴ ᴍᴇss để đượᴄ ʟɪêɴ ʜệ ᴛʀựᴄ ᴛɪếᴘ ᴠớɪ ᴍìɴʜ ; ʏêᴜ ᴍọɪ ɴɢườɪ ɴʜɪềᴜ ʟắᴍ . ʜãʏ đồɴɢ ʜàɴʜ ᴄùɴɢ ᴠớɪ ʙᴏᴛ ᴠà ᴍìɴʜ ɴʜé .
------------
✔ᴅᴏɴᴀᴛᴇ:
💳ᴍʙ: Bẻ thẻ r
📲ᴢᴀʟᴏ: 𝟶969733109
----꒰ ͜͡➸£ê ℭôղɕ Qʊɣềղ•͜•----`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
