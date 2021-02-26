const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message, args) {//splashen
  let abone = message.mentions.members.first()
  let rol = ayarlar.vipROL
  if(!message.member.hasPermission('ADMINISTRATOR')) return
   if(!abone) return message.channel.send('**Special vereceğin kişiyi etiketlemelisin.**')
  var role = message.guild.roles.find(role => role.id === rol); 
  abone.addRole(role);
  let embed = new Discord.RichEmbed()
  .setTitle(`<a:hydrastarrr:802176913757831198> • __\` Vip Rolü Başarıyla Verildi \`__   `)
  .setDescription(`<a:hydra:792002325370634270> • __**\` Yetkili :\`**__ ${message.author}`)
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['vip-ver'],
  permLevel: 0
};

exports.help = {
  name: 'vipver'
};
//splashen