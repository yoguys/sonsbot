const { Client, Message } = require('discord.js')
const Discord = require('discord.js');
 
module.exports = {
    name : 'co',
    /**
     * @param {Client} client
     * @param {Message} message
     */
    run : async(client, message) => {
        const ch = message.guild.channels.cache.find(ch => ch.name === message.author.username)
        if(ch) return message.channel.send('Je hebt al een ticket open!')
        message.guild.channels.create(`${message.author.username}-solicitatie`, {
            type : 'text',
            parent : '795974578315984898',
            permissionOverwrites : [
                {
                    id : message.guild.id,
                    deny : ['VIEW_CHANNEL']
                },
                {
                    id : message.author.id,
                    allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ADD_REACTIONS', 'ATTACH_FILES']
                }
            ]
        }).then(async channel=> {
            const msg = await message.channel.send(`Solicitatie aan het laden.`)
             const embed = new Discord.MessageEmbed()
             .setColor('#0099ff')
             .setTitle(' Je Solicitatie is gemaakt! ')
            .setDescription(`Je Solicitatie is gemaakt in <#${channel.id}> Druk erop om hem te bekijken!\n **Reageer zeker op tijd om de risco dat je ticket geclosed te worden te vermijden** \n als je klaar bent tag je een Co-creator`)
            await message.channel.send(embed);
            msg.delete();
            channel.send(`${message.author}, Welkom!`)
      const exampleEmbed = new Discord.MessageEmbed()
                 .setColor('#0099ff')
                 .setTitle(`Hey, ${message.author.username}`)
                 .setDescription('Welkom bij je Solicitatie, als je klaar bent tag een VerifiedAdbull')
                 .setTimestamp()
	            .setFooter('Antwerpen, Belgium');
            channel.send(exampleEmbed);
            channel.send(`Wat is je naam? \n hoe oud ben je \n vertel eens over je zelf \n stuur fotos van je creatie`)
        })
    }
}