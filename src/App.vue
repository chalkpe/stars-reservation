<template>
  <div class="parent">
    <span>{{ now }}</span>
    <span>현재 한국 앙상블스타즈 <a href="https://gameevent.kakao.com/preregistrations/907">사전 예약자</a> 수</span>
    <animated-integer :value="count"></animated-integer>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-111450588-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-111450588-1');
    </script>
    <div class="copy">팬메이드 페이지입니다. (주)카카오게임즈와는 일절 관계없습니다. (c) 2017 <a href="https://twitter.com/amato17">@amato17</a></div>
  </div>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'

  export default {
    name: 'App',

    data: () => ({
      now: '0000년 00월 00일 00시 00분 00초',
      count: 0,
      interval: null
    }),

    methods: {
      async update () {
        const res = await axios.get('/data')

        this.count = parseInt(res.data)
        this.now = moment().format('YYYY년 MM월 DD일 HH시 MM분 ss초')
      }
    },

    mounted () {
      this.interval = setInterval(() => this.update(), 1000)
    },

    beforeDestroy () {
      clearInterval(this.interval)
    }
  }
</script>

<style>
  @import url(//fonts.googleapis.com/earlyaccess/hanna.css);

  a {
    color: black;
    text-decoration: none;
  }

  a:hover {
    color: #666;
  }

  span a {
    color: white;
    padding: 0 0.5vw;
    background-color: black;
  }

  span a:hover {
    color: white;
    background-color: #666;
  }

  .parent {
    color: black;
    font-family: Hanna, sans-serif;

    height: 100%;
    display: grid;
    padding-top: 3vw;
  }

  .parent span {
    margin: auto;
    font-size: 6vw;
    text-align: center;
  }

  .parent span:last-of-type {
    margin-top: 3vw;
    font-size: 24vw;
    font-weight: bold;
  }

  .copy {
    opacity: 0.3;
    position: absolute;
    bottom: 0; right: 0; left: 0;
    text-align: center;
    padding: 0.2vw;
    font-size: 1.5vw;
  }
</style>
