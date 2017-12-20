<template>
  <span class="counter">{{ count }}</span>
</template>

<script>
  import TWEEN from 'tween.js'

  export default {
    name: 'Counter',
    data: () => ({ count: 0 }),

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

        new TWEEN.Tween({ count: startValue })
          .to({ count: endValue }, 500)
          .onUpdate(function () { vm.count = this.count.toFixed(0) })
          .start()

        animate()
      }
    }
  }
</script>

<style scoped>
  .counter {
    margin-top: 3vw;
    font-size: 24vw;
    font-weight: bold;
  }
</style>
