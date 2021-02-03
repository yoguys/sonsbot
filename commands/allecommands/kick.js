const Discord = require('discord.js');
module.exports = {
    name : 'kick',
    category : 'kicken',
    description : 'Kick command',

  async run(client, message, args) {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Je kan deze command niet gebruiken!");
    const mentionedMember = message.mentions.members.first();
    let reason = args.slice(1).join(" ")
    if (!reason) reason = "Geen reden gegeven";
    const KickEmbed = new Discord.MessageEmbed()
      .setTitle(`Je bent gekickt van ${message.guild.name}`)
      .setDescription(`Reden: ${reason}`)
      .setColor("#FF0000")
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL());
 
    // -kick @user dm ads
    if (!args[0]) return message.channel.send("Je moet aangeven wie ik moet kicken");
    if (!mentionedMember) return message.channel.send("De persoon bevind zich niet in de server");
    if (!mentionedMember.kickable) return message.channel.send('Ik kan deze persoon niet kicken');
    try {
      await mentionedMember.send(KickEmbed); return message.channel(`Ik heb deze persoon geband " + ${mentionedMember}`)
 
    } catch (err) {
      console.log(`Ik heb de persoon geen bericht gestuurd dat hij gekick is \n reden : DM is dicht.`);
    }
 
    try {
      await mentionedMember.kick(reason)
    }catch (err) {
      console.log(err);
      return message.channel.send("Ik kon de persoon niet kicken");
 
    }
  }
}

