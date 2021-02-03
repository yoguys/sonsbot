const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'unban',
    category : 'develoepr worden',
    description : 'Returns latency and API ping',
 
  async run(client, message, args) {
   //perm check
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("`Je hebt de perm BAN_MEMBERS nodig om deze command uittevoeren`");
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("`Ik kan deze command niet uitvoeren! Foutcode:VerifiedAdbullBAN`"); 
 
 
    let reason = args.slice(1).join(" ");
    let userID = args[0];
 
 
    if (!reason) reason = 'Er is geen reden gegeven.';
    if (!args[0]) return message.channel.send('Je moet aangeven wie ik moet unbannen. `\`a!unban ID reden\`');
    if (isNaN(args[0])) return message.channel.send('The ID is fout. \`!unban ID reden\'');
 
    //Excucting
    message.guild.fetchBans().then(async bans => {
      if (bans.size == 0) return message.channel.send('deze server heeft niemand geband');
      let bUser = bans.find(b => b.user.id == userID);
      if (!bUser) return message.channel.send('Deze persoon is niet geband');
      await message.guild.members.unban(bUser.user, reason).catch(err => {
        console.log(err);
        return message.channel.send('Iets is fout gegaan bij de unbanning van de ID');
      }).then(() => {
       message.channel.send(`Ik heb met succes ${args[0]} geunband`);
      });
    });
 
  }
}