
let handler = async (m, {conn, usedPrefix}) => {
	
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `✳️ User not even in my Database`
    conn.reply(m.chat, `
 ≡ *Name:* @${who.split('@')[0]}

 💰 *Balance*
┌───⊷
▢ *💎Almasi:* _${user.diamond.toLocaleString()}_
▢ *🪙Dhahabu:* _${user.coin.toLocaleString()}_
└──────────────
`, m, { mentions: [who] })
}
handler.help = ['balance']
handler.tags = ['econ']
handler.command = ['bal', 'diamantes', 'diamond', 'balance'] 

export default handler
