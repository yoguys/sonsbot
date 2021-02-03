
const Discord = require('discord.js');
 
const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'ban',
    category : 'develoepr worden',
    description : 'Returns latency and API ping',
 
  async run(client, message, args) {
   //perm check
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send({embed: {
      color: 3447003,
      description: `Je hebt de niet de juiste permission om deze command uitevoeren!`,  
    }});
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("`Ik kan deze command niet uitvoeren!`"); 
 
 
    let reason = args.slice(1).join("")
    const mentionedMember = message.mentions.members.first();
 
 
    if (!reason) reason = 'Er is geen reden gegeven.';
    if (!args[0]) return message.channel.send({embed: {
      color: 3447003,
      description: `Je moet aangeven wie ik moet bannen !ban <persoon> <reden>`,  
    }});
    if (!mentionedMember) return message.channel.send({embed: {
      color: 3447003,
      description: `Deze persoon zit niet in deze server!`,  
    }});
    if (!mentionedMember.bannable) return message.channel.send({embed: {
      color: 3447003,
      description: `Ik kan deze persoon niet bannen!`,  
    }});
 
    //Excucting
   const banEmbed = new Discord.MessageEmbed()
         .setTitle(`Je bent geband van ${message.guild.name}`)
         .setDescription(`Reden: ${reason}`)
         .setColor("#FF0000")
         .setTimestamp()
   .setFooter(client.user.tag, client.user.displayAvatarURL());
    await mentionedMember.send(banEmbed).catch(err => console.log(err));
    await mentionedMember.ban({
      days: 7,
      reason: reason
    }).catch(err => console.log(err)).then(() => message.channel.send("Ik heb deze persoon geband " + mentionedMember));
  }
}