<template>
  <div class="company-logo">
    <img class="logo" :src="this.$$picture['logo_right_bottom']" alt="">
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="less" scoped>
.company-logo {
  position: fixed;
  right: 0;
  bottom: 20px;

  .logo {
    width: 150px;
  }
}

@media screen and (max-width: 900px) {
  .company-logo {
    bottom: 30px;

    .logo {
      width: 100px;
    }
  }
}
</style>
