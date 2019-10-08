const assert = require('assert')

describe('Список репозиториев ', () => {
  ['/', '/repos/front', '/repos/front/tree/9810b0a1af05464258e4a9629baaece667470b49/app/redux/actionTypes', '/repos/front/blob/9810b0a1af05464258e4a9629baaece667470b49/app/redux/actionTypes/tree.js'].forEach(url => {
    describe(`На странице ${url}`, () => {
      it('Скрыт пока не кликнули', async function () {
        const visible = await this.browser.url(url)
          .isVisible('.RepoSelect-Items')
        assert.ok(!visible, 'Dropdown открыт изначально (такого быть не должно)')
      })
      it('Открыт, когда кликнули', async function () {
        const visible = await this.browser.url(url)
          .click('.RepoSelect-Current')
          .isVisible('.RepoSelect-Items')
        assert.ok(visible, 'Dropdown не открылся')
      })
      it('Работает переход при клике на репозиторий', async function () {
        return this.browser.url(url)
          .click('.RepoSelect-Current')
          .then(async () => {
            const link = await this.browser.$('.RepoSelect-Items a').getAttribute('href')
            const currentUrl = await this.browser.getUrl()
            assert.notStrictEqual(currentUrl, link)
          })
          .click('.RepoSelect-Items a')
          .waitUntil(async function () {
            return await this.getUrl() === await this.$('.RepoSelect-Items a').getAttribute('href')
          }, 500, 'Не успешный переход по ссылке')
      })
      it('После перехода dropdown закрыт', async function () {
        const visible = await this.browser.url(url)
          .click('.RepoSelect-Current')
          .click('.RepoSelect-Items a')
          .waitUntil(async function () {
            return await this.getUrl() !== await this.getAttribute('.RepoSelect-Items a', 'href')
          }, 500, 'Не успешный переход по ссылке')
          .isVisible('.RepoSelect-Items')
        assert.ok(!visible, 'Dropdown остался открытым')
      })
    })
  })

  describe('Внешний вид выпадающего списка', () => {
    it('Когда не выбран', async function () {
      await this.browser.url('/')
        .assertView('not_chosen_hidden', '.RepoSelect')
    })
    it('Когда не выбран и открыт', async function () {
      await this.browser.url('/')
        .click('.RepoSelect-Current')
        .assertView('not_chosen_shown', '.RepoSelect-Items')
    })
    it('Когда выбран', async function () {
      await this.browser.url('/repos/front')
        .assertView('not_chosen_hidden', '.RepoSelect')
    })
    it('Когда выбран и открыт', async function () {
      await this.browser.url('/repos/front')
        .click('.RepoSelect-Current')
        .assertView('not_chosen_shown', '.RepoSelect-Items')
    })
  })
})
