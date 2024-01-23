import TeleBot from "telebot"

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)


bot.on(["text"], ctx => {
  if (ctx.chat.id != -1002116816322 && ctx.chat.id != -1002090103134) {
  return bot.sendMessage(-1002116816322, `${ctx.chat.id} Открыто \n ${ctx.text}`);
}
});


bot.on(["voice"], ctx => {
  if (ctx.chat.id != -1002116816322 && ctx.chat.id != -1002090103134) {
  return bot.sendVoice(-1002116816322, ctx.voice.file_id, { caption: `${ctx.chat.id} Открыто` });
}
});

bot.on(["photo"], ctx => {
  if (ctx.chat.id != -1002116816322 && ctx.chat.id != -1002090103134) {
    return bot.sendPhoto(-1002116816322, ctx.photo[0].file_id, { caption: `${ctx.chat.id} Открыто` })
}})





bot.on("text", ctx => {
  if (ctx.chat.id == -1002090103134) {
    return bot.sendMessage(ctx.reply_to_message.text.split(" ")[0], ctx.text)
  }
})




bot.on('/start', (msg) => msg.reply.photo('https://picsum.photos/1000'));

export default bot