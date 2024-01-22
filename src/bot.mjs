import TeleBot from "telebot"

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)

bot.on("text", ctx => {
  return bot.sendMessage(363625457, "1")
});

bot.on(["text", "voice"], ctx => {
  if (ctx.chat.id != -1002116816322) {
  return bot.sendMessage(-1002116816322, ctx.text.split(' '));
  }
});


bot.on("forward", ctx => {
  return bot.sendMessage(ctx.text.split("\n")[0], ctx.ctx.text.split("\n")[1]);
});

bot.on('/start', (msg) => msg.reply.photo('https://picsum.photos/1000'));

export default bot