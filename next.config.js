const path = require('path')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts')
require('dotenv').config()
const webpack = require('webpack')

module.exports = withFonts(
  withCSS(
    withSass({
        webpack (config) {
          config.resolve.alias['components'] = path.join(__dirname, 'components')
          config.resolve.alias['app'] = path.join(__dirname, 'app')

          /**
           * Returns environment variables as an object
           */
          const env = Object.keys(process.env).reduce((acc, curr) => {
            acc[`process.env.${curr}`] = JSON.stringify(process.env[curr])
            return acc
          }, {})

          /** Allows you to create global constants which can be configured
           * at compile time, which in our case is our environment variables
           */
          config.plugins.push(new webpack.DefinePlugin(env))

          return config
        }
      }
    )
  )
)
