
import yts from 'yt-search'
let handler = async (m, {conn, text }) => {
  if (!text) throw `✳️ ${mssg.search('YouTube')}`
  let results = await yts(text)
	let tes = results.videos
let teks = tes.map(v => `
📌 ${v.title}
*⌚Duration:* ${v.timestamp}
*📆Upload:* ${v.ago}
*👀Views:* ${v.views.toLocaleString()}
*🔗Link:* ${v.url}
`.trim()).join('\n________________________\n\n')
	conn.sendFile(m.chat, tes[0].image, 'yts.jpeg', teks, m)
}
handler.help = ['ytsearch'] 
handler.tags = ['dl']
handler.command = ['ytsearch', 'yts'] 

export default handler
