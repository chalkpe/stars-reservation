<template>
  <span>{{ now }}</span>
</template>

<script>
  import moment from 'moment'

  export default {
    data: () => ({
      timer: null,
      now: '0000년 00월 00일 00시 00분 00초'
    }),

    mounted () {
      this.timer = setInterval(() =>
        (this.now = moment().format('YYYY년 MM월 DD일 HH시 mm분 ss초')), 100)
    },

    beforeDestroy () {
      clearInterval(this.timer)
    }
  }
</script>

<style>

</style>
