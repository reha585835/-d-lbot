module.exports = {
    name: "yardım",
    aliases: ["yardım","help"],
    description: "Komutları gösterir",
    usage: "yardım",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
   message.channel.send(`al sana komutlar \n !çal <istediğiniz müzik> = istediğiniz bir müziği çalar \n !durdur = çalan müziği durdurur\n geç = çalan müziği atlar\n kuyruk = kuyruktaki şarkıları gösterir\nkuyruğu-temizle = kuyruğu temizler`)
    }
}