//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "dextermd556@gmail.com";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";  
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94767208992,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "true";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "true";
global.read_status_from = process.env.READ_STATUS_FROM || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0t2N2h5THllTFZkMVpzYjhLaFVQVTJ0cGJKcmMrNWVpWDdURFJubTIzND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUlYOHgyWnFzR1Q1Uk4weDFYa2Qrb3pQeVFzVGVyOWxlTmQzdW81UmNGUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTnVoVE5BdG94MEVZNEFuOWFqNXREMHIvekpWWnBlYXRKM21WQnIyL2xrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvY2E5NmY3QmFrUnFtcmlKY0FFeE5wcUdiNzFyRi9NQ3JyNE5sTTAyT0VRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklGYk9FV29xd0N0c1NvREgzUk5UYkovTHpGSm1tb0JQOFNhdW9TOEx1WEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNRYVFSS082MURNSkNRVTdmVThvN25NcllGbENIZWZ0c0VSVFlRanBEZ1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0lBd3JCTVdxVVZTOCtidHA5VmtqZGZEb3VVa2FGTmQ4VlBDZEI4aXRVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2FmaTlSeTFqM043NFgyOFVRTjJ2VENXQUh1Zm10QnpKVGNMMHlGcWtUQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFqNkJ4bVE0R29BSWlscjJXQVhicUpHRmNZcmNmblFiL2xyaitmTGdQUllDZit3Y3BpY0p5WTZhdS9DL0hSRE1kTGJ0UUtLaUo0eGhyVWo0aW9uYmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEzLCJhZHZTZWNyZXRLZXkiOiJ5bWkyYmt3SlVKL0Vtd3RzdnJKR2RZRHZCYlpOZkJQL0x2TTRtR01qSk9NPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI3ejQwOEplZ1JveTYyNVIySVJMOGRRIiwicGhvbmVJZCI6Ijc3ZDU2ZWEwLTM4MmQtNDM2ZC05NWM1LTIyODlmOWZiMWE5MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZUG9KRGVzelVsK0t4ZjBGdDllTyswSy9zeVE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUtGQnRGT1BWa0VKZHVIWEJ0emNVblRaRVVBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBKVlJNQzNYIiwibWUiOnsiaWQiOiI5NDc2NzIwODk5MjoxNkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCIIPCdkIDwnZCMICAg8J2QivCdkIjwnZCN8J2QhlxuXG5cblxu8J2QjlxuXG5cblxuXG5cbvCdkJlcblxuXG5cblxuXG7wnZCLXG5cblxuXG5cblxu8J2QgFxuXG5cblxuXG5cbvCdkJEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05MQXBOQUZFTDdObXJRR0dCQWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjhjVE1mUmlYb2FGLzRvZWhscThnYlFYUGVNUjlvb1hwYm9MOFNQQUtpeHM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjlZdHByeVlHcUdMTkhxV3IyVTFRNTFHbEM3TjFHdSt0T2tMYkZ0Vm1qS2lKbm5lbXJMdHZLYUU3TW4xM2xqejZSNTBZRUlNMHlDdmNXTkJBL2N3QkR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJIeHZNOWFiV3NKWGdUeUxlMEpmVEkzSGZmNit5V1NtWHNwdXorVWp5dlJLRU5QSWJqZTh3VUdUNnFSN3dTZDViYlBDNU9kZ2t6d1BmTnFUV084M2ZnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY3MjA4OTkyOjE2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZIRXpIMFlsNkdoZitLSG9aYXZJRzBGejNqRWZhS0Y2VzZDL0Vqd0Nvc2IifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAxMDA1NTV9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "🇱🇰 P͢O͢W͢E͢R͢ B͢Y͢ R͢C͢D͢ M͢D͢",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐊𝐈𝐍𝐆 𝐎𝐙𝐋𝐀𝐑",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94767208992",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RCD").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
