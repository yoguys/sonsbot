const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'sollistatus',
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
            .setTitle('**Solicitatie status**')
            .setDescription(`Ambulance : open \n Politie : open \n wegenwacht : Open \n Militaire Politie : open \n Diriecte Speciale eenheden : gesloten  \n Defensie : gesloten \n Brandweer : open`)
            await message.channel.send(embed)
        
    }
}