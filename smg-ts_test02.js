const { By, until } = require('selenium-webdriver')
const { ignore, suite } = require('selenium-webdriver/testing')

suite(function (env) {
  describe('Litecart', function () {
    let driver

    before(async function () {
      driver = await env.builder().build()
    })

    it('Entrance from Admin', async function () {
      await driver.get('http://localhost/litecart/admin/')
      await driver.findElement(By.name('username')).sendKeys('admin')
      await driver.findElement(By.name('password')).sendKeys('admin')

      await driver.findElement(By.name('login')).click() //Button 'Авторизоваться'

      await driver.wait(until.titleIs('litecart'), 5000)  // контроль появления новой вкладки
    })
    after(() => driver && driver.quit())
  })
})
