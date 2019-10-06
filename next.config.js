const path = require('path')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts')

module.exports = withFonts(
  withCSS(
    withSass({
        webpack (config) {
          config.resolve.alias['components'] = path.join(__dirname, 'components')
          config.resolve.alias['app'] = path.join(__dirname, 'app')

          return config
        }
      }
    )
  )
)
