module.exports = {
  use: [
    '@neutrinojs/vue',
    ['@neutrinojs/web', {
      html: { title: '한스타 사전예약 카운터 by @amato17' },
      devServer: {
        proxy: { '/data': { target: `http://127.0.0.1:8080` } }
      }
    }]
  ]
}
