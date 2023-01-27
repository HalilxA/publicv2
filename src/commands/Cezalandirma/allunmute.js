const moment = require("moment");
moment.locale("tr");
module.exports = {
  conf: {
    aliases: ["allunmute"],
    name: "allunmute",
    help: "allunmute"
  },

  run: async (client, message, args, embed) => {
    if (!message.member.hasPermission("MOVE_MEMBERS")) return;
    let channel = message.guild.channels.cache.get(args[0]) || message.member.voice.channel;
    if (!channel) return message.channel.send("Bir kanal ID girmeli ya da bir sesli kanalda bulunmalısın!").then(x=>x.delete({timeout:5000}))
    channel.members.forEach((x, index) => {
      client.wait(index * 1000);
      x.voice.setMute(false);
    });
    message.lineReply(` ${Unmute} \`${channel.name}\` kanalındaki tüm üyelerin susturulması kaldırıldı!`).then(x=>x.delete({timeout:50000}))
  },
};

