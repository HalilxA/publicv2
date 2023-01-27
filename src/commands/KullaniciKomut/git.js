const moment = require("moment");
moment.locale("tr");
const {red, green} = require("../../configs/emojis.json")

module.exports = {
    conf: {
      aliases: ["git"],
      name: "git",
      help: "git"
    },
  
run: async (client, message, args, embed, prefix) => {
  if (!message.member.voice.channelID) return message.lineReply("Bir ses kanalında olmalısın!", message.author, message.channel);
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
  if (!member) return message.lineReply("Bir üye etiketle ve tekrardan dene!", message.author, message.channel);
  if (!member.voice.channelID) return message.lineReply("Bu kullanıcı herhangi bir ses kanalında bulunmuyor!", message.author, message.channel);
  if (message.member.voice.channelID === member.voice.channelID) return message.lineReply("Zaten aynı kanaldasınız!", message.author, message.channel);
  
  if (message.member.permissions.has("ADMINISTRATOR")) {
      message.member.voice.setChannel(member.voice.channel)
      message.react("<a:green:899337284481077298>")
      message.lineReply(embed.setThumbnail(message.author.avatarURL({dynamic: true, size: 2048})).setDescription(`${message.author}, ${member} kişisinin yanına gittiniz.`))
      const log = embed
      .setColor("#2f3136")
      .setDescription(`
      Bir Gitme işlemi gerçekleşti.
  
      Odaya Giden Kullanıcı: ${member} - \`${member.id}\`
      Odasına Gidilen Yetkili: ${message.author} - \`${message.author.id}\`
      `)
      .setFooter(`${moment(Date.now()).format("LLL")}`)
    message.guild.channels.cache.get("878576844868292612").wsend(log);
  } else {
    const question = await message.lineReply(member.toString(),embed.setThumbnail(message.author.avatarURL({dynamic: true, size: 2048})).setDescription(`${member}, ${message.author} \`${message.member.voice.channel.name}\` odasına gelmek istiyor. Kabul ediyor musun?`));
    await question.react("<a:galaxy_tik:923233511400423495>");
  await question.react("<a:galaxy_x:922918260574421022> ");
  const answer = await question.awaitReactions((reaction, user) => ["<a:galaxy_tik:923233511400423495>", "<a:galaxy_x:922918260574421022> "].includes(reaction.emoji.toString()) && user.id === member.user.id, { max: 1, time: 60000, errors: ["time"] }).catch(() => { question.edit(embed.setDescription("İşlem iptal edildi!")) });
  if (answer.first().emoji.toString() === "<a:galaxy_tik:923233511400423495>") {
    question.delete();
    message.lineReply(embed.setThumbnail(message.author.avatarURL({dynamic: true, size: 2048})).setDescription(`${message.author}, ${member} kişisinin yanına gittiniz.`))
    message.member.voice.setChannel(member.voice.channel);
  } else {
    question.delete();
  }
  }
  }  }
  