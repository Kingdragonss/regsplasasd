const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {//splashen
    let tag = ayarlar.tag
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let sesli = 0
    for (const [id, voiceChannel] of voiceChannels) sesli += voiceChannel.members.size;

    const embedsay = new Discord.RichEmbed()
        .setTitle(`\`• ${message.guild.name} İstatistikleri \` `)
        .setDescription(` 
         <a:hydraalevv:808620322030878750>  • **__Sunucudaki üye sayısı__** \`${message.guild.memberCount}\` <a:hydraalevv:808620322030878750>
         
         <a:hydratac:789369824249643009>   **__Offline üye sayısı__** \`${message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size}\` <a:hydratac:789369824249643009>
         
         <a:hydraalevv:808620322030878750> **__Seslideki üye sayısı__** \`${sesli}\` <a:hydraalevv:808620322030878750>
         
         <a:hydratac:789369824249643009>   **__Tagdaki üye sayısı__** \`${message.guild.members.filter(tag => tag.user.username.includes(tag)).size}\`<a:hydratac:789369824249643009>`) 
    
        .setImage(`https://media.discordapp.net/attachments/760846719901499393/785512882347442176/ezgif-6-4d25fab312fa.gif?width=275&height=206`)
    message.channel.send(embedsay);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['total'],
    permLevel: 0
};

exports.help = {
    name: 'say'
  //splashen
}