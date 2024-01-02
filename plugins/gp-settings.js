let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
        'open': 'not_announcement',
        'close': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)

    return m.reply(`
🛡️ 

*▢ ${usedPrefix + command} close*
*▢ ${usedPrefix + command} open*
`)
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['group']
handler.tags = ['group']
handler.command = ['group'] 
handler.admin = true
handler.botAdmin = true
handler.group = true

export default handler
