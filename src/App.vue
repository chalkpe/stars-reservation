<template>
  <div class="parent">
    <timer></timer>
    <span>현재 한국 앙상블스타즈 <a class="block" href="https://gameevent.kakao.com/preregistrations/907">사전 예약자</a> 수</span>
    <counter :value="count"></counter>

    <span id="copy">
      <a href="http://stars.kakaogame.com">팬메이드 페이지입니다. (주)카카오게임즈와는 일절 관계없습니다.</a>
      <br>
      <a href="https://twitter.com/amato17">(c) 2017 Chalk</a>
      <a href="https://github.com/ChalkPE/stars-reservation/blob/master/LICENSE">Licensed under MIT</a>
      <a href="https://github.com/ChalkPE/stars-reservation">Fork on GitHub</a>
    </span>
  </div>
</template>

<script>
  import axios from 'axios'

  import Timer from './components/Timer.vue'
  import Counter from './components/Counter.vue'

  export default {
    name: 'App',
    components: { Timer, Counter },

    data: () => ({ count: 0 }),
    mounted () { this.update() },

    methods: {
      async update () {
        const { data } = await axios.get('/data')

        this.count = parseInt(data, 10)
        setTimeout(() => this.update(), 1000)
      }
    }
  }
</script>

<style lang="scss">
  @import url(//fonts.googleapis.com/earlyaccess/hanna.css);

  .parent {
    display: grid;
    height: 100%;
    padding-top: 3vw;

    color: #000;
    font-family: Hanna, sans-serif;

    span {
      margin: auto;
      font-size: 6vw;
      text-align: center;
    }
  }

  a {
    color: #000;
    text-decoration: none;

    &:hover {
      color: #1abd9d;
    }

    &.block {
      color: #fff;
      padding: 0 0.5vw;
      background-color: #000;

      &:hover {
        background-color: #1abd9d;
      }
    }
  }

  #copy {
    position: absolute;
    bottom: 0; right: 0; left: 0;

    opacity: 0.33;
    padding: 0.25vw;
    font-size: 1vw;

    a + a:before {
      content: ' ★ ';
    }
  }
</style>
