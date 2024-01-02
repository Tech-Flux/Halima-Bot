
import { createHash } from 'crypto'
let handler = async function (m, { conn, args, usedPrefix}) {
  if (!args[0]) throw `✳️ Follow with your serial Number`
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw `⚠️ *Error*`
  user.registered = false
  user.rgenero = false
  m.reply(`✅ User Unregistered`)
}
handler.help = ['unreg <serial number>'] 
handler.tags = ['rg']
handler.command = ['unreg'] 
handler.register = true

export default handler

