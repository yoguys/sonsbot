const {Message, MessageEmbed}= require('discord.js')
const ms = require('ms')


module.exports = {
    name : 'mute',
    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
        if (!message.member.roles.cache.get('795052226234023957')) return message.channel.send({embed: {
            color: 3447003,
            description: `Je kan deze command niet uitvoeren!`,  
          }});
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!Member) return message.channel.send({embed: {
            color: 3447003,
            description: `Persoon bevind zich niet in de server`,  
          }});
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
        if(!role) {
            try {
                message.channel.send({embed: {
                    color: 3447003,
                    description: `Muted role is er niet!`,  
                  }});

                let muterole = await message.guild.roles.create({
                    data : {
                        name : 'muted',
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.channel.send({embed: {
                    color: 3447003,
                    description: `Ik heb de role muted aan`,  
                  }});
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        if(Member.roles.cache.has(role2.id)) return message.channel.send({embed: {
            color: 3447003,
            description: `${Member.displayName} is al gemute`,  
          }});
        await Member.roles.add(role2)
        message.channel.send({embed: {
            color: 3447003,
            description: `${Member.displayName} is gemute!`,  
          }}); message.author.send(`je hebt ${Member.displayName} gemute in ${message.guild.name} vergeet hem niet te unmute!`)


         
        }
    }
