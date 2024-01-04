import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['254798708444', 'Abdul', true],
  ['']
] 

global.mods = [''] 
global.prems = ['254798708444']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'DRLg5kY7' //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'Abdul' 
global.author = 'Halima' 

//--info FG
global.botName = 'Halima'
global.fgig = 'https://www.instagram.com/abd.ul.rah.ma.n' 
global.fgsc = 'https://github.com/x-poison/Halima-Bot' 
global.fgyt = 'https://youtube.com/@poisonmods'
global.fgpyp = 'https://t.me/kesandy'
global.fglog = 'https://t.me/poisonmodz' 

//--- Grupos WA
global.fgcanal = 'https://whatsapp.com/channel/0029Va6IpLc77qVUl0h4hk3s'
global.bgp = 'https://chat.whatsapp.com/L3OL4BaN1YN07dE9rDPomh'
global.bgp2 = 'https://chat.whatsapp.com/L3OL4BaN1YN07dE9rDPomh'
global.bgp3 = 'https://whatsapp.com/channel/0029Va6IpLc77qVUl0h4hk3s' //--GP NSFW

global.wait = '⌛ _Processing..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
