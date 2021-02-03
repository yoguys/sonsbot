const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'unclaim',
    category : 'ticket claim',
    description : 'Returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        
        if (!message.member.roles.cache.get('795052226234023957')) return message.channel.send({embed: {
            color: 3447003,
            description: `Je kan deze command niet uitvoeren!`,  
          }});
          if(message.channel.parentID !== '795573310288560140') return message.channel.send({embed: {
            color: 3447003,
            description: `Je kan deze command alleen in tickets gebruiken!`,  
          }});
        const msg = await message.channel.send(`Unclaiming........`)
        const embed = new MessageEmbed()
            .setTitle('unclaimed!')
            .setDescription(`${message.author.username},heeft de ticket geunclaimed`)
            await message.channel.send(embed)
            msg.delete()
    }
}