const path = require('path')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts')
require('dotenv').config()
const Dotenv = require('dotenv-webpack')

module.exports = withFonts(
  withCSS(
    withSass({
        webpack (config) {
          config.resolve.alias['components'] = path.join(__dirname, 'components')
          config.resolve.alias['app'] = path.join(__dirname, 'app')

          config.plugins = config.plugins || []
          config.plugins = [
            ...config.plugins,

            // Read the .env file
            new Dotenv({
              path: path.join(__dirname, '.env'),
              systemvars: true
            })
          ]
          return config
        }
      }
    )
  )
)
