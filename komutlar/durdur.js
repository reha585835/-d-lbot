module.exports = {
    name: "durdur",
    aliases: ["durdur","stop"],
    description: "sdsdsdsdsdsd",
    usage: "durdur",
    ownerOnly: false,
    run: async (message,args,client) => {
 
  if(client.player.isPlaying(message.guild.id) == true) {

    if(!message.guild.members.cache.get(message.author.id).voice.channel){
      return message.channel.send("> :x: Lütfen sesli bir kanala giriş yapınız")
  }

    client.player.stop(message.guild.id);

    return message.channel.send("Şarkı durduruldu")


  }else{
  return message.channel.send("şu an bir şarkı çalmıyor")
  }


    }}