let handler = async function (m, { conn, text, usedPrefix }) {
  
  let m2 = `
  ≡ Use these commands without the prefix: *${usedPrefix}*
  ┌─⊷ *AUDIOS* 
  ▢ Bot
  ▢ Good morning
  ▢ Good afternoon
  ▢ Good evening
  ▢ Fine gentlemen
  ▢ Sad
  └──────────────
  `
      let pp = './src/fg_logo.jpg' 
      /*conn.sendButton(m.chat, m2, mssg.ig, pp, [
        ['⏍ Info', `${usedPrefix}botinfo`],
        ['⌬ Groups', `${usedPrefix}gpdylux`]
      ],m, rpyt)*/
      conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
     
  }
  
  handler.help = ['menu2']
  handler.tags = ['main']
  handler.command = ['menu2', 'audios'] 
  
  export default handler
  