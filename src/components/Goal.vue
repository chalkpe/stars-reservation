<template>
  <span class="goal">
    <template v-if="goal">
      다음 목표 {{ goal.name }}까지
      {{ (count / goal.count * 100).toFixed(2) }}%
      <br>
      <i class="secondary">{{ goal.rewards }}</i>
    </template>

    <template v-else>
      Amazing!
      <audio autoplay src="static/amazing.mp3"></audio>
    </template>
  </span>
</template>

<script>
  const goals = [
    {
      name: '30만',
      count: 300000,
      rewards: '고급 스카우트 티켓 5장 + 크리스탈(소) 색상별 5개'
    },

    {
      name: '50만',
      count: 500000,
      rewards: '고급 스카우트 티켓 5장 + 크리스탈(중) 색상별 2개'
    },

    {
      name: '70만',
      count: 700000,
      rewards: '고급 스카우트 티켓 7장 + 크리스탈(대) 색상별 2개'
    },

    {
      name: '100만',
      count: 1000000,
      rewards: '한국 최초 공개 신규 4성 카드'
    }
  ]

  export default {
    name: 'Goal',

    props: {
      count: {
        type: Number,
        required: true
      }
    },

    computed: {
      goal () {
        return goals.find(g => this.count < g.count)
      }
    }
  }
</script>

<style scoped lang="scss">
  .goal {
    font-size: 4vw;
    i { font-size: 3vw; }
  }
</style>
