<template>
  <span id="copy">
    <a href="http://stars.kakaogame.com">팬메이드 페이지입니다. (주)카카오게임즈와는 일절 관계없습니다.</a>
    <br>
    <a href="https://github.com/ChalkPE">(c) 2017 ChalkPE</a>
    <a href="https://github.com/ChalkPE/stars-reservation/blob/master/LICENSE">Licensed under MIT</a>
    <a href="https://github.com/ChalkPE/stars-reservation">Fork on GitHub</a>
  </span>
</template>

<script>
  export default {
    name: 'Copyright'
  }
</script>


<style lang="scss" scoped>
  #copy {
    position: absolute;
    bottom: 0; right: 0; left: 0;

    opacity: 0.3;
    padding: 0.5vw;
    font-size: 16px;

    a + a:before {
      content: ' ★ ';
    }
  }
</style>
