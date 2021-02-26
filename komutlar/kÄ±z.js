const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')


exports.run = async (client, message, args) => {//splashen

    let kadınROL = ayarlar.kadınROL 
    let kayıtsızROL = ayarlar.kayıtsızROL
    let kayıtlıROL = ayarlar.kayıtlıROL
    let yetkili = ayarlar.yetkiliROL
    let kayıtLOG = ayarlar.kayıtLOG

    if(!message.member.roles.has(yetkili)) return message.channel.send('**Bu işlemi sadece yetkililer yapabilir**')


if(!args[0]) return message.channel.send(`**<a:hydraalevv:808620322030878750> Bir kişiyi etiketlemelisin. <a:hydraalevv:808620322030878750>**`)
  
let kullanıcı = message.mentions.users.first()
if(!kullanıcı) return message.channel.send(`${args[0]}, kullanıcısını sunucuda bulamıyorum. <a:hydraalevv:808620322030878750>`)
if(kullanıcı.bot) return;
  
  
  
  const kurulus = new Date().getTime() - kullanıcı.createdAt.getTime();  
   var kontrol;
if (kurulus < 1296000000) kontrol = 'Şüpheli'
if (kurulus > 1296000000) kontrol = 'Güvenli'
  
  
  
let isim = args[1];
if(!isim) return message.channel.send(`**<a:hydraalevv:808620322030878750> Üyenin ismini belirtmelisin.**`)
if(isim.length > 16) return message.channel.send(`**Daha kısa bir isim yaz.**`)

let yaş = args[2];
if(!yaş) return message.channel.send(`**<a:hydraalevv:808620322030878750> Üyenin yaşını belirtmelisin.**`)
if(yaş.length > 100) return message.channel.send(`**Üyenin yaşı 100'den büyük olamaz.**`)
  
const emb = new Discord.RichEmbed()
.setAuthor(client.user.username, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setTimestamp()
.setColor(`RANDOM`)
.setFooter(`Kayıt Başarılı`)
let kız = db.fetch(`kız_${message.author.id}_${message.guild.id}`)
let erkek = db.fetch(`erkek_${message.author.id}_${message.guild.id}`)
let toplam = erkek+kız
message.guild.members.get(kullanıcı.id).setNickname(`✵ ${isim} | ${yaş}`)
message.guild.members.get(kullanıcı.id).addRole(kadınROL) 
message.guild.members.get(kullanıcı.id).addRole(kayıtlıROL)
message.guild.members.get(kullanıcı.id).removeRole(kayıtsızROL)
message.guild.members.get(kullanıcı.id).send(emb.setDescription(`<a:hydragoldstar:791092863806996520> • Kaydın başarıyla ${message.author} tarafından yapıldı. \n <a:hydragoldstar:791092863806996520> • Sunucudaki İsmin : **${isim} | ${yaş}** \n <a:hydragoldstar:791092863806996520> • Kurallar kanalımızı okumayı unutma! \n <a:hydragoldstar:791092863806996520> • Tagımızı alarak **AİLEMİZE** katılabilirsin [✵] \n <a:hydragoldstar:791092863806996520> • İyi Eğlenceler `))
  db.add(`kız_${message.author.id}_${message.guild.id}`, "1")
let embed2 = new Discord.RichEmbed()
.setTitle(`• <a:hydraalevv:808620322030878750> Bir Kullanıcı Kayıt Oldu.`)
.setDescription(`
<a:hydragoldstar:791092863806996520> **Kayıt Olan Kullanıcı:** ${kullanıcı}\`{ ${kullanıcı.id} }\`<a:hydragoldstar:791092863806996520>

<a:hydrakalppp:790708517484625972> **İsim Yaş:** \`✵ ${isim} | ${yaş} \`<a:hydrakalppp:790708517484625972>

<a:hydrayidizi4:791092755387514896> **Verilen Rol:** <@&${kadınROL}> \`  { ${kadınROL} }  \` <a:hydrayidizi4:791092755387514896>

<a:hydra:792002325370634270> **Bu Hesap:** \`  { ${kontrol} }  \` <a:hydra:792002325370634270>

<a:hydrakristal:789376165868470303> **Sunucumuz şu an** \` ${message.guild.members.size} \`** kişi ** <a:hydrakristal:789376165868470303>

<a:hydrata2:791857864255078420> **Kayıt eden:** ${message.author} \`  { ${message.author.id} }  \` <a:hydrata2:791857864255078420>

<a:hydrayildizi3:791092780398673940> **{ ${message.author} } Toplam kayıt sayısı =**  \` ${toplam} \` <a:hydrayildizi3:791092780398673940>

 **{    __Toplam Erkek Kaydı =  \` ${erkek} \` Toplam Kız Kaydı= \` ${kız} \`__  }**  
`)
.setImage('https://media.discordapp.net/attachments/795277978581336064/807957359405039646/415edcd7b03dd241e3dac206d2106a6b.gif')



client.channels.get(ayarlar.kayıtLOG).send(embed2)
let embed3 = new Discord.RichEmbed()
.setTitle(`• <a:hydraalevv:808620322030878750> Kayıt Başarıyla Tamamlandı!.`)
.setDescription(`
<a:hydragoldstar:791092863806996520> **Kayıt Olan Kullanıcı:**${kullanıcı} \`{ ${kullanıcı.id} }\`<a:hydragoldstar:791092863806996520>

<a:hydrakalppp:790708517484625972> **İsim Yaş:** \`✵ ${isim} | ${yaş} \` <a:hydrakalppp:790708517484625972>

<a:hydrayidizi4:791092755387514896> **Verilen Rol:** <@&${kadınROL}> <a:hydrayidizi4:791092755387514896>

<a:hydra:792002325370634270> **Bu Hesap:** \`  { ${kontrol} }  \` <a:hydra:792002325370634270>

<a:hydrata2:791857864255078420> **Sunucumuz şu an**  \` ${message.guild.members.size} \`** kişi ** <a:hydrata2:791857864255078420>

<a:hydrayildizi3:791092780398673940> **Kayıt eden:** ${message.author}  <a:hydrayildizi3:791092780398673940>
`)
.setImage('https://media.discordapp.net/attachments/795277978581336064/807957359405039646/415edcd7b03dd241e3dac206d2106a6b.gif')
message.channel.send(embed3)


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k'],
  permLevel: 0
};

exports.help = {
  name: 'kadın'
}//splashen