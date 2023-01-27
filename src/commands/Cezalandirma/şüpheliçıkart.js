const moment = require("moment");
moment.locale("tr");
const penals = require("../../schemas/penals");
const conf = require("../../configs/sunucuayar.json")
const settings = require("../../configs/settings.json")
const { red, green, Revuu} = require("../../configs/emojis.json")
module.exports = {
  conf: {
    aliases: ["şüpheliçıkart"],
    name: "şüpheliçıkart",
    help: "şüpheliçıkart"
  },

  run: async (client, message,  args, embed) => {
    if (!message.member.hasPermission(8) && !conf.jailHammer.some(x => message.member.roles.cache.has(x))) 
    {
    message.react(red)
    message.channel.send( "Yeterli yetkin bulunmuyor!").then(x=>x.delete({timeout:5000})) 
    return }
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!member) {
    message.react(red)
    message.channel.send( "Bir üye belirtmelisin!").then(x=>x.delete({timeout:5000})) 
    return }
    if (!conf.şüphelirole.some(x => member.roles.cache.has(x))) 
    {
    message.react(red)
    message.channel.send( "Bu üye Şüpeli değil!").then(x=>x.delete({timeout:5000})) 
    return }
    if (!message.member.hasPermission(8) && member.roles.highest.position >= message.member.roles.highest.position) 
    {
    message.react(red)
    message.channel.send( "Kendinle aynı yetkide ya da daha yetkili olan birinin şüpeli kaldıramazsın!").then(x=>x.delete({timeout:5000})) 
    return }
    if (!member.manageable) {
    message.react(red)  
    message.channel.send( "Bu üyeyi şüpeliden çıkaramıyorum!").then(x=>x.delete({timeout:5000})) 
    return }

    member.roles.set(conf.unregRoles);
    const data = await penals.findOne({ userID: member.user.id, guildID: message.guild.id, $or: [{ type: "JAIL" }, { type: "TEMP-JAIL" }], active: true });
    if (data) {
      data.active = false;
      await data.save();
    }
    message.react(green)
    message.lineReply(`${miniicon} ${member.toString()} üyesinin Şüpelisi ${message.author} tarafından kaldırıldı!`).then(x=>x.delete({timeout:50000}))
    if (settings.dmMessages) member.send(`**${message.guild.name}** sunucusunda, **${message.author.tag}** tarafından, Şüpelisi kaldırıldı!`).catch(() => {});

    const log = embed
      .setAuthor(member.user.username, member.user.avatarURL({ dynamic: true, size: 2048 }))
      .setColor("RANDOM")
      .setDescription(`
      ${member.toString()} Adlı Kişinin Şüpelisi Kaldırıldı
      
\`●❯\` Şüpeli Kaldıran Kişi : ${message.author} (\`${message.author.id}\`)
          `)
          .setFooter(`${moment(Date.now()).format("LLL")}`)
    message.guild.channels.cache.get(conf.jailLogChannel).wsend(log);
  },
};

