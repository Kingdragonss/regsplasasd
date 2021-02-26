const Discord = require("discord.js");
const db = require('quick.db');


exports.run = async (client, message, args) => {//splashen
  let yetkili = message.author
let erkek = db.fetch(`erkek_${message.author.id}_${message.guild.id}`)
let kız = db.fetch(`kız_${message.author.id}_${message.guild.id}`)
let toplam = erkek+kız
var embed = new Discord.RichEmbed()
.setTitle(`• \`Kayıt Bilgileri\``)

.setDescription(`

• <a:hydrastarrr:802176913757831198> __ **Yetkili :** ${yetkili} __  \` { ${yetkili.id} } \`

• <a:hydratac:789369824249643009> **__Toplam üye kayıt sayısı :__** \` ${toplam} \`

• <a:hydrastarrr:802176913757831198> **__Toplam kız kayıt sayısı :__** \` ${kız} \`

• <a:hydratac:789369824249643009>  **__Toplam erkek kayıt sayısı :__** \` ${erkek} \`



`)
.setThumbnail(yetkili.avatarURL)
.setImage('https://cdn.discordapp.com/attachments/620989964104237077/766391664163029012/RDF_Barrinha-1-2-1-1-1-1-1-1.gif')
message.reply(embed)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tk'
};//splashen