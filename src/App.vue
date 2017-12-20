<template>
  <div class="parent">
    <timer></timer>
    <span>현재 한국 앙상블스타즈 <a class="block" href="https://gameevent.kakao.com/preregistrations/907">사전 예약자</a> 수</span>
    <counter :value="count"></counter>
    <goal :count="count"></goal>
    <copyright></copyright>
  </div>
</template>

<script>
  import axios from 'axios'

  import Goal from './components/Goal.vue'
  import Timer from './components/Timer.vue'
  import Counter from './components/Counter.vue'
  import Copyright from './components/Copyright.vue'

  export default {
    name: 'App',
    components: { Goal, Timer, Counter, Copyright },

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
</style>
