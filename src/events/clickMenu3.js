const conf = require("../configs/sunucuayar.json")
module.exports = async (menu) => {

    await menu.clicker.fetch();
    menu.reply.think(true)

    if (menu.values[0] === "invite") {
     setTimeout(() => {
        menu.reply.edit(`
\`\`\`
- .invite (stat [user])
- .topdavet (topdavet)
\`\`\`
`)
     },750) 
    }

    if (menu.values[0] === "genel") {
     setTimeout(() => {
        menu.reply.edit(`
\`\`\`
- .afk (afk [sebep])
- .avatar (avatar [@Galaxy/ID])
- .banner (banner [@Galaxy/ID])
- .booster (boost [nick])
- .profil (profil / [@Galaxy/ID])
- .tag (tag)
- .yardım (yardım)
- .çek (çek [@Galaxy/ID])
- .git (git [@Galaxy/ID])
- .market (coinmarket) 
- .satınal (satınal) 
- .görev (görev [user])
- .coin [ekle/sil/gönder] [kullanıcı] [sayı]
\`\`\`
`)
     },750) 
    }

    if (menu.values[0] === "kayıt") {
     setTimeout(() => {
        menu.reply.edit(`
\`\`\`
- .taglı-alım [aç/kapat]
- .kayıt (kayıt [user] İsim Yaş)
- .bağlantı-kes ([user])
- .isim (isim [user] [name | age])
- .isimler (isimler [user])
- .top-teyit (top-teyit)
- .unregister (unregister [user])
\`\`\`
`)
     },750) 
    }

    if (menu.values[0] === "kurucu") {
     setTimeout(() => {
        menu.reply.edit(`
\`\`\`
- .kilit ([aç/kapat])
- .tagsay (tagsay)
- .banliste (banlist)
- .rolbilgi (@Galaxyrol/ID)
- .cezapuansil ([user])
- .isimsil ([user])
- .sicilsil ([user])
- .yasaklı-tag (ekle/sil/liste [yasaklıtag])
- .ekip ([ekle-sil-liste-kontrol-bilgi])
- .ekip-ses ([@ekiprol])
- .yetkilises (yetkilises)
- .yoklama (toplantı)
- .allmute (allmute [kanal])
- .allunmute (allunmute [kanal])
- .toplutaşı (toplutaşı [kanal])
\`\`\`
`)
     },750) 
    }
    if (menu.values[0] === "moderasyon") {
     setTimeout(() => {
        menu.reply.edit(`
\`\`\`
- .yargı (yargı [@Galaxy/ID] [reason])
- .jail (jail [@Galaxy/ID] [reason])
- .vmute (vmute [@Galaxy/ID] [time] [reason])
- .mute (mute [@Galaxy/ID] [time] [reason])
- .jail (jail [@Galaxy/ID] [reason])
- .unban (unban [@Galaxy/ID])
- .unmute (unmute [@Galaxy/ID] )
- .unvmute (unvmute [@Galaxy/ID] )
- .unjail (unjail [@Galaxy/ID] )
- .sicil (sicil [@Galaxy/ID])
- .topceza (topceza)
- .cezapuan (cezapuan [@Galaxy/ID])
- .cezasorgu (cezasorgu [Ceza ID])
- .yargılist (yargıliste)
- .allmute (allmute [kanal])
- .allunmute (allunmute [kanal])
- .toplutaşı (toplutaşı [kanal])
\`\`\`
`)
     },750) 
    }

    if (menu.values[0] === "stat") {
     setTimeout(() => {
        menu.reply.edit(`
\`\`\`
- .stat (stat [@Galaxy/ID])
- .top (top)
- .nerede (sesbilgi)
- .topcoin (topcoin)
\`\`\`
`)
     },750) 
    }

    if (menu.values[0] === "yetkili") {
     setTimeout(() => {
        menu.reply.edit(`
\`\`\`
- .ystat (yetkim [@Galaxy/ID])
- .cezapuan (cezapuan [@Galaxy/ID])
- .kes (kes [@Galaxy/ID])
- .rolsüz (rolsüz)
- .say (say)
- .snipe (snipe)
- .sesli (sesli)
- .sicil (sicil [@Galaxy/ID])
- .yetkili (yetkili [@Galaxy/ID])
- .taglı (taglı [@Galaxy/ID])
- .rol (r [al/ver] [@Galaxy/ID] [@Galaxyrol/ID])
- .rollog (rollog [@Galaxy/ID])
- .seslisay (sesli)
- .sil (sil [miktar])
\`\`\`
`)
     },750) 
    }
}
module.exports.conf = {
    name: "clickMenu",
  };

