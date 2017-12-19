module.exports = {
  use: [
    '@neutrinojs/vue',
    ['@neutrinojs/web', {
      devServer: {
        proxy: { '/data': { target: `http://127.0.0.1:8080` } }
      }
    }]
  ]
}
