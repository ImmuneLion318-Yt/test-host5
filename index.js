const Discord = require("discord.js");
const token = "NjM4NTAwODc4MzI3ODczNTM4.Xbi4Ng.Uctjq21xYK4l9zYEZMb01BEGPUE";
var bot = new Discord.Client();
const prefix = "!"

bot.on("ready", function() {
console.log("Ready");
});

bot.on("message", function(message) {
if (message.author.equals(bot.user)) return;

if (message.content == "!link") {
  message.channel.sendMessage("Here Is The Link To Invite Me To Your Server https://discordapp.com/api/oauth2/authorize?client_id=638500878327873538&permissions=8&scope=bot");
  (msg => msg.delete(3000));
  }

if (message.content == "!creator") {
  message.channel.sendMessage("ImmuneLion318 Is My Creator He Made Me He Wrote Me In C#");
  then(msg => msg.delete(3000));
}

if (message.content == "!help") {
  message.channel.sendMessage("Go To 📟bot-commands For A List Of Bot Commands To Use")
  (msg => msg.delete(3000));
}

if(!message.member.roles.find(r => r.name === "Owner")) return message.channel.send('You Do Not Have Permissions To Execute That!')
.then(msg => msg.delete(3000));

if(message.content.startsWith(`${prefix}kick`)) {

let member = message.mentions.members.first();
member.kick().then((member) => {
message.channel.send(":wave: " + member.displayName + "Has Been Kicked From The Server!")


       })  
    }
});

bot.login(token);