const Emitter = require("events");
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const UserAgent = require('user-agents')
class Shuffle {
  constructor(URL, timeUpdate = 1e3 * 60) {
    this.url = URL;
    this.currentContext = '';
    this.getSite();
    this.timer = this.setTaimer(timeUpdate)
  }
  async getSite() {
    try {
      const browser = await puppeteer.launch() ; 
      const userAgent = new UserAgent().toString()
      const page = await browser.newPage();
      await page.setUserAgent(userAgent);
      await page.goto(this.url) ; 
      await page.emulateMedia('screen') ; 
      this.currentContext = await page.content()
      // await page.screenshot({path: `example-${ Date.now() }.png`});
      await browser.close() ;
    } catch(err) {
      console.warn(err);
    }
  }
  async checkSiteState() {
    await this.getSite();
    const $ = cheerio.load(this.currentContext);
    const body = $('body').text()
    // if(body.match(/\bBOOST 700\b|\bboost 700\b\bBOOST 700 V2\b/g)) {
      this.onchange()
    // }
  }
  onchange(callback) {
    if(callback) {
      this.callback = callback;
      this.callback()
    }
    else {
      this.callback();
    }

  }
  setTaimer(time) {
    const timer = setInterval(() => {
      this.checkSiteState()
    }, time)
    return timer
  }
  clearTimer() {
    clearInterval(this.timer)
  }
}
module.exports = Shuffle;