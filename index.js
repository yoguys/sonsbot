const {Collection, Client, Discord} = require('discord.js')
const fs = require('fs')
const ms = require('ms')



var roblox = require('noblox.js')
const antiLink = require("anti-link-discord")
const avatarEmbed = require('discord.js-avatar');
const AntiSpam = require('discord-anti-spam');
const fetch = require('node-fetch');
const api = require("imageapi.js");

const got = require('got');
const { Mongoose } = require('mongoose')
const client = new Client({
    disableEveryone: true
});
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://verified:adbull@antwerpenbot.ofmst.mongodb.net/Data', {
    useUnifiedTopology : true,
    useNewUrlParser: true,
}).then(console.log('Connected to Mongo DB!'))
const config = require('./config.json')
const prefix = config.prefix
const token = config.token
client.ticketCategory = '806504234219864116'
client.commands = new Collection();
client.aliases = new Collection();
const Timeout = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 
client.on("ready", () => {
    client.user.setActivity(`Sons of Garmadon`, { type: 'WATCHING' })
    console.log("Ik ben klaar voor gebruik!")
})
client.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 

})




client.on('message', message => {
    // If the message is "what is my avatar"
    if (message.content === 'willen jullie boost') {
      // Send the user's avatar URL
      message.reply(`Tuurlijk willen we een boost :D`);
    }
  });

 
  
  

  client.on('message', async message => {
    antiLink(client, message, {
          staffRole: "ROLEID", // staff/admin/mod role id (will ignore this role)
          warnMSG: `<@${message.author.id}> Je mag geen links sturen!`, // warn message
      });                  
});
const antiSpam = new AntiSpam({
    warnThreshold: 5, // Amount of messages sent in a row that will cause a warning.
    kickThreshold: 7, // Amount of messages sent in a row that will cause a ban.
    banThreshold: 10, // Amount of messages sent in a row that will cause a ban.
    maxInterval: 2000, // Amount of time (in milliseconds) in which messages are considered spam.
    warnMessage: '{@user}, stop met spammen.', // Message that will be sent in chat upon warning a user.
    kickMessage: '**{user_tag}** is gekickt voor spam.', // Message that will be sent in chat upon kicking a user.
    banMessage: '**{user_tag}** is geband voor spam! 40 woorden achter elkaar.', // Message that will be sent in chat upon banning a user.
    maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesKick: 10, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesBan: 12, // Amount of duplicate messages that trigger a warning.
    exemptPermissions: [ 'ADMINISTRATOR'], // Bypass users with any of these permissions.
    ignoreBots: true, // Ignore bot messages.
    verbose: true, // Extended Logs from module.
    ignoredUsers: [], // Array of User IDs that get ignored.
    // And many more options... See the documentation.
});
 
client.on('ready', () => console.log(`Logged in as ${client.user.tag}.`));
 
client.on('message', (message) => antiSpam.message(message)); 

client.on('message', message => {
	if (message.content === `info`) {
		message.channel.send(`Jouw discord naam is: ${message.author.username}#${message.author.discriminator}\nEn jouw ID is: ${message.author.id}`);
	}
});

client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === `${prefix}membercount`) {
    // Send the user's avatar URL
    message.channel.send({embed: {
      color: 3447003,
      description: `Er zijn ${message.guild.memberCount} leden in ${message.guild.name}`,  
    }});
  }
});





client.on("guildMemberAdd", member => {
  member.send({
    embed: {
      color: 3447003,
      description:
        "Welkom in Antwerpen! ga naar <#796319783075053588> en link je roblox account"
    }
  });
});

client.on("guildMemberAdd", member => {
  let channel = client.channels.get("806502660261150743");

  const embed = new Discord.RichEmbed()
    .setColor("#2ecc71")
    .setTitle(`**!!Welcome!!**`)
    .setDescription(
      `**Welcome!** ${member} **Welkom in ${guild.name} `
    )
    .setAuthor("Welkom bij de dood")
    .setTimestamp();

  channel.send(embed);
});

client.on("guildMemberRemove", member => {
  let channel = client.channels.get("806502660261150743");

  const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle(`**Naaier**`)
    .setDescription(` ${member} Heeft ons verraden. :angry: `)
    .setTimestamp();

  channel.send(embed);
});




client.login(token)