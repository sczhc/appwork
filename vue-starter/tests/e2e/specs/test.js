// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('h4')
      .assert.containsText('h4', 'Home')
      .assert.elementCount('button.btn', 1)
      .end()
  }
}
