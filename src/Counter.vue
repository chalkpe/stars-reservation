<template>
  <span>{{ value }}</span>
</template>

<script>
export default {
  name: 'Counter',

  data: () => ({ value: 0 }),
  props: {
    value: {
      type: Number,
      required: true
    }
  },

  watch: {
    value (newValue, oldValue) {
      this.tween(oldValue, newValue)
    }
  },
  mounted () {
    this.tween(0, this.value)
  },

  methods: {
    tween (startValue, endValue) {
      new TWEEN.Tween({ tweeningValue: startValue })
        .to({ tweeningValue: endValue }, 500)
        .onUpdate(obj => this.value = obj.value.toFixed(2))
        .start()

      (function animate () {
        if (TWEEN.update()) requestAnimationFrame(animate)
      }())
    }
  }
}
</script>
