const Shuffle = require('./helpers/shuffle');

const Telegraf = require('telegraf');
const token = '847696441:AAGMEBOF5rKEYUaeGIy-e1gAOvbKi3UlQ_k';

const bot = new Telegraf(token);
bot.start((ctx) => ctx.reply('Привет, я уведомлю тебя об изменениях на сайте https://www.adidas.ru/yeezy'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there1'))
bot.launch()


const addidasShuffle = new Shuffle('https://www.adidas.ru/yeezy',
  /\bBOOST 350\b|\bboost 350\b\bBOOST 350 V2\b/g);
addidasShuffle.onchange = () => bot.telegram.sendMessage('Что то поменялось, перейдите по ссылке https://www.adidas.ru/yeezy');