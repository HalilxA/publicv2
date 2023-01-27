const {MessageMenuOption , MessageMenu , MessageActionRow} = require("discord-buttons")
module.exports = {
  conf: {
    aliases: ["burç"],
    name: "burç",
    help: "burç",
    owner: true
  },
  
      run: async(client,message,args,embed) => {

       /* Select Menü 4 Rolleri */

       const KutuRol26 = new MessageMenuOption()
       .setLabel('İkizler')
       .setDescription(`İkizler Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("920674424158556201")
       .setValue('ikizler');

       const KutuRol27 = new MessageMenuOption()
       .setLabel('Yengeç')
       .setDescription(`Yengeç Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("920674424158552064")
       .setValue('yengeç');

       const KutuRol28 = new MessageMenuOption()
       .setLabel('Boğa')
       .setDescription(`Boğa Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("920674424053706772")
       .setValue('boğa');

       const KutuRol29 = new MessageMenuOption()
       .setLabel('Koç')
       .setDescription(`Koç Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("920674424020148234")
       .setValue('koç');

       const KutuRol30 = new MessageMenuOption()
       .setLabel('Akrep')
       .setDescription(`Akrep Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("920674424347312158")
       .setValue('akrep');

       const KutuRol31 = new MessageMenuOption()
       .setLabel('Terazi')
       .setDescription(`Terazi Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("920674424364081162")
       .setValue('terazi');

       const KutuRol32 = new MessageMenuOption()
       .setLabel('Başak')
       .setDescription(`Başak Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("920674424301158430")
       .setValue('başak');

       const KutuRol33 = new MessageMenuOption()
       .setLabel('Aslan')
       .setDescription(`Aslan Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("920674424150163539")
       .setValue('aslan');

       const KutuRol34 = new MessageMenuOption()
       .setLabel('Balık')
       .setDescription(`Balık Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("920674424531857428")
       .setValue('balık');

       const KutuRol35 = new MessageMenuOption()
       .setLabel('Kova')
       .setDescription(`Kova Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("920674424389263380")
       .setValue('kova');

       const KutuRol36 = new MessageMenuOption()
       .setLabel('Oğlak')
       .setDescription(`Oğlak Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("920674424368291850")
       .setValue('oğlak');

       const KutuRol37 = new MessageMenuOption()
       .setLabel('Yay')
       .setDescription(`Yay Burç Rolü Almak İçin Tıkla.`)
       .setEmoji("920674424347308043")
       .setValue('yay');

       const KutuRol38 = new MessageMenuOption()
       .setLabel('Rolsüz')
       .setDescription(`Rollerini Temizlemek İçin Tıkla.`)
       .setEmoji("🗑️")
       .setValue('rolsuzzzzzz');


       /* Select Menü 4 Tanım */

       const Menu4 = new MessageMenu()
       .setID("burç")
       .setPlaceholder(`Burç Rolleri`)
       .addOption(KutuRol26)
       .addOption(KutuRol27)
       .addOption(KutuRol28)
       .addOption(KutuRol29)
       .addOption(KutuRol30)
       .addOption(KutuRol31)
       .addOption(KutuRol32)
       .addOption(KutuRol33)
       .addOption(KutuRol34)
       .addOption(KutuRol35)
       .addOption(KutuRol36)
       .addOption(KutuRol37)
       .addOption(KutuRol38)
      

         /* Select Menu 4 */
        const RoleMenu4 = new MessageActionRow()
        .addComponent(Menu4)

        message.channel.send(`  \`\`\`•❯ Aşağıda ki Menüden Burç Rollerini İştediğiniz Hangisi İse Alabilirsiniz.\`\`\`
        `, {
          components: [
            
            RoleMenu4],
        });
  }}