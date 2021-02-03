const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "suggest",
  usage: "suggest <message>",
  description: "Send your Suggestion",
  category: "main",
  run: (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Geef een suggestie op!")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "suggesties" || x.name === "suggesties"))
    
    
    if(!channel) {
      return message.channel.send("Geen kanaal met de naam - suggesties")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setAuthor("SUGGESTIE VAN: " + message.author.tag, message.author.avatarURL())
    .setThumbnail(message.author.displayAvatarURL({dynamic : true}))
    .setColor("#ff2050")
    .setDescription(args.join(" "))
    .setTimestamp()
    
    
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("🤷‍♂️")
      m.react("❌")
    })
    

    
    message.channel.send(`We hebben je suggestie verstuurd naar <#${channel.id}> `)
    
  }
}