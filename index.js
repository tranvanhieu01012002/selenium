var webdriver = require('selenium-webdriver');

const openWebDriver = () => {
    const driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.get('https://www.lambdatest.com/').then(()=>{
        driver.findElement(webdriver.By.linkText('Platform'))
        .click()
        .then(()=>{
            driver.getTitle().then(()=>{
                setTimeout(()=>{
                    console.log("hi anh Hieu");
                    driver.quit()
                },5000)
            })
        })
    })
}
openWebDriver();