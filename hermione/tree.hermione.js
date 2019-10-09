const assert = require('assert')
const urlParse = require('url').parse

describe('Список файлов', () => {
  [
    '/repos/front',
    '/repos/front/tree/9810b0a1af05464258e4a9629baaece667470b49',
    '/repos/front/tree/9810b0a1af05464258e4a9629baaece667470b49/app/redux/actionTypes'
  ]
    .forEach((fileName, url) => {
      describe(`На странице ${url}`, () => {
        it('Присутствует', async function () {
          return await this.browser.url(url).isExisting('.Tree')
        })
      })
    })
})
