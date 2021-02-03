const Discord = require('discord.js');

module.exports = {
    name: "av",
  aliases : ['avatar'],
  description: "Shows all available bot commands.",

    async run (client, message, args) {

        let member = message.mentions.users.first() || message.author

        let avatar = member.avatarURL({dynamic : true, size: 1024})
       
        

        const embed = new Discord.MessageEmbed()
        .setTitle(`${member.username}'s avatar`)
        .setImage(avatar)
        .setColor("BLUE")

        message.channel.send(embed);
    }
}