const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message, args) {//splashen
  let jailli = message.mentions.members.first()
  let sebep = args.slice(1).join(' ')
  let rol = ayarlar.jailROL
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu işlemi sadece yetkililer yapabilir')
   if(!jailli) return message.channel.send('Jaile atacağın kişiyi etiketlemelisin.')
  if(!sebep) return message.channel.send('Jail sebebini belirtmelisin.')
  
  var role = message.guild.roles.find(role => role.id === rol); 
  jailli.addRole(rol);
  
  let embed2 = new Discord.RichEmbed()
  .setThumbnail(jailli.user.avatarURL)
  .setTitle(` <a:hydratk:798145168758669332> • __\`Bir Kullanıcı Jaile Atıldı \`__   `)
  .setDescription(`
<a:hydratk:798145168758669332> • __**\`Yetkili\`**__ ${message.author}
<a:hydratk:798145168758669332> • __**\`Kullanıcı\`**__ ${jailli} 

<a:hydratk:798145168758669332> • __**\`Jaile Atılma Sebebi\`**__ \n• __\`${sebep}\`__
`)
  
  let embed = new Discord.RichEmbed()
  .setTitle(` <a:hydratk:798145168758669332> • __\`Kullanıcı Başarıyla Jaile Atıldı\`__   `)
  .setDescription(`<a:hydratk:798145168758669332> • __**\`Yetkili\`**__ ${message.author}`)
  message.channel.send(embed).then(m => m.delete(4000))
  client.channels.get(ayarlar.jailLOG).send(embed2)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['jail-ver'],
  permLevel: 0
};

exports.help = {
  name: 'jail'
};
//splashen