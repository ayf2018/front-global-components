<template>
  <div class="type-list">
        <router-link
          v-for="(t, i) in types"
          :key="t.code"
          :to="t.src"
          :class="getClass(t.code)"
      >
          <img :src="t.icon">
          <div class="type-label">{{t.title}}</div>
        </router-link>
  </div>
</template>

<script>
export default {
  name: 'iconTypes',
  props: ['types', 'currentTypeCode'],
  data () {
    return {
      timer: null
    }
  },
  methods: {
    getClass (code) {
      return {
        'type-item': true,
        active: this.currentTypeCode === code
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/basics.less";

.type-list {
  width: 67px;
  height: 100%;
  float: left;

  .type-item {
    display: inline-block;
    width: 67px;
    height: 70px;
    position: relative;
    padding-top: 12px;
    margin-bottom: 2px;
    text-align: center;
    color: @color-white;
    background-color: @background-color-upper;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      cursor: pointer;
      background-color: @background-color;
    }

    &.active {
      box-shadow: 0 0 10px rgb(45, 220, 78) inset;
    }

    .num {
      display: inline-block;
      width: 20px;
      height: 20px;
      line-height: 20px;
      border-radius: 50%;
      position: absolute;
      top: 25px;
      right: -10px;
      z-index: 3;
      color: @color-white;
      background-color: rgb(204, 65, 78);
      text-align: center;

      &.num3 {
        width: 30px;
        border-radius: 10px;
        top: 25px;
        right: -15px;
      }
    }

    .type-label {
      text-align: center;
      margin-top: 2px;
    }
  }
}
</style>
