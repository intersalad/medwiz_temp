import TeleBot from "telebot"

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)


bot.on(["text"], ctx => {
  if (ctx.chat.id != -1002116816322 && ctx.chat.id != -1002090103134) {
  return bot.sendMessage(-1002116816322, `${ctx.chat.id} Открыт \n ${ctx.text}`);
}
});


bot.on(["voice"], ctx => {
  if (ctx.chat.id != -1002116816322 && ctx.chat.id != -1002090103134) {
  return bot.sendVoice(-1002116816322, ctx.voice.file_id, { caption: `${ctx.chat.id} Открыт` });
}
});


bot.on(["photo"], ctx => {
  if (ctx.chat.id != -1002116816322 && ctx.chat.id != -1002090103134) {
    if (ctx.caption) {
      return bot.sendPhoto(-1002116816322, ctx.photo[0].file_id, { caption: `${ctx.chat.id} Открыт\n ${ctx.caption}` })
  }
    else {
    return bot.sendPhoto(-1002116816322, ctx.photo[0].file_id, { caption: `${ctx.chat.id} Открыт\n` })
  }
}});


bot.on(["video"], ctx => {
  if (ctx.chat.id != -1002116816322 && ctx.chat.id != -1002090103134) {
    if (ctx.caption) {
      return bot.sendMessage(-1002116816322, JSON.stringify(ctx))}
    else {
    return bot.sendMessage(-1002116816322, JSON.stringify(ctx))
  }
}});







bot.on(["text", "photo", "voice", "video", "videonote"], ctx => {
  if (ctx.chat.id == -1002090103134) {
    if (ctx.reply_to_message.text) { 
      if (ctx.text) {
        return bot.sendMessage(ctx.reply_to_message.text.split(" ")[0], ctx.text)
      }
      else if (ctx.photo) {
        if (ctx.caption) {
          return bot.sendPhoto(ctx.reply_to_message.text.split(" ")[0], ctx.photo[0].file_id, { caption: ctx.caption})
        }
        else {
          return bot.sendPhoto(ctx.reply_to_message.text.split(" ")[0], ctx.photo[0].file_id)
        }
      }
      else if (ctx.voice) {
        return bot.sendVoice(ctx.reply_to_message.text.split(" ")[0], ctx.voice.file_id)
      }
      else if (ctx.video) {
        return bot.sendVideo(ctx.reply_to_message.text.split(" ")[0], ctx.video.file_id)
      }
      else if (ctx.videonote) {
        return bot.sendVideonote(ctx.reply_to_message.text.split(" ")[0], ctx.videonote.file_id)
      }
    }

    else if (ctx.reply_to_message.caption) {
      if (ctx.text) {
        return bot.sendMessage(ctx.reply_to_message.caption.split(" ")[0], ctx.text)
      }
      else if (ctx.photo) {
        if (ctx.caption) {
          return bot.sendPhoto(ctx.reply_to_message.caption.split(" ")[0], ctx.photo[0].file_id, { caption: ctx.caption})
        }
        else {
          return bot.sendPhoto(ctx.reply_to_message.caption.split(" ")[0], ctx.photo[0].file_id)
        }
      }
      else if (ctx.voice) {
        return bot.sendVoice(ctx.reply_to_message.caption.split(" ")[0], ctx.voice.file_id)
      }
      else if (ctx.video) {
        return bot.sendVideo(ctx.reply_to_message.caption.split(" ")[0], ctx.video.file_id)
      }
      else if (ctx.videonote) {
        return bot.sendVideonote(ctx.reply_to_message.caption.split(" ")[0], ctx.videonote.file_id)
      }
    }
  }
})


bot.on('/start', (msg) => msg.reply.photo('https://picsum.photos/1000'));

export default bot