import TeleBot from "telebot"

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)


bot.on(["text", "voice"], ctx => {
  if (ctx.chat.id != -1002116816322 && ctx.chat.id != -1002090103134) {
  return bot.forwardMessage(-1002116816322, ctx.chat.id, ctx.message_id);
  }
});


bot.on("text", ctx => {
  if (ctx.chat.id == -1002090103134) {
    return bot.sendMessage(ctx.reply_to_message.text.split(" ")[0], ctx.text)
  }
})




bot.on('/start', (msg) => msg.reply.photo('https://picsum.photos/1000'));

export default bot