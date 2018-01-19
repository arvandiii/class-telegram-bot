const TelegramBot = require('node-telegram-bot-api')
const token = '454088608:AAFIBePz5j6dBAzX4cNIM5Tz8xIDcTipsgg'

const bot = new TelegramBot(token, { polling: true })

bot.on('message', msg => {
  const chatId = msg.chat.id
  bot.sendMessage(chatId, 'bot is working')
})
