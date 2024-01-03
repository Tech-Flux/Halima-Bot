
let war = global.maxwarn
let handler = async (m, { conn, text, args, groupMetadata, usedPrefix, command }) => {      
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `✳️ 📌Use as Follows: ${usedPrefix + command} @user`
        if (conn.user.jid.includes(who)) return m.reply(`✳️ I can't perform that action, but you can mention any user who isn't a bot in the group`)
        if (!(who in global.db.data.users)) throw `✳️ ${mssg.userDb}`
        let txt = text.replace('@' + who.split`@`[0], '').trim()
        let name = conn.getName(m.sender)
        let warn = global.db.data.users[who].warn
        if (warn < war) {
            global.db.data.users[who].warn += 1
            m.reply(`
⚠️ *Warnings* ⚠️

▢ *Admin:* ${name}
▢ *User:* @${who.split`@`[0]}
▢ *Warns:* ${warn + 1}/${war}
▢ *who:* ${txt}`, null, { mentions: [who] }) 
            m.reply(`
⚠️ *Be carefull* ⚠️

`, who)
        } else if (warn == war) {
            global.db.data.users[who].warn = 0
            m.reply(`⛔Maximum`)
            await time(3000)
            await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
            m.reply(`♻️ You were removed from the group ${groupMetadata.subject} because you have been warned ${war} times`, who)
        }
}
handler.help = ['warn @user']
handler.tags = ['group']
handler.command = ['warn'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

const time = async (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
