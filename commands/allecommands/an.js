const Discord = require('discord.js');

module.exports = {
    name : 'an',
    category : 'develoepr worden',
    description : 'Returns latency and API ping',
  async run(client, message, args) {
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("`Je hebt de role KICK_MEMBERS nodig om deze command uittevoeren`");
    const messageToSay = args.join(" ");
    const sayEmbed = new Discord.MessageEmbed()
    .setTitle(`${messageToSay}`)
     .setFooter(message.author.tag ,message.author.displayAvatarURL())
     .setColor("BLUE")
     .setTimestamp();
   try {
     await message.channel.send(sayEmbed)
   } catch (err) {
     console.log(err);
     message.channel.send('Foutcode : VerifiedAdbullmessages. De bestand is te groot!')
   }
  }
}