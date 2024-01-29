import TeleBot from "telebot"

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)
const chanel_id = -1002116816322
const global_chat_id = -1002090103134

let tasks = [];


bot.on(["text", "photo", "voice", "video", "videoNote", "sticker", "document"], ctx => {
  if (ctx.chat.id != -1002116816322 && ctx.chat.id != -1002090103134) {

    bot.sendMessage(ctx.chat.id, JSON.stringify(tasks))

    if (tasks.includes(ctx.chat.id)) {
      to_chat = 1
    }
    else {
      tasks.push(ctx.chat.id);
      to_chat = chanel_id
      bot.sendMessage(ctx.chat.id, tasks)
    }


    if (ctx.caption) {
        if (ctx.photo) {
          return bot.sendPhoto(-1002116816322, ctx.photo[0].file_id, { caption: `${ctx.chat.id} Открыт\n ${ctx.caption}` })
        }
        else if (ctx.video) {
          return bot.sendVideo(-1002116816322, ctx.file_id, { caption: `${ctx.chat.id} Открыт\n ${ctx.caption}` })
        }
        else if (ctx.document) {
          return bot.sendDocument(-1002116816322, ctx.document.file_id, { caption: `${ctx.chat.id} Открыт\n ${ctx.caption}` })
        }
    }

    else {
      if (ctx.text) {
        return bot.sendMessage(-1002116816322, `${ctx.chat.id} Открыто \n ${ctx.text} \n ${tasks}`);
      }
      else if (ctx.photo) {
        return bot.sendPhoto(-1002116816322, ctx.photo[0].file_id, { caption: `${ctx.chat.id} Открыт\n` })
      }
      else if (ctx.voice) {
        return bot.sendVoice(-1002116816322, ctx.voice.file_id, { caption: `${ctx.chat.id} Открыт` })
      }
      else if (ctx.video) {
        return bot.sendVideo(-1002116816322, ctx.video.file_id,  { caption: `${ctx.chat.id} Открыт` })
      }
      else if (ctx.video_note) {
        return bot.sendVideoNote(-1002116816322, ctx.video_note.file_id)
      }
      else if (ctx.sticker) {
        return bot.sendSticker(-1002116816322, ctx.sticker.file_id)
      }
      else if (ctx.document) {
        return bot.sendDocument(-1002116816322, ctx.document.file_id, { caption: `${ctx.chat.id} Открыт` })
      }
    }
  }
});


bot.on(["text", "photo", "voice", "video", "videoNote", "sticker", "document"], ctx => {
  if (ctx.chat.id == -1002090103134) {
    if (ctx.text == "/close") {
      return bot.editMessageText(-1002116816322, ctx.reply_to_message.forward_from_message_id, "закbрыт")
    }

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
      else if (ctx.video_note) {
        return bot.sendVideoNote(ctx.reply_to_message.text.split(" ")[0], ctx.video_note.file_id)
      }
      else if (ctx.sticker) {
        return bot.sendSticker(ctx.reply_to_message.text.split(" ")[0], ctx.sticker.file_id)
      }
      else if (ctx.document) {
        return bot.sendDocument(ctx.reply_to_message.text.split(" ")[0], ctx.document.file_id)
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
        if (ctx.caption) {
          return bot.sendVideo(ctx.reply_to_message.caption.split(" ")[0], ctx.video.file_id, { caption: ctx.caption})
        }
        else {
          return bot.sendVideo(ctx.reply_to_message.caption.split(" ")[0], ctx.video.file_id)
        }
      }
      else if (ctx.video_note) {
        return bot.sendVideoNote(ctx.reply_to_message.caption.split(" ")[0], ctx.video_note.file_id)
      }
      else if (ctx.sticker) {
        return bot.sendSticker(ctx.reply_to_message.caption.split(" ")[0], ctx.sticker.file_id)
      }
      else if (ctx.document) {
        return bot.sendDocument(ctx.reply_to_message.caption.split(" ")[0], ctx.document.file_id)
      }
    }
  }
})


bot.on('/start', (msg) => bot.sendMessage(msg.chat.id, "hellooo"));

export default bot