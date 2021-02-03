
module.exports = {
    name : 'nuke',
    category : 'nuke',
    description : 'nuke command',

 
  async run(client, message, args) {
    //a!nuke reason
    //perms check
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Uhm nee ik ga deze channel niet nuken :P");
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Ik heb niet de juiste rechten om deze command uittevoeren");
 
   //varia
   let reason =  args.join(" ");
   const nukeChannel = message.channel;
 
   //input
   if (!reason) reason = "Geen reden gegeven.";
   if (!nukeChannel.deletable) return message.channel.send("Ik kan deze channel niet nuken");
 
    //Exe
    await nukeChannel.clone().catch(err => console.log(err));
    await nukeChannel.delete(reason).catch(err => console.log(err));


  }
}