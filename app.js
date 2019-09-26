const puppeteer = require('puppeteer');
const cheerio = require('cheerio')
const Telegraf = require('telegraf');
const request = require('request');
const token = '982235022:AAF2-shXycJDc5tVRlT_QSwNfyRroPLWjtQ';

const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});

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