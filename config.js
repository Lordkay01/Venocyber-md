//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "255742862266";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID = 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUF4TTUzQ25oODlzQm9LdVJ0TFRPS3BHT3R5NU1XN3FvcThseDZjaUJYcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFZoR1paZWNJNFlmQmRtTFJmMEhLaXRiTnh5QmhoRGthWWdrK3ZFUDZqST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTmVKdGt2cWM3R29Qa2tncmhCbUZ6cGNBOGlFSGtUaWx0Ujhrc3FkV21nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzd1Q1N2tPUkQ0aWNmajIxTll2eVBPZ1Z2WnJ1OUNIcXFCcjVOdll3b3l3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhPclBKd1B0ZFVPWXhWbFpGT2QzeVVJV1lOSW9ITFU4M2U0ZE82UU9QbVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik10NDdhNzE5Qnk5cVNVODVtdnBkZGFESUllMGJaaWhKYTZMdEJ0Y3Vld3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkJMcnl3UUR3T3ZFbGpZRXFBS2wrMDhUYWxveThSV1FEenJJTEx4NU0xdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0VybnZ4Z1pNd29RM3kyZFhnOFdKSGVCRjhOSzR2WGFYZ1cxMStPT0FtYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJ2TTYzd3NKMVJ3RTNsaDJxaFJKM0NyLzBYc2VpNVRrWmZGSHZkWHE1cml1citRZXZHREcrNG1uNlF3M2hMdHBvOWpPQ244UElVWGZVTUE4eUZtV0FnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NywiYWR2U2VjcmV0S2V5IjoiNFBEbU1yc0tidWZuRldadlY5dzFXWlNUSzFJT1BuZ0tjT3JrKytoRnI3az0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MDE1MzE2NjcxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijg5QTI5RDlGRTQ3MTlGQzJCNzA4MjJGNEU4MDIwMDY3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE0NTkxODZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwMTUzMTY2NzFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTlDQzdFQTk0OThDQzU3MTBCMjg5OTBCOTY4MTMwQzYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTQ1OTE4N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTW5HdlE2SnRSNmV2VWtmRzlNUU9SZyIsInBob25lSWQiOiI4ZjhiNDM5Ni00NjM1LTQ0NTAtOWQwZC0zOWJhZmI2NzRjM2EiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidG5WYnYrelZUaHk5MUpvYnUvSHlqaGlsL2VZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRPZ1U5K3pOU3lWTmd5NjNIWHRydW5lMlVJaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJKNjczMzVWOSIsIm1lIjp7ImlkIjoiMjM0OTAxNTMxNjY3MToyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNZlZnTHNHRU9URDdiUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ4TGUyYzFhMXJ5d0xKbWV0dFhvVWVBcDNidEVISzN6UmdHWjk1c0Y3VkdBPSIsImFjY291bnRTaWduYXR1cmUiOiJRT0FIeS81NWMrN0sralN6Y1NzWU9rWmFvek1sK2E2TUlBYkFYVkhQM0lxZ2Z3S3JNM2FIMkpYMWtNTngraEl2RHVUSUdvZndzZzRGK3VHaXJIMmZCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiR1hndHV6eEVoeTJ6aTBDUW5MQjRpMmJRa0s1UFJMZmRpSkhIUlEyZTZvNDJRalMxTVBnRnErcTIwTlJsMEgwMVFmL2VrMXg4Q3BmRGVSSjRsQmxRQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDE1MzE2NjcxOjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY1MzdG5OV3RhOHNDeVpucmJWNkZIZ0tkMjdSQnl0ODBZQm1mZWJCZTFSZyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTQ1OTE4NH0='
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUF4TTUzQ25oODlzQm9LdVJ0TFRPS3BHT3R5NU1XN3FvcThseDZjaUJYcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFZoR1paZWNJNFlmQmRtTFJmMEhLaXRiTnh5QmhoRGthWWdrK3ZFUDZqST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTmVKdGt2cWM3R29Qa2tncmhCbUZ6cGNBOGlFSGtUaWx0Ujhrc3FkV21nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzd1Q1N2tPUkQ0aWNmajIxTll2eVBPZ1Z2WnJ1OUNIcXFCcjVOdll3b3l3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhPclBKd1B0ZFVPWXhWbFpGT2QzeVVJV1lOSW9ITFU4M2U0ZE82UU9QbVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik10NDdhNzE5Qnk5cVNVODVtdnBkZGFESUllMGJaaWhKYTZMdEJ0Y3Vld3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkJMcnl3UUR3T3ZFbGpZRXFBS2wrMDhUYWxveThSV1FEenJJTEx4NU0xdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0VybnZ4Z1pNd29RM3kyZFhnOFdKSGVCRjhOSzR2WGFYZ1cxMStPT0FtYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJ2TTYzd3NKMVJ3RTNsaDJxaFJKM0NyLzBYc2VpNVRrWmZGSHZkWHE1cml1citRZXZHREcrNG1uNlF3M2hMdHBvOWpPQ244UElVWGZVTUE4eUZtV0FnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NywiYWR2U2VjcmV0S2V5IjoiNFBEbU1yc0tidWZuRldadlY5dzFXWlNUSzFJT1BuZ0tjT3JrKytoRnI3az0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MDE1MzE2NjcxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijg5QTI5RDlGRTQ3MTlGQzJCNzA4MjJGNEU4MDIwMDY3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE0NTkxODZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwMTUzMTY2NzFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTlDQzdFQTk0OThDQzU3MTBCMjg5OTBCOTY4MTMwQzYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTQ1OTE4N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTW5HdlE2SnRSNmV2VWtmRzlNUU9SZyIsInBob25lSWQiOiI4ZjhiNDM5Ni00NjM1LTQ0NTAtOWQwZC0zOWJhZmI2NzRjM2EiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidG5WYnYrelZUaHk5MUpvYnUvSHlqaGlsL2VZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRPZ1U5K3pOU3lWTmd5NjNIWHRydW5lMlVJaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJKNjczMzVWOSIsIm1lIjp7ImlkIjoiMjM0OTAxNTMxNjY3MToyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNZlZnTHNHRU9URDdiUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ4TGUyYzFhMXJ5d0xKbWV0dFhvVWVBcDNidEVISzN6UmdHWjk1c0Y3VkdBPSIsImFjY291bnRTaWduYXR1cmUiOiJRT0FIeS81NWMrN0sralN6Y1NzWU9rWmFvek1sK2E2TUlBYkFYVkhQM0lxZ2Z3S3JNM2FIMkpYMWtNTngraEl2RHVUSUdvZndzZzRGK3VHaXJIMmZCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiR1hndHV6eEVoeTJ6aTBDUW5MQjRpMmJRa0s1UFJMZmRpSkhIUlEyZTZvNDJRalMxTVBnRnErcTIwTlJsMEgwMVFmL2VrMXg4Q3BmRGVSSjRsQmxRQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDE1MzE2NjcxOjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY1MzdG5OV3RhOHNDeVpucmJWNkZIZ0tkMjdSQnl0ODBZQm1mZWJCZTFSZyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTQ1OTE4NH0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
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
