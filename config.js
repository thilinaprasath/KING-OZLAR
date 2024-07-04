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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0ZiczBSQkdlSnB6WURoWXFkUVYxbjNGZXpTZnlFQy9FbnhUaVRPL28xdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWJXOFZpWkxpMVYyL0pTc2VqMjN0cmlhRjhUSFhkMjdTV3JEclMxNGdGUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDRjBTMmF3d0lCNVJqVDc3dTBScTlOWkVvYThsd1BWL3E4OUVxTGdTbVZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrV3V3UzE2SVVlWXM0UEh4ZFk2K1l3SjB5NDNSZDBnc1lhell5TEEvVlVrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1QZG4vSkdleXlFYVB4TGFMVU5sbFlCR3NWMGxoVzNqUnZoZG1qRjhzMHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNEWFRJb2xUNnI3eERIN045WEU1Q3h2K0ZIakRQVVo0aFprZzFMTHRYZ0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0xDd2xVUG1jS0hRRnVtenducFJSY1I1VVBLS0dINllCMXgrbWJLNWgwcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUQ1S0FlWWc5S09nYzRsS1VmV0l0OHhhd0VmWlUxQ1FXamNNNEl3blFYMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRhN1p6SEJzSFJwUjRqb1dtUUdRY2ZUdGtBUWRhL2RieVpVbzBNZC9ON3FNTk1qTTFwZDAxOUtMM29TODZnVUJPeWZPalBXb0U5eWUyMjZtNzVOWkNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTcsImFkdlNlY3JldEtleSI6Ikp3bCtHR1QvRVNlRTdOQ0k4L3RheHhkbG9xZ2dDb29MMm51Q1ZUbWcraGs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlkyOTdSNkd3UWFDUGRyYU9CbEc3TlEiLCJwaG9uZUlkIjoiMjVhYjU2OWMtYTY4ZC00YjdhLTk2MGItNDdmMzEwYmFlNWQwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRib0l2WWdRQ0hQYkZDODFEQ2pDRC9DUXlYOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGMnN2TFNXc2FCKzgyV1ZkRFRUWEFaWnlYdzQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWEFZRExSQjMiLCJtZSI6eyJpZCI6Ijk0NzY3MjA4OTkyOjE3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkIgg8J2QgPCdkIwgICDwnZCK8J2QiPCdkI3wnZCGXG5cblxuXG7wnZCOXG5cblxuXG5cblxu8J2QmVxuXG5cblxuXG5cbvCdkItcblxuXG5cblxuXG7wnZCAXG5cblxuXG5cblxu8J2QkSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkxBcE5BRkVLZlltclFHR0JFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOGNUTWZSaVhvYUYvNG9laGxxOGdiUVhQZU1SOW9vWHBib0w4U1BBS2l4cz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiV3AzbHUybDByY1NUSHdCQW40UHRpTS9RSzJkU3I1TytBdStsS3BteWxxRnhNTW1DZGVGTVI1amkrVngwdS95UW4raDVPVWZoekd6RUxqVUN0WE5CRGc9PSIsImRldmljZVNpZ25hdHVyZSI6Im4wMVE0ejgzdFBNMFcrOE1ReGxmeUhVeitjZ3Jxb09kb3pDOXBaL3FpeXplaUQ4bnJFVU9sOUZjVExmRWd1UG41YVBpVVJSNnVoRkt1LzZpQkVIOUJnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjcyMDg5OTI6MTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZkhFekgwWWw2R2hmK0tIb1phdklHMEZ6M2pFZmFLRjZXNkMvRWp3Q29zYiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDEwMTkzOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQelUifQ=="
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
