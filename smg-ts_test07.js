const { By, until } = require('selenium-webdriver')
const { ignore, suite } = require('selenium-webdriver/testing')

suite(function (env) {
  describe('Litecart', function () {
    let driver

    before(async function () {
      driver = await env.builder().build()
    })

    it('Entrance from Admin', async function () {

      //_Entrance_From_Admin_=_Part_01_____________________________________________________________

      await driver.get('http://localhost/litecart/admin/')
      await driver.findElement(By.name('username')).sendKeys('admin')
      await driver.findElement(By.name('password')).sendKeys('admin')

      await driver.findElement(By.name('login')).click() //Button 'Авторизоваться'

      await driver.wait(until.titleIs('litecart'), 5000)  // контроль появления новой вкладки

      //_Checking_The_Left_Menu_=_Part_02__________________________________________________________

      // Замечание:  на Ubuntu в WebStorm (в Chrome) стабильность выполнения теста 78%
      // на Win7 в VS Code (в Chrome) - выполняется в 100% случаев

      await driver.manage().setTimeouts( { implicit: 32000 } )

      await driver.findElement(By.css("li#app- a[href*=\"app\"]")).click()  // = Appearence = Внешний вид
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"log\"]")).click()  // Logotype
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"cat\"]")).click()  // = Catalog
      await driver.findElements(By.tagName("h1"))                              // h1



      await driver.findElement(By.css("li#app- a[href*=\"duc\"]")).click()  // Product Groups pro uct rod duc
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"opt\"]")).click()  // Option Groups opti opt
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"man\"]")).click()  // Manufacturers
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"upp\"]")).click()  // Suppliers
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"del\"]")).click()  // Delivery Statuses
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"sol\"]")).click()  // Sold Out Statuses
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"qua\"]")).click()  // Quantity Units
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"csv\"]")).click()  // CSV Import/Export
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"cou\"]")).click()  // = Countries
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"cur\"]")).click()  // Currencies
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href$=\"ers\"]")).click()  // = Customers cus
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"csv\"]")).click()  // CSV Import/Export
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"newsl\"]")).click()  // Newsletter
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"geo\"]")).click()  // = Geo Zones
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"lan\"]")).click()  // = Languages
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"tor\"]")).click()  // Storage Encoding
      await driver.findElements(By.tagName("h1"))                              // h1


      await driver.findElement(By.css("li#app- a[href*=\"mod\"]")).click()  // = Modules
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href$=\"mer\"]")).click()  // Customer mer
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"shi\"]")).click()  // Shipping
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"pay\"]")).click()  // Payment
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"tot\"]")).click()  // Order Total
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"ucc\"]")).click()  // Order Success
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"cti\"]")).click()  // Order Action
      await driver.findElements(By.tagName("h1"))                              // h1



      await driver.findElement(By.css("li#app- a[href*=\"ders\"]")).click()  // = Orders
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"stat\"]")).click()  // Order Statuses
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"pag\"]")).click()  // = Pages
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"rep\"]")).click()  // = Reports
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"mon\"]")).click()  // Monthly Sales
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"produ\"]")).click()  // Most Sold Products
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"hop\"]")).click()  // Most Shopping Customers
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"tti\"]")).click()  // = Settings
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"inf\"]")).click()  // Store Info
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"ult\"]")).click()  // Defaults
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"gen\"]")).click()  // General
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"lis\"]")).click()  // Listings
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"ima\"]")).click()  // Images
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"che\"]")).click()  // Checkout
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"adv\"]")).click()  // Advanced
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"sec\"]")).click()  // Security
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"sli\"]")).click()  // = Slides
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"tax\"]")).click()  // = Tax
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"sse\"]")).click()  // Tax Classes
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"rat\"]")).click()  // Tax Rates
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"nsl\"]")).click()  // = Translations
      await driver.findElements(By.tagName("h1"))                              // h1

      await driver.findElement(By.css("li#app- a[href*=\"sca\"]")).click()  // Scan Files
      await driver.findElements(By.tagName("h1"))

      await driver.findElement(By.css("li#app- a[href*=\"csv\"]")).click()  // CSV Import/Export
      await driver.findElements(By.tagName("h1"))

      await driver.findElement(By.css("li#app- a[href*=\"use\"]")).click()  // = Users
      await driver.findElements(By.tagName("h1"))

      await driver.findElement(By.css("li#app- a[href*=\"vqm\"]")).click()  // = VQmods
      await driver.findElements(By.tagName("h1"))

    })
    after(() => driver && driver.quit())
  })
})
