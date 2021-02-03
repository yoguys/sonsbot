const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "serverinfo",
    category: "extra",
    run: async (client, message, args) => {
        let region;
        switch (message.guild.region) {
            case "europe":
                region = '🇪🇺 Europe';
                break;
            case "us-east":
                region = '🇺🇸 us-east'
                break;
            case "us-west":
                region = '🇺🇸 us-west';
                break;
            case "us-south":
                region = '🇺🇸 us-south'
                break;
            case "us-central":
                region = '🇺🇸 us-central'
                break;
        }

        const embed = new MessageEmbed()
            .setThumbnail(message.guild.iconURL({dynamic : true}))
            .setColor('#f3f3f3')
            .setTitle(`${message.guild.name} server info`)
            .addFields(
                {
                  name: "Owners: ",
                  value: `VerifiedAdbull#0001 | :crown: Ellin#9999 :crown:  | BABABOEY#0001`,
                  inline: true
              },
                {
                    name: "Members: ",
                    value: `Er zijn ${message.guild.memberCount} personen!`,
                    inline: true
                },
                {
                    name: "Members Online: ",
                    value: `Er zijn ${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} personen online!`,
                    inline: true
                },
                {
                    name: "Hoeveelheid Bots: ",
                    value: `Er zijn ${message.guild.members.cache.filter(m => m.user.bot).size} bots!`,
                    inline: true
                },
                {
                    name: "Gemaakt op: ",
                    value: message.guild.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: "Roles: ",
                    value: `Er zijn ${message.guild.roles.cache.size} roles in deze server.`,
                    inline: true,
                },
                {
                    name: `🗺 regio: `,
                    value: region,
                    inline: true
                },
                {
                    name: `Verified: `,
                    value: message.guild.verified ? 'Server is  verified' : `Server is niet geverified`,
                    inline: true
                },
                {
                    name: 'Boosters: ',
                    value: message.guild.premiumSubscriptionCount >= 1 ? `Er zijn ${message.guild.premiumSubscriptionCount} boost` : `geen boost`,
                    inline: true
                },
                {
                    name: "Emojis: ",
                    value: message.guild.emojis.cache.size >= 1 ? `Er zijn ${message.guild.emojis.cache.size} emojis!` : 'Er zijn geen emojis' ,
                    inline: true
                }
            )
        await message.channel.send(embed)
    }
}