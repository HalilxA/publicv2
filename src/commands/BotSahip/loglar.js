const { green } = require("../../configs/emojis.json");
module.exports = {
  conf: {
    aliases: ["log","log-kur"],
    name: "log-kur",
    owner: true,
  },

  run: async (client, message, args) => {
    const parent = await message.guild.channels.create('Galaxy Logs', { type: 'category' });
    await message.guild.channels.create('voice-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('taglı-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('yasaklıtag-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('rank-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('rol-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('mazeretli-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('message-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('invite-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('yetki-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('ban-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('cezai-işlem-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('market-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('mute-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('jail-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('ses-mute-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('mod-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('database-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('veri-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('backup-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('sunucu-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('guard1-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('guard2-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('guard3-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('komut-log', { type: 'text', parent: parent.id });
    message.channel.send(`${green} Botların loglarının Oluşturulmuştur.`)
}}
