const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'voicekick',
    category : 'kicken',
    description : 'Returns latency and API ping',

    run: async (client, message, args) => {
      if (!message.guild.me.hasPermission(["ADMINISTRATOR"]))
        return message.channel.send(
          "Ik heb geen perms om hem te kicken"
        );
  
      if (!message.mentions.members.first())
        return message.channel.send(
          `Geef aan wie ik moet kicken van de voice channel!`
        );
  
      let { channel } = message.mentions.members.first().voice;
  
      if (!channel)
        return message.channel.send(`Deze persoon bevind zich niet in der voice channel`);
  
      message.mentions.members.first().voice.kick();
      
      message.channel.send(`Ik heb de persoon gekickt van ${message.guild.name}`)
    }
  };