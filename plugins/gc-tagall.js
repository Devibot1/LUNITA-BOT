const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`;
  let teks = `*⺀𝗛𝗼𝗹𝗮 𝗮𝗿𝗿𝗶𝗯𝗮, 𝗮𝗰𝘁𝗶𝘃𝗲𝗻𝘀𝗲 𝘆𝗮 𝗲𝘀 𝗵𝗼𝗿𝗮 ⏰⺀*\n\n❏ ${oi}\n\n❏ *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`;
  for (const mem of participants) {
    teks += `┣➥❤️ @${mem.id.split('@')[0]}\n`;
  }
  teks += `*└*🌙𝗕𝘆 𝗟𝗨𝗡𝗜𝗧𝗔 𝗕𝗢𝗧🌙\n\n*▌│█║▌║▌║║▌║▌║▌║█*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
