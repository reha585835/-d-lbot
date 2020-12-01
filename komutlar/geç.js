module.exports = {
    name: "geç",
    aliases: ["geç","skip"],
    description: "sdsdsdsdsdsd",
    usage: "geç",
    ownerOnly: false,
    run: async (message,args,client) => {
        
    
    if(!message.guild.members.cache.get(message.author.id).voice.channel){
            return message.channel.send("> :x: Lütfen sesli bir kanala giriş yapınız")
        }

   if(client.player.isPlaying(message.guild.id) === true) {
      client.player.skip(message.guild.id)
    return message.channel.send(`Şarkı başarı ile atlandı`)
    } else {
       return("> :x: Kuyrukta şarkı yok")
   }
    }}