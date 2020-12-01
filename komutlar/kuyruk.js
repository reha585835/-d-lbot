module.exports = {
    name: "oynat",
    aliases: ["oynat","oynat1"],
    description: "sdsdsdsdsdsd",
    usage: "oynat",
    ownerOnly: false,
    run: async (message,args,client) => {

        if(!args[0]) {
            return message.channel.send("Lütfen bir şarkı adı yazınız.")
        } 

        var muzik = message.content.slice(6)


   if(client.player.isPlaying(message.guild.id) === true) {
//kuyruğa ekleme kısmı


if(!message.guild.members.cache.get(message.author.id).voice.channel){
    return message.channel.send("> :x: Lütfen sesli bir kanala giriş yapınız")
}

let queue = await client.player.getQueue(message.guild.id);
message.channel.send('Sunucuda çalan şarkı listesi:\n'+(queue.songs.map((song, i) => {
    return `${i === 0 ? 'Şu anda oynayılıuor' : `#${i+1}`} - ${song.name} | ${song.author}`
}).join('\n')));

   } else {
   return message.channel.send("şu anda şarkı çalmıyor")
   }
}}