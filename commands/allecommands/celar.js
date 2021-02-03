module.exports = {
    name : 'clear',
    aliases : ['purge'],
    run : async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('Je hebt niet de juiste perms')
        if(!args[0]) return message.channel.send('geef een getal tussen 1-99 in')
        if(isNaN(args[0])) return message.channel.send('Alleen hele getallen')
        if(parseInt(args[0]) > 99) return message.channel.send('Je kan maximaal 99 berichten per keer verwijderen')
        await message.channel.bulkDelete(parseInt(args[0]) + 1)
            .catch(err => console.log(err))
        message.channel.send('ik heb ' + args[0]  + " berichten verwijderd.")
    }
}