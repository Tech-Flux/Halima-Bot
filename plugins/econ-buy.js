
const precioDiamante = 200 
let handler = async (m, { conn, usedPrefix, command, args }) => {

  let user = global.db.data.users[m.sender]
 
  if (!args[0]) throw `📌 Use as Follows: *${usedPrefix + command}* all\n*${usedPrefix + command}* 8`;
  if (args[0].toLowerCase() !== 'all' && !/^[1-9]\d*$/.test(args[0])) throw `✳️ Amount`;

  let all =  Math.floor(user.coin / precioDiamante)
 let count = args[0].replace('all', all)
 count = Math.max(1, count)
  //if (isNaN(count)) throw `✳️ ${mssg.isNan}`;

  
  let totalCost = precioDiamante * count;

  if (user.coin >= totalCost) {
    user.coin -= totalCost;
    user.diamond += count;

    m.reply(`
┌─「 *Buy* 」
‣ *Buy count:* ${count.toLocaleString()} 💎 
‣ *Spent:* -${totalCost.toLocaleString()} 🪙
└──────────────`);
  } else {
    m.reply(`❎ Enter correct amount *${count}* 💎`);
  }

}
handler.help = ['buy']
handler.tags = ['econ']
handler.command = ['buy'] 

handler.disabled = false

export default handler