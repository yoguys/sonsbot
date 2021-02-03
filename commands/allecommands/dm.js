module.exports = {
    name: "dm",
    description: "DM a user in the guild",
    category: "fun",
    run: async (bot, message, args) => {
      if (!message.member.permissions.has("MANAGE_MESSAGES"))
        return message.channel.send("Je bent niet cool genoeg om deze command uitevoeren :D");
      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);
      if (!user)
        return message.channel.send(
          `Geef aan wie ik moet dm!`
        );
      if (!args.slice(1).join(" "))
        return message.channel.send("Wat moet ik zeggen?");
      user.user
        .send(args.slice(1).join(" "))
        .catch(() => message.channel.send("Zijn DM is mogelijk dicht."))
        .then(() => message.channel.send(`Heb naar ${user.user.tag} de bericht gestuurd!`));
    },
  };