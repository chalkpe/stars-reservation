<template>
  <span>{{ value }}</span>
</template>

<script>
  import TWEEN from 'tween.js'

  export default {
    name: 'Counter',

    data: () => ({
      tweeningValue: 0
    }),

    props: {
      value: {
        type: Number,
        required: true
      }
    },

    mounted () {
      this.tween(0, this.value)
    },

    watch: {
      value (newValue, oldValue) {
        this.tween(oldValue, newValue)
      }
    },

    methods: {
      tween (startValue, endValue) {
        const vm = this
        function animate () {
          if (TWEEN.update()) requestAnimationFrame(animate)
        }

        new TWEEN.Tween({ value: startValue })
          .to({ value: endValue }, 500)
          .onUpdate(function () { vm.tweeningValue = Math.floor(this.value) })
          .start()

        animate()
      }
    }
  }
</script>

<style scoped>
  span {
    margin-top: 3vw;
    font-size: 24vw;
    font-weight: bold;
  }
</style>
