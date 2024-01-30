import TeleBot from "telebot"
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://aaxeiskpmpjxmdpdehop.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFheGVpc2twbXBqeG1kcGRlaG9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1NjYzMDUsImV4cCI6MjAyMjE0MjMwNX0.jZ7PaYu3mWw0Y0_uNJ3j97QVhGKXuKzU3VORszwwvmE')

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)
const chanel_id = -1002116816322
const global_chat_id = -1002090103134



bot.on(["text", "photo", "voice", "video", "videoNote", "sticker", "document"], async (ctx) => {
  if (ctx.chat.id != -1002116816322 && ctx.chat.id != -1002090103134) {
    const { data, error } = await supabase.from('tasks').select().eq('user_id', ctx.chat.id)
    if (data.length > 0){
      const to_chat = -1002090103134
      if (ctx.text) {
        bot.sendMessage(-1002090103134, ctx.text)
      }

    } else {
      const to_chat = -1002116816322
      const { error } = await supabase.from('tasks').insert({ user_id: ctx.chat.id })
    }

    if (ctx.caption) {
        if (ctx.photo) {
          return bot.sendPhoto(to_chat, ctx.photo[0].file_id, { caption: `${ctx.chat.id} Открыт\n ${ctx.caption}` })
        }
        else if (ctx.video) {
          return bot.sendVideo(to_chat, ctx.file_id, { caption: `${ctx.chat.id} Открыт\n ${ctx.caption}` })
        }
        else if (ctx.document) {
          return bot.sendDocument(to_chat, ctx.document.file_id, { caption: `${ctx.chat.id} Открыт\n ${ctx.caption}` })
        }
    }
    else {
      if (ctx.text) {
        return bot.sendMessage(-1002116816322, `${ctx.chat.id} Открыто \n ${ctx.text}`);
      }
      else if (ctx.photo) {
        return bot.sendPhoto(to_chat, ctx.photo[0].file_id, { caption: `${ctx.chat.id} Открыт\n` });
      }
      else if (ctx.voice) {
        return bot.sendVoice(to_chat, ctx.voice.file_id, { caption: `${ctx.chat.id} Открыт` });
      }
      else if (ctx.video) {
        return bot.sendVideo(to_chat, ctx.video.file_id,  { caption: `${ctx.chat.id} Открыт` });
      }
      else if (ctx.video_note) {
        return bot.sendVideoNote(to_chat, ctx.video_note.file_id);
      }
      else if (ctx.sticker) {
        return bot.sendSticker(to_chat, ctx.sticker.file_id);
      }
      else if (ctx.document) {
        return bot.sendDocument(to_chat, ctx.document.file_id, { caption: `${ctx.chat.id} Открыт` });
      }
    }
  }
});


bot.on(["text", "photo", "voice", "video", "videoNote", "sticker", "document"], ctx => {
  if (ctx.chat.id == -1002090103134) {
    if (ctx.text == "/close") {
      return bot.editMessageText(-1002116816322, ctx.reply_to_message.forward_from_message_id, "щ")
    }



    if (ctx.reply_to_message.text) { 

      if (ctx.text) {
        if (ctx.reply_to_message.is_automatic_forward){
          return bot.sendMessage(363625457, JSON.stringify(ctx))
        }
        return bot.sendMessage(-1002116816322,JSON.stringify(ctx))
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