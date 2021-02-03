const { Client, Message } = require('discord.js')
const Discord = require('discord.js');
 
module.exports = {
    name : 'new',
    /**
     * @param {Client} client
     * @param {Message} message
     */
    run : async(client, message) => {
        const ch = message.guild.channels.cache.find(ch => ch.name === `ticket-${message.author.username.toLowerCase()}-${message.author.discriminator}`)
        if(ch) return message.channel.send({embed: {
            color: 3447003,
            description: `${message.author.username} je hebt al een ticket open!`,  
          }})
          
        message.guild.channels.create(`ticket-${message.author.username}-${message.author.discriminator}`,
          {
            type : 'text',
            parent : '806504234219864116',
            permissionOverwrites : [
                {
                    id : message.guild.id,
                    deny : ['VIEW_CHANNEL']
                },
                {
                    id : message.author.id,
                    allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ADD_REACTIONS', 'ATTACH_FILES']
                },
                {
                    id: message.guild.roles.cache.get('806504497295786021'),
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                }
            ]
        }).then(async channel=> {
            const msg = await message.channel.send(`:wrench: Ticket aan het maken.......`)
             const embed = new Discord.MessageEmbed()
             .setColor('#0099ff')
             .setTitle('Ticket aan het maken :wrench: ')
            .setDescription(`Je ticket is gemaakt in <#${channel.id}> Druk erop om hem te bekijken! Reageer zeker op tijd om de risco dat je ticket geclosed te worden te vermijden`)
            await message.channel.send(embed);
            msg.delete();
            channel.send(`${message.author}, Welkom! @here`)
      const exampleEmbed = new Discord.MessageEmbed()
                 .setColor('#0099ff')
                 .setTitle(`Hey, ${message.author.username}`)
                 .setDescription('Welkom bij je ticket, we helpen je zometeen leg alvast je klacht/vraag')
                 .setTimestamp()
	            .setFooter('Antwerpen, Belgium');
            channel.send(exampleEmbed);

            
 
        })
    }
}