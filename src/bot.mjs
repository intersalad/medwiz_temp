import TeleBot from "telebot"

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)

bot.on(["text", "voice"], ctx => {
  return bot.sendMessage(-1002116816322, `#${ctx.chat.id} \n ${ctx.text}`);
});

bot.on("forward", ctx => {
  return bot.sendMessage(363625457, ctx.text.split('\n')[0])
});


bot.on('/start', (msg) => msg.reply.photo('https://picsum.photos/1000'));

export default bot