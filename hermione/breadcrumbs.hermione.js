const assert = require('assert')
const urlParse = require('url').parse

describe('Хлебные крошки ', () => {
  new Map([
    ['/repos/front', 'repo'],
    ['/repos/front/tree/9810b0a1af05464258e4a9629baaece667470b49/app/redux/actionTypes', 'folder'],
    ['/repos/front/blob/9810b0a1af05464258e4a9629baaece667470b49/app/redux/actionTypes/tree.js', 'file']
  ])
    .forEach((fileName, url) => {
      describe(`На странице ${url}`, () => {
        it('Присутствуют', async function () {
          return await this.browser.url(url).assertView('breadcrumbs_' + fileName, '.Breadcrumbs')
        })
      })
    })

  new Map([
    ['/repos/front/tree/master', '/repos/front'],
    ['/repos/front/tree/master/components', '/repos/front/tree/master'],
    ['/repos/front/tree/9810b0a1af05464258e4a9629baaece667470b49/app/redux/actionTypes', '/repos/front/tree/9810b0a1af05464258e4a9629baaece667470b49/app/redux'],
    ['/repos/front/blob/9810b0a1af05464258e4a9629baaece667470b49/app/redux/actionTypes/tree.js', '/repos/front/tree/9810b0a1af05464258e4a9629baaece667470b49/app/redux/actionTypes']
  ])
    .forEach((lastLink, url) => {
      it(`Верная последняя ссылка в крошках на странице ${url}`, async function () {
        const href = await this.browser.url(url).$('.Breadcrumbs-Link:last-of-type').getAttribute('href')
        assert.strictEqual(urlParse(href).path, lastLink)
      })
      it(`Верный переход по ссылке в хлебных крошках на странице ${url}`, async function () {
        return this.browser.url(url).$('.Breadcrumbs-Link:last-of-type').click()
          .waitUntil(async function () {
            return urlParse(await this.getUrl()).path !== lastLink
          }, 1500, 'Не успешный переход по ссылке')
      })
    })
})
