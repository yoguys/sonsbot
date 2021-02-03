const { Message } = require('discord.js')

module.exports=  {
    name : 'unmute', 
    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if(!Member) return message.channel.send({embed: {
            color: 3447003,
            description: `Persoon niet gevonden!`,  
          }});

        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

        await Member.roles.remove(role)

        message.channel.send({embed: {
            color: 3447003,
            description: `${Member.displayName} is nu geunmute!`,  
          }}); message.author.send(`je hebt ${Member.displayName} geunmute in ${message.guild.name} `)
    }
}