 
import fg from 'api-dylux'
import fetch from 'node-fetch'
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    
        if (!args[0]) throw `✳️ Use as follows : ${usedPrefix + command} https://vm.tiktok.com/ZMYG92bUh/`
        if (!args[0].match(/tiktok/gi)) throw `❎ Provide the link`
        m.react(rwait)
      try {
        let res = await fetch(global.API('fgmods', '/api/downloader/tiktok2', { url: args[0] }, 'apikey'))
        let data = await res.json()

        if (data.result.video) {
            let tex = `
┌─⊷ *TIKTOK DL* 
▢ *Name:* ${data.result.author.name}
▢ *Username:* ${data.result.author.unique_id}
▢ *Duration:* ${data.result.video.durationFormatted}
▢ *Quality:* ${data.result.video.ratio}
▢ *Likes:* ${data.result.stats.likeCount}
▢ *Views:* ${data.result.stats.playCount}
▢ *Desc:* ${data.result.title}
└───────────
`
            conn.sendFile(m.chat, data.result.video.noWatermark, 'tiktok.mp4', tex, m);
            m.react(done)
        } else {
            let cap = `
▢ *Likes:* ${data.result.stats.likeCount}
▢ *Desc:* ${data.result.title}
`
            for (let tt of data.result.images) {
                conn.sendMessage(m.chat, { image: { url: tt.url }, caption: cap }, { quoted: m })
            }
            conn.sendFile(m.chat, data.result.music.play_url, 'tiktok.mp3', '', m, null, { mimetype: 'audio/mp4' })
            m.react(done)
        }
    } catch (error) {
        m.reply(`❎ Error`)
    }
}

handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = ['tiktok', 'tt']
handler.diamond = true

export default handler
