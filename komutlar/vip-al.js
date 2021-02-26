const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message, args) {//splashen
  let abone = message.mentions.members.first()
  let rol = ayarlar.vipROL
  if(!message.member.hasPermission('ADMINISTRATOR')) return
   if(!abone) return message.channel.send('**Special alacağın kişiyi etiketlemelisin.**')
  var role = message.guild.roles.find(role => role.id === rol); 
  abone.removeRole(role);
  let embed = new Discord.RichEmbed()
  .setTitle(` <a:hydrastarrr:802176913757831198>• __\` Special Rolü Başarıyla Alındı \`__   `)
  .setDescription(`<a:hydra:792002325370634270> • __**\` Yetkili :\`**__ ${message.author}`)
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['vip-al'],
  permLevel: 0
};

exports.help = {
  name: 'vipal'
};
//splashen