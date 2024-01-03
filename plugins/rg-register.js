
import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|+] *?)([0-9]*)([.|+] *?)([MFNO])?$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => './src/avatar_contact.png')
 if (user.registered === true) throw `✳️ Already Registered\n${usedPrefix}unreg <sn>`

  let te = `✳️ Use commad as follows: *${usedPrefix + command} Abdul+19+M*\n📌 Example: *${usedPrefix + command}* Halima+16+F\n\n▢ Genders Known:\n*- M* = \n*- F*`
  if (!Reg.test(text)) throw te
  let [_, name, splitter, age, splitter2, gen] = text.match(Reg)
  if (!name) throw te
  if (!age) throw te
  if (name.length >= 30) throw `✳️ Name not correct`
  age = parseInt(age)
  if (age > 60) throw `👴🏻 Mzee wewe`
  if (age < 10) throw '🚼 You are still child'
  let genStr = gen && gen.toUpperCase() === 'M' ? `🙆🏻‍♂️ Man` : (gen && gen.toUpperCase() === 'F' ? `🤵🏻‍♀️ Woman`  : null)
  if (!genStr) throw `✳️ Genders Known: M, F`
  user.name = name.trim()
  user.age = age
  user.genero = genStr
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let regi = `
┌─「 *User Registered* 」─
▢ *Name:* ${name}
▢ *Age:* ${age}
▢ *Gender:* ${genStr}
▢ *Serial Number:* ${sn}
└──────────────`
  conn.sendFile(m.chat, pp, 'img.jpg', regi, m)
}

handler.help = ['reg'].map(v => v + ' <name.age.gender>')
handler.tags = ['rg']
handler.command = ['verify', 'reg', 'register'] 

export default handler
