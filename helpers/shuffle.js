const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const UserAgent = require('user-agents')
class Shuffle {
  constructor(URL, wtfind, timeUpdate = 1e3 * 60) {
    this.url = URL;
    this.currentContext = '';
    this.wtfind = wtfind;
    this.getSite();
    this.timer = setInterval(() => {
      this.checkSiteState()
    }, timeUpdate);
    this.callback = '';
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
    if(body.match(this.wtfind)) {
      this.onchange()
    }
    else {
      console.log('Не надено')
    }
  }
  clearTimer() {
    clearInterval(this.timer)
  }
}
module.exports = Shuffle;