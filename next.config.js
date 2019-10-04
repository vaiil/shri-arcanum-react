const path = require('path')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

module.exports = withCSS(withSass({
  webpack (config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'components')

    return config
  }
}))
