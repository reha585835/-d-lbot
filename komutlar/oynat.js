module.exports = {
    name: "oynat",
    aliases: ["oynat","çal"],
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



 var song = client.player.addToQueue(message.guild.id, muzik)

message.channel.send("Başarı ile kuyruğa eklendi: " + muzik)

   } else {
       var song = await client.player.play(message.member.voice.channel, muzik, message.member.user.tag)
       var muzikveri = song.song;

       message.channel.send("Şu an oynatılıyor: " + muzikveri.name)

   }

    }
}