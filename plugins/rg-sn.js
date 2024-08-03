import { createHash } from 'crypto'

let handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex')
m.reply(`
▢ *Your serial Number* : ${sn}
`.trim())
}
handler.help = ['mysn']
handler.tags = ['rg']
handler.command = ['sn', 'mysn','serial'] 
handler.register = true

export default handler
