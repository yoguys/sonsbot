const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'politie',
    category : 'ticket claim',
    description : 'Returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        const msg = await message.channel.send(`${message.author}`)
        const embed = new MessageEmbed()
           .setColor('#0099ff')
            .setTitle('**Solicitatie**')
            .setDescription(`Check je dms :D \n **let op als de solicitatie voor deze eenheid niet open zijn dan kan je ook niet soliciteren!**`)
            await message.channel.send(embed)
            message.author.send({embed: {
                color: 3447003,
                author: {
                  name: client.user.username,
                  icon_url: client.user.avatarURL
                },
                title: "Druk hier op!",
                url: "https://docs.google.com/forms/u/2/d/1T3HbXj10zwnnz0_0Bo_BX1wcFGrza1w0feFOdL6pxe4/edit",
                description: "Wat leuk dat je wilt solciteren voor de Politie korps van antwerpen vul de solicitatie in!",

                timestamp: new Date(),
                footer: {
                text: "© Antwerpen, Belgium"
                  
                }
              }
            });
        
    }
}


