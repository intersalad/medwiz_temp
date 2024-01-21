import TeleBot from "telebot"

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)

bot.on("text", msg => msg.reply.text(msg.text))

bot.on(["text", "voice"], ctx => {
  return bot.sendMessage(-1002116816322, ctx.from.id);
});




bot.on('/start', (msg) => msg.reply.photo('https://picsum.photos/1000'));

export default bot