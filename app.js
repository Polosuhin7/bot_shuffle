const Telegraf = require('telegraf');
// const request = require('request');
const Shuffle = require('./helpers/shuffle');
const token = '847696441:AAGMEBOF5rKEYUaeGIy-e1gAOvbKi3UlQ_k';

const bot = new Telegraf(token);
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there1'))
bot.launch()

bot.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log('Response time %sms', ms)
});
bot.on('error', err => console.warn(err))


const addidasShuffle = new Shuffle('https://www.adidas.ru/yeezy');
addidasShuffle.onchange( () => bot.telegram.sendMessage(`Что то обновилось перейдите по ссылке https://www.adidas.ru/yeezy `))