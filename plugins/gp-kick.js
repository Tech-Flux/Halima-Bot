let handler = async (m, { conn, usedPrefix, command }) => {
    if (!m.mentionedJid[0] && !m.quoted) return m.reply(`✳️ ${mssg.useCmd}\n\n*${usedPrefix + command}* @tag`)
    
    let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    
    if (conn.user.jid.includes(user)) return m.reply(`✳️ I can't auto-kick myself`)
    
    await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
    m.reply(`✅ Removed Sucess`)
}

handler.help = ['kick @user']
handler.tags = ['group']
handler.command = ['kick', 'expel']
handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler
