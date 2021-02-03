const Discord = module.require("discord.js");

module.exports = {
    name: "unlock",
    description: "unLocks a Channel",
   run: async(client, message, args) => {
   if (!message.member.hasPermission('MANAGE_CHANNELS')) {
   return message.channel.send({embed: {
    color: 3447003,
    description: `Je kan deze command niet uitvoeren!`,  
  }});
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        null : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Channel unlock!")
   .setDescription(`${message.channel} is geunlockt door ${message.author.username}`)
   .setColor("BLUE");
   await message.channel.send(embed);
   message.delete();
}
}