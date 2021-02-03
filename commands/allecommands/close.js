const { Message, Client, MessageAttachment} = require('discord.js')
const fs = require('fs')

module.exports = {
    name : 'close',
    /**
     * @param {Client} client
     * @param {Message} message
     */
    run : async(client, message) => {
      if (!message.member.roles.cache.get('806504497295786021')) return message.channel.send({embed: {
        color: 3447003,
        description: `Je kan deze command niet uitvoeren!`,  
      }});
        if(message.channel.parentID !== '806504234219864116') return message.channel.send({embed: {
            color: 3447003,
            description: `Je kan deze command alleen in tickets gebruiken!`,  
          }});
        const transcriptChannel = message.guild.channels.cache.get('806504451556376597')
        message.channel.send({embed: {
            color: 3447003,
            description: `${message.author.username}, heeft de ticket geclosed!`, 
          }});
        setTimeout(() => {
            message.channel.delete().then(async ch=> {
            })
        }, 5000)
    }
}