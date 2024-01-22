import TeleBot from "telebot"

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)

bot.on(["text", "voice"], ctx => {
  if (ctx.chat.id != -1002116816322) {
  return bot.sendMessage(-1002116816322, `${ctx.chat.id} \n ${ctx.text}`);
  }
});


bot.on("forward", ctx => {
  return bot.sendMessage(ctx.text.split("\n")[0], "hi");
});

bot.on('/start', (msg) => msg.reply.photo('https://picsum.photos/1000'));

export default bot