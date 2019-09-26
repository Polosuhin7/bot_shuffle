const puppeteer = require('puppeteer');
const cheerio = require('cheerio')
const Telegraf = require('telegraf');
const request = require('request');
const token = '982235022:AAF2-shXycJDc5tVRlT_QSwNfyRroPLWjtQ';

const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

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