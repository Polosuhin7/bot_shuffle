const puppeteer = require('puppeteer');
const cheerio = require('cheerio')
const Telegraf = require('telegraf');
// const request = require('request');
const token = '847696441:AAGMEBOF5rKEYUaeGIy-e1gAOvbKi3UlQ_k';

const bot = new Telegraf(token)
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

bot.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log('Response time %sms', ms)
});
bot.on('error', err => console.warn(err))

// class Shuffle {
//   constructor(URL, timeUpdate = 1e3 * 60) {
//     this.url = URL;
//     this.currentContext = '';
//     this.getSite();
//     this.timer = this.setTaimer(timeUpdate)
//   }
//   async getSite() {
//     try {
//       const browser = await puppeteer.launch({headless: false}) ; 
//       const page = await browser.newPage();
//       await page.goto(this.url) ; 
//       await page.emulateMedia('screen') ; 
//       this.currentContext = await page.content()
//       // await page.screenshot({path: `example-${ Date.now() }.png`});
//       await browser.close() ;
//     } catch(err) {
//       console.warn(err);
//     }
//   }
//   async checkSiteState() {
//     await this.getSite();
//     const $ = cheerio.load(this.currentContext);
//     const body = $('body').text()
//     console.log(body)
//     if(body.match(/\bBOOST 700\b|\bboost 700\b\bBOOST 700 V2\b/g)) {
//       //this.sendNotifation()
//       console.log('Совпадение есть')
//     }
//   }
//   setTaimer(time) {
//     const timer = setInterval(() => {
//       this.checkSiteState()
//     }, time)
//     return timer
//   }
//   clearTimer() {
//     clearInterval(this.timer)
//   }
// }
// const addidasShuffle = new Shuffle('https://www.adidas.ru/yeezy')
// setTimeout(() => {
//   addidasShuffle.clearTimer();
// }, 30000);