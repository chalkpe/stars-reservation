import TWEEN from 'tween.js'

import Vue from 'vue/dist/vue.common.js'
import App from './App.vue'

Vue.component('animated-integer', {
  template: '<span>{{ tweeningValue }}</span>',
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  data: () => ({ tweeningValue: 0 }),
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
      const vm = this
      function animate () {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }

      new TWEEN.Tween({ tweeningValue: startValue })
        .to({ tweeningValue: endValue }, 500)
        .onUpdate(function () {
          vm.tweeningValue = this.tweeningValue.toFixed(0)
        })
        .start()

      animate()
    }
  }
})

new Vue({
  el: '#root',
  render: h => h(App),
})
