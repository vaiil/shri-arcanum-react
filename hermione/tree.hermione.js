const assert = require('assert')
const urlParse = require('url').parse

describe('Список файлов', () => {
  [
    '/repos/front',
    '/repos/front/tree/9810b0a1af05464258e4a9629baaece667470b49',
    '/repos/front/tree/9810b0a1af05464258e4a9629baaece667470b49/app/redux/actionTypes'
  ]
    .forEach((url) => {
      describe(`присутствует`, () => {
        it(`На странице ${url}`, async function () {
          assert.ok(await this.browser.url(url).isExisting('.Tree'))
        })
      })
    });

  // Не можем вызвать assertView на странице /repos/front так как файлы в ветка master могут меняться
  new Map([
    ['/repos/front/tree/9810b0a1af05464258e4a9629baaece667470b49', 'root'],
    ['/repos/front/tree/9810b0a1af05464258e4a9629baaece667470b49/app/redux/actionTypes', 'folder']
  ])
    .forEach((fileName, url) => {
      describe(`отрисован корректно`, () => {
        it(`на странице ${url}`, async function () {
          await this.browser.url(url).assertView('tree_' + fileName, '.Tree')
        })
      })
    })

  new Map([
    ['/repos/front/tree/9810b0a1af05464258e4a9629baaece667470b49', '/repos/front/tree/9810b0a1af05464258e4a9629baaece667470b49/.idea'],
    ['/repos/front/tree/9810b0a1af05464258e4a9629baaece667470b49/app/redux/actionTypes', '/repos/front/blob/9810b0a1af05464258e4a9629baaece667470b49/app/redux/actionTypes/branch.js']
  ])
    .forEach((resultUrl, url) => {
      describe(`переход по 1ому элементу выполнен`, () => {
        it(`на странице ${url}`, async function () {
          await this.browser.url(url).click('.Tree a').waitUntil(async function () {
            return urlParse(await this.getUrl()).path !== resultUrl
          }, 1500, 'Не успешный переход по ссылке')
        })
      })
    })
})
