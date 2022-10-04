const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const account = 'tranvanhieu01';
const password = 'tranvanhieu2002';
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
(async function example() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    try {
      await driver.get('https://www.neobux.com/m/l/');
    
      await driver.findElement(By.id('Kf1')).sendKeys(account, Key.RETURN);
      await sleep(500)
      await driver.findElement(By.id('Kf2')).sendKeys(password, Key.RETURN);
      await sleep(5000)
      await driver.findElement(By.className('button medium green')).click();
      
    } finally {
      console.log("success access");
      // await driver.quit();
    }
  })();