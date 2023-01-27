const conf = require("../configs/sunucuayar.json")
module.exports = async (menu) => {

    await menu.clicker.fetch();
    menu.reply.think(true)

    if (menu.values[0] === "couple") {
        menu.clicker.member.roles.cache.has(conf.sevgilimyok) &&
        menu.clicker.member.roles.cache.has(conf.lgbt)

       await menu.clicker.member.roles.add(conf.sevgilimvar)
       await menu.clicker.member.roles.remove(conf.sevgilimyok)
       await menu.clicker.member.roles.remove(conf.lgbt) 
     setTimeout(() => { 
        menu.reply.send(`<@!${menu.clicker.id}> başarıyla <@&${conf.sevgilimvar}> rolünü aldın!`)
     },750) 
    }
    if(menu.values[0] === "alone") {
        menu.clicker.member.roles.cache.has(conf.sevgilimvar) &&
        menu.clicker.member.roles.cache.has(conf.lgbt)

       await menu.clicker.member.roles.add(conf.sevgilimyok)
       await menu.clicker.member.roles.remove(conf.sevgilimvar)
       await menu.clicker.member.roles.remove(conf.lgbt)  
     setTimeout(() => { 
            menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&${conf.sevgilimyok}> rolünü aldın!`)
 },750) 
    }
    if(menu.values[0] === "lgbt") {
        menu.clicker.member.roles.cache.has(conf.sevgilimyok) &&
        menu.clicker.member.roles.cache.has(conf.sevgilimvar)

       await menu.clicker.member.roles.add(conf.lgbt)
       await menu.clicker.member.roles.remove(conf.sevgilimyok)
       await menu.clicker.member.roles.remove(conf.sevgilimvar)       
     setTimeout(() => { 
            menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&${conf.lgbt}> rolünü aldın!`)
 },750) 
    }
    if(menu.values[0] === "rolsuz") {
       await menu.clicker.member.roles.remove(conf.lgbt)
       await menu.clicker.member.roles.remove(conf.sevgilimyok)
       await menu.clicker.member.roles.remove(conf.sevgilimvar)     
     setTimeout(() => {   
            menu.reply.edit(`<@!${menu.clicker.id}> başarıyla üstünüzdeki Bütün rolleri aldım!`)
 },750) 
    }
    if (menu.values[0] === "Dc") {
       

       await menu.clicker.member.roles.add(conf.dc)
       await menu.clicker.member.roles.remove(conf.vk)
       await menu.clicker.member.roles.remove(conf.pp) 
     setTimeout(() => { 
        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&${conf.dc}> rolünü aldın!`)
     },750) 
}
     if (menu.values[0] === "Vk") {

       await menu.clicker.member.roles.add(conf.vk)
       await menu.clicker.member.roles.remove(conf.dc)
       await menu.clicker.member.roles.remove(conf.pp) 
     setTimeout(() => { 
        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&${conf.vk}> rolünü aldın!`)
     },750) 
}
if (menu.values[0] === "Gif/pp") {

       await menu.clicker.member.roles.add(conf.pp)
       await menu.clicker.member.roles.remove(conf.dc)
       await menu.clicker.member.roles.remove(conf.vk) 
     setTimeout(() => { 
        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&${conf.pp}> rolünü aldın!`)
     },750) 
}
if (menu.values[0] === "rolsüz") {
       

       await menu.clicker.member.roles.remove(conf.pp)
       await menu.clicker.member.roles.remove(conf.dc)
       await menu.clicker.member.roles.remove(conf.vk) 
     setTimeout(() => { 
        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla Rollerini Alındı!`)
     },750) 
}

    if (menu.values[0] === "kirmizi") {
        if(!conf.ekipRolu.some(x => menu.clicker.member.roles.cache.has(x)))
        {
setTimeout(() => { 
        menu.reply.edit(`<@!${menu.clicker.id}> Taglı olman lazım!`)
},750)
        return }
        await menu.clicker.member.roles.add(conf.kırmızı)
       await menu.clicker.member.roles.remove(conf.mavi)
       await menu.clicker.member.roles.remove(conf.sarı)
       await menu.clicker.member.roles.remove(conf.mor) 
       await menu.clicker.member.roles.remove(conf.pembe)
        setTimeout(() => { 
      menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&${conf.kırmızı}> rolünü aldın!`)
 },750) 
    }
    if (menu.values[0] === "sari") {
        if(!conf.ekipRolu.some(x => menu.clicker.member.roles.cache.has(x)))
        {
setTimeout(() => { 
        menu.reply.edit(`<@!${menu.clicker.id}> Taglı olman lazım!`)
},750)
        return }
        await menu.clicker.member.roles.add(conf.sarı)
        await menu.clicker.member.roles.remove(conf.mavi)
        await menu.clicker.member.roles.remove(conf.kırmızı)
        await menu.clicker.member.roles.remove(conf.mor) 
        await menu.clicker.member.roles.remove(conf.pembe)
        setTimeout(() => { 
        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&${conf.sarı}> rolünü aldın!`)
 },750) 
    }
    if (menu.values[0] === "mavi") {
        if(!conf.ekipRolu.some(x => menu.clicker.member.roles.cache.has(x)))
        {
setTimeout(() => { 
        menu.reply.edit(`<@!${menu.clicker.id}> Taglı olman lazım!`)
},750)
        return }
        await menu.clicker.member.roles.add(conf.mavi)
        await menu.clicker.member.roles.remove(conf.sarı)
        await menu.clicker.member.roles.remove(conf.kırmızı)
        await menu.clicker.member.roles.remove(conf.mor) 
        await menu.clicker.member.roles.remove(conf.pembe)
        setTimeout(() => { 
        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&${conf.mavi}> rolünü aldın!`)
 },750) 
    }
    if (menu.values[0] === "mor") {
        if(!conf.ekipRolu.some(x => menu.clicker.member.roles.cache.has(x)))
        {
setTimeout(() => { 
        menu.reply.edit(`<@!${menu.clicker.id}> Taglı olman lazım!`)
},750)
        return }
        await menu.clicker.member.roles.add(conf.mor)
        await menu.clicker.member.roles.remove(conf.sarı)
        await menu.clicker.member.roles.remove(conf.kırmızı)
        await menu.clicker.member.roles.remove(conf.mavi) 
        await menu.clicker.member.roles.remove(conf.pembe)
        setTimeout(() => { 
        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&${conf.mor}> rolünü aldın!`)
 },750) 
    }
    if (menu.values[0] === "pembe") {
        if(!conf.ekipRolu.some(x => menu.clicker.member.roles.cache.has(x)))
        {
setTimeout(() => { 
        menu.reply.edit(`<@!${menu.clicker.id}> Taglı olman lazım!`)
},750)
        return }
        await menu.clicker.member.roles.add(conf.pembe)
        await menu.clicker.member.roles.remove(conf.sarı)
        await menu.clicker.member.roles.remove(conf.kırmızı)
        await menu.clicker.member.roles.remove(conf.mavi) 
        await menu.clicker.member.roles.remove(conf.mor)
        setTimeout(() => { 
        menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&${conf.pembe}> rolünü aldın!`)
 },750) 
    }
    if(menu.values[0] === "rolsuzzz") {
        await menu.clicker.member.roles.remove(conf.pembe)
        await menu.clicker.member.roles.remove(conf.sarı)
        await menu.clicker.member.roles.remove(conf.kırmızı)
        await menu.clicker.member.roles.remove(conf.mavi) 
        await menu.clicker.member.roles.remove(conf.mor)
         setTimeout(() => {      
   menu.reply.edit(`<@!${menu.clicker.id}> başarıyla üstünüzdeki Bütün rolleri aldım!`)
 },750) 
    }
/////////////////////////////////////////////////////////
    if (menu.values[0] === "ikizler") {
        await menu.clicker.member.roles.add(conf.ikizler)
        await menu.clicker.member.roles.remove(conf.yengeç)
        await menu.clicker.member.roles.remove(conf.boğa)
        await menu.clicker.member.roles.remove(conf.koç) 
        await menu.clicker.member.roles.remove(conf.akrep)
        await menu.clicker.member.roles.remove(conf.terazi)
        await menu.clicker.member.roles.remove(conf.başak)
        await menu.clicker.member.roles.remove(conf.aslan)
        await menu.clicker.member.roles.remove(conf.balık)
        await menu.clicker.member.roles.remove(conf.kova)
        await menu.clicker.member.roles.remove(conf.oğlak)
        await menu.clicker.member.roles.remove(conf.yay)
          setTimeout(() => {     
 menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&${conf.ikizler}> rolünü aldın!`)
 },750) 
    }
    if(menu.values[0] === "yengeç") {
        await menu.clicker.member.roles.add(conf.yengeç)
        await menu.clicker.member.roles.remove(conf.ikizler)
        await menu.clicker.member.roles.remove(conf.boğa)
        await menu.clicker.member.roles.remove(conf.koç) 
        await menu.clicker.member.roles.remove(conf.akrep)
        await menu.clicker.member.roles.remove(conf.terazi)
        await menu.clicker.member.roles.remove(conf.başak)
        await menu.clicker.member.roles.remove(conf.aslan)
        await menu.clicker.member.roles.remove(conf.balık)
        await menu.clicker.member.roles.remove(conf.kova)
        await menu.clicker.member.roles.remove(conf.oğlak)
        await menu.clicker.member.roles.remove(conf.yay)
        setTimeout(() => { 
 menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&${conf.yengeç}> rolünü aldın!`)
 },750) 

    }
    if(menu.values[0] === "boğa") {
        await menu.clicker.member.roles.add(conf.boğa)
        await menu.clicker.member.roles.remove(conf.yengeç)
        await menu.clicker.member.roles.remove(conf.ikizler)
        await menu.clicker.member.roles.remove(conf.koç) 
        await menu.clicker.member.roles.remove(conf.akrep)
        await menu.clicker.member.roles.remove(conf.terazi)
        await menu.clicker.member.roles.remove(conf.başak)
        await menu.clicker.member.roles.remove(conf.aslan)
        await menu.clicker.member.roles.remove(conf.balık)
        await menu.clicker.member.roles.remove(conf.kova)
        await menu.clicker.member.roles.remove(conf.oğlak)
        await menu.clicker.member.roles.remove(conf.yay)
        setTimeout(() => {   
 menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&${conf.boğa}> rolünü aldın!`)
 },750) 
    }
    if (menu.values[0] === "koç") {
        await menu.clicker.member.roles.add(conf.koç)
        await menu.clicker.member.roles.remove(conf.yengeç)
        await menu.clicker.member.roles.remove(conf.boğa)
        await menu.clicker.member.roles.remove(conf.ikizler) 
        await menu.clicker.member.roles.remove(conf.akrep)
        await menu.clicker.member.roles.remove(conf.terazi)
        await menu.clicker.member.roles.remove(conf.başak)
        await menu.clicker.member.roles.remove(conf.aslan)
        await menu.clicker.member.roles.remove(conf.balık)
        await menu.clicker.member.roles.remove(conf.kova)
        await menu.clicker.member.roles.remove(conf.oğlak)
        await menu.clicker.member.roles.remove(conf.yay)
        setTimeout(() => { 
menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&${conf.koç}> rolünü aldın!`)
 },750) 
    }
    if (menu.values[0] === "akrep") {
        await menu.clicker.member.roles.add(conf.akrep)
        await menu.clicker.member.roles.remove(conf.yengeç)
        await menu.clicker.member.roles.remove(conf.boğa)
        await menu.clicker.member.roles.remove(conf.koç) 
        await menu.clicker.member.roles.remove(conf.ikizler)
        await menu.clicker.member.roles.remove(conf.terazi)
        await menu.clicker.member.roles.remove(conf.başak)
        await menu.clicker.member.roles.remove(conf.aslan)
        await menu.clicker.member.roles.remove(conf.balık)
        await menu.clicker.member.roles.remove(conf.kova)
        await menu.clicker.member.roles.remove(conf.oğlak)
        await menu.clicker.member.roles.remove(conf.yay)
        setTimeout(() => { 
menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&${conf.akrep}> rolünü aldın!`)
 },750) 
    }
    if (menu.values[0] === "terazi") {
        await menu.clicker.member.roles.add(conf.terazi)
        await menu.clicker.member.roles.remove(conf.yengeç)
        await menu.clicker.member.roles.remove(conf.boğa)
        await menu.clicker.member.roles.remove(conf.koç) 
        await menu.clicker.member.roles.remove(conf.akrep)
        await menu.clicker.member.roles.remove(conf.ikizler)
        await menu.clicker.member.roles.remove(conf.başak)
        await menu.clicker.member.roles.remove(conf.aslan)
        await menu.clicker.member.roles.remove(conf.balık)
        await menu.clicker.member.roles.remove(conf.kova)
        await menu.clicker.member.roles.remove(conf.oğlak)
        await menu.clicker.member.roles.remove(conf.yay)
        setTimeout(() => { 
menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&${conf.terazi}> rolünü aldın!`)
 },750) 
    }
    if (menu.values[0] === "başak") {
        await menu.clicker.member.roles.add(conf.başak)
        await menu.clicker.member.roles.remove(conf.yengeç)
        await menu.clicker.member.roles.remove(conf.boğa)
        await menu.clicker.member.roles.remove(conf.koç) 
        await menu.clicker.member.roles.remove(conf.akrep)
        await menu.clicker.member.roles.remove(conf.terazi)
        await menu.clicker.member.roles.remove(conf.ikizler)
        await menu.clicker.member.roles.remove(conf.aslan)
        await menu.clicker.member.roles.remove(conf.balık)
        await menu.clicker.member.roles.remove(conf.kova)
        await menu.clicker.member.roles.remove(conf.oğlak)
        await menu.clicker.member.roles.remove(conf.yay)
        setTimeout(() => { 
menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&${conf.başak}> rolünü aldın!`)
 },750) 
    }
    if(menu.values[0] === "aslan") {
        await menu.clicker.member.roles.add(conf.aslan)
        await menu.clicker.member.roles.remove(conf.yengeç)
        await menu.clicker.member.roles.remove(conf.boğa)
        await menu.clicker.member.roles.remove(conf.koç) 
        await menu.clicker.member.roles.remove(conf.akrep)
        await menu.clicker.member.roles.remove(conf.terazi)
        await menu.clicker.member.roles.remove(conf.başak)
        await menu.clicker.member.roles.remove(conf.ikizler)
        await menu.clicker.member.roles.remove(conf.balık)
        await menu.clicker.member.roles.remove(conf.kova)
        await menu.clicker.member.roles.remove(conf.oğlak)
        await menu.clicker.member.roles.remove(conf.yay)
        setTimeout(() => { 
 menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&${conf.aslan}> rolünü aldın!`)
 },750) 
    }
    if(menu.values[0] === "balık") {
        await menu.clicker.member.roles.add(conf.balık)
        await menu.clicker.member.roles.remove(conf.yengeç)
        await menu.clicker.member.roles.remove(conf.boğa)
        await menu.clicker.member.roles.remove(conf.koç) 
        await menu.clicker.member.roles.remove(conf.akrep)
        await menu.clicker.member.roles.remove(conf.terazi)
        await menu.clicker.member.roles.remove(conf.başak)
        await menu.clicker.member.roles.remove(conf.aslan)
        await menu.clicker.member.roles.remove(conf.ikizler)
        await menu.clicker.member.roles.remove(conf.kova)
        await menu.clicker.member.roles.remove(conf.oğlak)
        await menu.clicker.member.roles.remove(conf.yay)
        setTimeout(() => { 
menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&${conf.balık}> rolünü aldın!`)
 },750) 
    }
    if (menu.values[0] === "kova") {
        await menu.clicker.member.roles.add(conf.kova)
        await menu.clicker.member.roles.remove(conf.yengeç)
        await menu.clicker.member.roles.remove(conf.boğa)
        await menu.clicker.member.roles.remove(conf.koç) 
        await menu.clicker.member.roles.remove(conf.akrep)
        await menu.clicker.member.roles.remove(conf.terazi)
        await menu.clicker.member.roles.remove(conf.başak)
        await menu.clicker.member.roles.remove(conf.aslan)
        await menu.clicker.member.roles.remove(conf.ikizler)
        await menu.clicker.member.roles.remove(conf.balık)
        await menu.clicker.member.roles.remove(conf.oğlak)
        await menu.clicker.member.roles.remove(conf.yay)
        setTimeout(() => { 
 menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&${conf.kova}> rolünü aldın!`)
 },750) 
    }
    if (menu.values[0] === "oğlak") {
        await menu.clicker.member.roles.add(conf.oğlak)
        await menu.clicker.member.roles.remove(conf.yengeç)
        await menu.clicker.member.roles.remove(conf.boğa)
        await menu.clicker.member.roles.remove(conf.koç) 
        await menu.clicker.member.roles.remove(conf.akrep)
        await menu.clicker.member.roles.remove(conf.terazi)
        await menu.clicker.member.roles.remove(conf.başak)
        await menu.clicker.member.roles.remove(conf.aslan)
        await menu.clicker.member.roles.remove(conf.ikizler)
        await menu.clicker.member.roles.remove(conf.balık)
        await menu.clicker.member.roles.remove(conf.kova)
        await menu.clicker.member.roles.remove(conf.yay)
        setTimeout(() => { 
 menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&${conf.oğlak}> rolünü aldın!`)
 },750) 
    }
    if (menu.values[0] === "yay") {
        await menu.clicker.member.roles.add(conf.yay)
        await menu.clicker.member.roles.remove(conf.yengeç)
        await menu.clicker.member.roles.remove(conf.boğa)
        await menu.clicker.member.roles.remove(conf.koç) 
        await menu.clicker.member.roles.remove(conf.akrep)
        await menu.clicker.member.roles.remove(conf.terazi)
        await menu.clicker.member.roles.remove(conf.başak)
        await menu.clicker.member.roles.remove(conf.aslan)
        await menu.clicker.member.roles.remove(conf.ikizler)
        await menu.clicker.member.roles.remove(conf.balık)
        await menu.clicker.member.roles.remove(conf.oğlak)
        await menu.clicker.member.roles.remove(conf.kova)
        setTimeout(() => { 
 menu.reply.edit(`<@!${menu.clicker.id}> başarıyla <@&${conf.yay}> rolünü aldın!`)
 },750) 
}
if (menu.values[0] === "rolsuzzzzzz") {
   await menu.clicker.member.roles.remove(conf.yay)
   await menu.clicker.member.roles.remove(conf.yengeç)
   await menu.clicker.member.roles.remove(conf.boğa)
   await menu.clicker.member.roles.remove(conf.koç) 
   await menu.clicker.member.roles.remove(conf.akrep)
   await menu.clicker.member.roles.remove(conf.terazi)
   await menu.clicker.member.roles.remove(conf.başak)
   await menu.clicker.member.roles.remove(conf.aslan)
   await menu.clicker.member.roles.remove(conf.ikizler)
   await menu.clicker.member.roles.remove(conf.balık)
   await menu.clicker.member.roles.remove(conf.oğlak)
   await menu.clicker.member.roles.remove(conf.kova)
   setTimeout(() => { 
menu.reply.edit(`<@!${menu.clicker.id}> başarıyla rolerin alındı!`)
},750) 
}
}
module.exports.conf = {
    name: "clickMenu",
  };

