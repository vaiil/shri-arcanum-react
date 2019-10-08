const assert = require('assert')

describe('Список репозиториев', () => {
  it('Скрыт пока не кликнули', async function () {
    const visible = await this.browser.url('/')
      .isVisible('.RepoSelect-Items')
    assert.ok(!visible, 'Dropdown открыт изначально (такого быть не должно)')
  })
  it('Открыт, когда кликнули', async function () {
    const visible = await this.browser.url('/')
      .click('.RepoSelect-Current')
      .isVisible('.RepoSelect-Items')
    assert.ok(visible, 'Dropdown не открылся')
  })
  it('Работает переход при клике на репозиторий', async function () {
    return this.browser.url('/')
      .click('.RepoSelect-Current')
      .then(async () => {
        const link = await this.browser.$('.RepoSelect-Items a').getAttribute('href')
        const currentUrl = await this.browser.getUrl()
        assert.notStrictEqual(currentUrl, link)
      })
      .click('.RepoSelect-Items a')
      .waitUntil(async function () {
        return await this.getUrl() !== await this.getAttribute('.RepoSelect-Items a', 'href')
      }, 5000, 'Не успешный переход по ссылке')
  })
  it('После перехода dropdown закрыт', async function () {
    const visible = await this.browser.url('/')
      .click('.RepoSelect-Current')
      .click('.RepoSelect-Items a')
      .waitUntil(async function () {
        return await this.getUrl() !== await this.getAttribute('.RepoSelect-Items a', 'href')
      }, 5000, 'Успешный переход по ссылке')
      .isVisible('.RepoSelect-Items')
    assert.ok(!visible, 'Dropdown остался открытым')
  })
})
