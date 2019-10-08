const assert = require('assert')

describe('Список репозиториев', () => {
  it('Скрыт пока не кликнули', async function () {
    const visible = await this.browser.url('/')
      .isVisible('.RepoSelect-Items')
    assert.ok(!visible, 'Dropdown не открылся')
  })
  it('Открыт, когда кликнули', async function () {
    const visible = await this.browser.url('/')
      .click('.RepoSelect-Current')
      .isVisible('.RepoSelect-Items')
    assert.ok(visible, 'Dropdown не открылся')
  })
})
