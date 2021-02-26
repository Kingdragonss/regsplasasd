const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const kanal = ayarlar.kanal;
const fs = require("fs");
const db = require('quick.db')
require("./util/eventLoader")(client);
const express = require("express");
const app = express();
let prefix = ayarlar.prefix

const http = require("http");
app.get("/", (request, response) => {//splashen
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const log = message => {
  console.log(` => { ${message} } `);

};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {//splashen
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`AKTİF: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {//splashen
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {//splashen
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {//splashen
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};


////////////////////////

client.elevation = message => {//splashen
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  return permlvl;
};

client.login(process.env.token);


client.on("ready", () => {//splashen
  client.user.setPresence({
    game: { name: `🔱King Of HYDRA🔱`, type: "Watching" },
    status: "online"
  });
});



// İSİM YAŞ İSİM DEĞİŞTİRME 

client.on("guildMemberAdd", member => {
  let tag = ayarlar.tag;
  //splashen
  member.setNickname(`${tag} İsim | Yaş`);
});

// İSİM YAŞ İSİM DEĞİŞTİRME SON






//BOT ROLÜ

client.on(`guildMemberAdd`, async member => {//splashen
  let botrol = ayarlar.botROL;
if(!member.bot) return;
member.addRole(botrol)
})

// BOT ROLÜ SON




// kayıtsız rolü

client.on(`guildMemberAdd`, async member => {
  let kayıtsızROL = ayarlar.kayıtsızROL;
if(member.bot) return;
member.addRole(kayıtsızROL)
})

/// kayıtsız rolü son
//splashen


// TAG LOG
client.on("userUpdate", async (oldUser, newUser) => {//splashen
  if (oldUser.username !== newUser.username) {
    let tag = ayarlar.tag
  
    let rol = ayarlar.tagROL;
    
    
   let embed1 = new Discord.RichEmbed()
    .setDescription(`<a:hydraalevv:808620322030878750> **${newUser} ${tag} tagını aldığı için <@&${rol}> rolünü kazandı!**<a:hydraalevv:808620322030878750>`)
    .setImage('https://cdn.discordapp.com/attachments/620989964104237077/766391664163029012/RDF_Barrinha-1-2-1-1-1-1-1-1.gif')
    
    let embed2 = new Discord.RichEmbed()
    .setDescription(`<a:hydraalevv:808620322030878750> **${newUser} ${tag} tagını çıkardığı için <@&${rol}> rolünü kaybetti!**<a:hydraalevv:808620322030878750>`)
    .setImage('https://cdn.discordapp.com/attachments/620989964104237077/766391664163029012/RDF_Barrinha-1-2-1-1-1-1-1-1.gif')
    
    if (newUser.username.includes(tag) && !client.guilds.get(ayarlar.sunucuID).members.get(newUser.id).roles.has(rol)) {
      client.channels.get(ayarlar.tagLOG).send(embed1)
      client.guilds.get(ayarlar.sunucuID).members.get(newUser.id).addRole(rol)
    } if (!newUser.username.includes(tag) && client.guilds.get(ayarlar.sunucuID).members.get(newUser.id).roles.has(rol)) {
      client.guilds.get(ayarlar.sunucuID).members.get(newUser.id).removeRole(rol)
      client.channels.get(ayarlar.tagLOG).send(embed2)
    }

  }
})
// TAG LOG SON
//splashen

// BOT OTOROL


client.on('guildMemberAdd', async member => {//splashen
if(member.user.bot)
member.setRoles(['766634491502395392'])
})
// GİRİŞ 
  client.on("guildMemberAdd", member => { 
    const moment = require('moment');
  const kanal = ayarlar.giriskanal;
  let user = client.users.get(member.id);
  require("moment-duration-format");
    const tarih = new Date().getTime() - user.createdAt.getTime();  
  const embed = new Discord.RichEmbed()
  let rol = ayarlar.kayıtsızROL
 member.addRole(rol)//splashen

  var kontrol;
if (tarih < 1296000000) kontrol = '<a:hydrasiren:792010270037114890> __**Bu Kullanıcı Şüpheli**__ <a:hydrasiren:792010270037114890>'
if (tarih > 1296000000) kontrol = '<a:hydra:792002325370634270> __**Bu Kullanıcı Güvenli**__ <a:hydra:792002325370634270>'
  moment.locale("tr");
  let kanal1 = client.channels.get(kanal);
    let giris = new Discord.RichEmbed()
   .setTitle(`<a:hydraalevv:808620322030878750> | \`✵ HYDRA'ya Bir Üye Katıldı!\` | <a:hydraalevv:808620322030878750>`)
    .setDescription(`
 
**• <a:hydrata2:791857864255078420> __Aramıza Hoşgeldin! ${member}__ <a:hydrata2:791857864255078420>**

  • <a:hydra:792002325370634270> **__Seninle Birlikte ${member.guild.memberCount} Kişiyiz.__ ** <a:hydra:792002325370634270>

  • <a:hydrayidizi4:791092755387514896> \`{ ${ayarlar.tag} }\`** __Tagımızı alarak ekibimize katılabilirsin.__ ** <a:hydrayidizi4:791092755387514896>

  • <a:hydrayildizi3:791092780398673940> ** <@&${ayarlar.yetkiliROL}> __seninle ilgilenecektir.__ ** <a:hydrayildizi3:791092780398673940>

  • <a:hydratac5:791858527966724125> ** __Hesabın Oluşturulma Tarihi:__** <a:hydratac5:791858527966724125> \n • <a:hydratac:789369824249643009> \` ${moment(member.user.createdAt).format("YYYY DD MMMM dddd (hh:mm:ss)")} \`<a:hydratac:789369824249643009>

  • ${kontrol} 

  • <a:hydrakristal:789376165868470303> ** __ Ses teyit odasında kaydınızı yaptırabilirsiniz. __ ** <a:hydrakristal:789376165868470303>

  • <a:hydrakalppp:790708517484625972> **__Artık bizden birisin!__** <a:hydrakalppp:790708517484625972>

`)//splashen
    .setThumbnail(member.user.avatarURL || 'https://images-ext-1.discordapp.net/external/keOmqfDdQg_q8G6dd2TCx2LJzY8JHcDC5Ivty9RcpYY/https/media.discordapp.net/attachments/789194952688533558/803543295753453568/ezgif-3-6ab7341e25b3.gif?width=238&height=202')
    .setImage('https://images-ext-1.discordapp.net/external/keOmqfDdQg_q8G6dd2TCx2LJzY8JHcDC5Ivty9RcpYY/https/media.discordapp.net/attachments/789194952688533558/803543295753453568/ezgif-3-6ab7341e25b3.gif?width=238&height=202')
    .setTimestamp()
kanal1.send(giris)
  

});

client.on("ready", () => {
  client.channels.get("789194953048981569").join();
})
// GİRİŞ SON
//splashen
