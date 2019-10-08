const assert = require('assert')

describe('Хлебные крошки ', () => {
  new Map([
    ['/repos/front', 'repo'],
    ['/repos/front/tree/9810b0a1af05464258e4a9629baaece667470b49/app/redux/actionTypes', 'folder'],
    ['/repos/front/blob/9810b0a1af05464258e4a9629baaece667470b49/app/redux/actionTypes/tree.js', 'file']
  ]).forEach((fileName, url) => {
    describe(`На странице ${url}`, () => {
      it('Присутствуют', async function () {
        return await this.browser.url(url).assertView('breadcrumbs_' + fileName, '.Breadcrumbs')
      })
    })
  })
})
