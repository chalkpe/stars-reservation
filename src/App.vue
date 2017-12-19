<template>
  <div>
    <h1>Hello world!</h1>
  </div>
</template>

<script>
  // ensemble stars kakaogame reservation page
  const url = 'https://gameevent.kakao.com/preregistrations/907?from=m_brandpage'

  // user agent for mobile device - iPhone 7
  const userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1'

  // number, comma separated
  const selector = '.txt_game .emp_text'

  export default {
    name: 'App',
    data () {
      return {}
    }
  }
</script>
