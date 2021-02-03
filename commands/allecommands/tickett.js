const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'ticket',
    category : 'ticket claim',
    description : 'Returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        const embed = new MessageEmbed()
           .setColor('#0099ff')
            .setTitle('**Solicitatie**')
            .setDescription(`De juiste command om een ticket te maken is **!new**`)
            await message.channel.send(embed)
        
    }
}

