describe('Просмотр файла', () => {
  new Map([
    ['http://localhost:3008/repos/front/blob/9810b0a1af05464258e4a9629baaece667470b49/app/redux/actionTypes/branch.js', 'branch'],
    ['http://localhost:3008/repos/front/blob/9810b0a1af05464258e4a9629baaece667470b49/app/redux/store.js', 'store']
  ])
    .forEach((fileName, url) => {
      describe(`Отрисован корректно`, () => {
        it(`на странице ${url}`, async function () {
          await this.browser.url(url).assertView('fileViewer_' + fileName, '.FileViewer')
        })
      })
    })
})
