<template>
  <div id="app" :class="{ dark, done }">
    <div class="parent">
      <timer></timer>
      <span>현재 한국 앙상블스타즈 <a class="block" href="https://gameevent.kakao.com/preregistrations/907">사전 예약자</a> 수</span>
      <counter :value="count"></counter>
      <goal :count="count"></goal>
      <copyright :dark="dark" @toggle="dark = !dark"></copyright>
    </div>
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

    mounted () { this.update() },
    data: () => ({ count: 0, dark: false }),

    methods: {
      async update () {
        const { data } = await axios.get('/data')

        this.count = parseInt(data, 10)
        setTimeout(() => this.update(), 1000)
      }
    },

    computed: {
      done () { return this.count >= 1000000 }
    },
  }
</script>

<style lang="scss">
  @import url(//fonts.googleapis.com/earlyaccess/hanna.css);

  $dark: #202020;
  $light: #fefefe;
  $highlight: #1abd9d;
  $secondary: #808080;

  html, body, #app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  #app {
    color: $dark;
    background-color: $light;
    font-family: Hanna, sans-serif;

    &.done {
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url("static/wataru.png");
    }

    a {
      text-decoration: none;

      color: $dark;
      &:hover { color: $highlight; }
    }

    a.block {
      color: $light;
      padding: 0 0.5vw;

      background-color: $dark;
      &:hover { background-color: $highlight; }
    }

    &.dark {
      color: $light;
      background-color: $dark;

      a {
        color: $light;
        &.block {
          color: $dark;
          background-color: $light;
          &:hover { background-color: $highlight; }
        }
      }
    }

  }

  .secondary {
    color: $secondary !important;
  }

  .has-shadow {
    text-shadow: 0.025em 0.025em 0 $secondary;
  }

  .parent {
    display: grid;

    span {
      margin: auto;
      font-size: 6vw;
      text-align: center;
    }
  }
</style>
