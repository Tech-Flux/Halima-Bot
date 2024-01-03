let handler = async function (m, { conn, text, usedPrefix }) {
	
	let chat = global.db.data.chats[m.chat]
    if (chat.rules === '') throw `✳️ No rules setted`
     m.reply(`📜 *Rules*\n\n${chat.rules}`)
}
handler.help = ['rules']
handler.tags = ['group']
handler.command = ['rules', 'reglas'] 

export default handler