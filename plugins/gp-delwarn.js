
let handler = async (m, { conn, args, groupMetadata}) => {
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `✳️ Please mention them`
        if (!(who in global.db.data.users)) throw `✳️ User is not even in my Database`
       let warn = global.db.data.users[who].warn
       if (warn > 0) {
         global.db.data.users[who].warn -= 1
         m.reply(`⚠️ *Warnings*
         
▢ Warns: *-1*
▢ Total: *${warn - 1}*`)
         m.reply(`✳️ Delwarn *${warn - 1}*`, who)
         } else if (warn == 0) {
            m.reply(`✳️Has No warning am watching ${m.mentionedJid}`)
        }

}
handler.help = ['delwarn @user']
handler.tags = ['group']
handler.command = ['delwarn', 'unwarn'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
