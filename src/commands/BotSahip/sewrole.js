const {MessageMenuOption , MessageMenu , MessageActionRow} = require("discord-buttons")
module.exports = {
  conf: {
    aliases: ["sew"],
    name: "sew",
    help: "sew",
    owner: true
  },
  
      run: async(client,message,args,embed) => {

        /* Select Menü  1. Rolleri*/
        const KutuRol1 = new MessageMenuOption()
        .setLabel('Sevgilim Var')
        .setDescription(`Sevgilim Var Rolünü Almak İçin Tıkla.`)
        .setEmoji("920685639404498974")
        .setValue('couple');
       
        const KutuRol2 = new MessageMenuOption()
        .setLabel('Sevgilim Yok')
        .setDescription(`Sevgilim Yok Rolünü Almak İçin Tıkla.`)
        .setEmoji("920685639509372960")
        .setValue('alone');
        const KutuRol3 = new MessageMenuOption()
        .setLabel('Sevgili Yapmıyorum')
        .setDescription(`Sevgili Yapmıyorum Rolünü Almak İçin Tıkla.`)
        .setEmoji("920685640071381033")
        .setValue('lgbt');

      const KutuRol4 = new MessageMenuOption()
        .setLabel('Rolsüz')
        .setDescription(`Rollerini Temizlemek İçin Tıkla.`)
        .setEmoji("🗑️")
        .setValue('rolsuz');
      

        /* Select Menü 1 Tanım*/
        const Menu = new MessageMenu()
        .setID("relation")
        .setPlaceholder("İlişki Rolleri")
        .addOption(KutuRol1)
        .addOption(KutuRol2)
        .addOption(KutuRol3)
        .addOption(KutuRol4)


   

        /* Select Menü 1 */
        const RoleMenu = new MessageActionRow()
        .addComponent(Menu)

    
        message.channel.send(`  \`\`\`•❯ Aşağıda ki Menüden İlişki Rollerini İştediğiniz Hangisi İse Alabilirsiniz.\`\`\`
        `, {
          components: [
            
            RoleMenu],
        });
  }}