const { By, Key, until } = require('selenium-webdriver')
const { ignore, suite } = require('selenium-webdriver/testing')

suite(function (env) {
  describe('Google Search', function () {
    let driver

    before(async function () {
      driver = await env.builder().build()
    })

    it('demo', async function () {
      await driver.get('https://www.google.com/ncr')
      await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN)
      await driver.wait(until.titleIs('webdriver - Google Search'), 1000)
    })
    after(() => driver && driver.quit())
  })
})
