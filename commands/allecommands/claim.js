const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'claim',
    category : 'ticket claim',
    description : 'Returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        if (!message.member.roles.cache.get('806504497295786021')) return message.channel.send({embed: {
            color: 3447003,
            description: `Je kan deze command niet uitvoeren!`,  
          }});
          if(message.channel.parentID !== '806504234219864116') return message.channel.send({embed: {
            color: 3447003,
            description: `Je kan deze command alleen in tickets gebruiken!`,  
          }});
        const msg = await message.channel.send(`Claiming........`)
        const embed = new MessageEmbed()
            .setTitle('Geclaimed!')
            .setDescription(`${message.author.username},heeft de ticket geclaimed alleen hij/zij mag erin praten!`)
            await message.channel.send(embed)
            msg.delete()
            
    }
}