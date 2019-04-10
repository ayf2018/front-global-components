<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated fadeInRight"
    leave-active-class="animated bounceOutRight"
  >
    <div v-show="modal" :style="{'height':frameHeight+'px','marginTop':'-'+frameHeight/2+'px'}" class="wrap frame">
      <h1 class="title">{{title}}</h1>
      <div class="container">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'my-frame',
  props: {
    title: {
      type: [String],
      default: ''
    },
    modal: {
      type: [Boolean],
      default: false
    }
  },
  data () {
    return {
      innerHeight: window.innerHeight
    }
  },
  computed: {
    frameHeight () {
      return this.innerHeight * 0.8
    }
  }
}
</script>

<style lang="less" scoped>
  .wrap {
    font-family: "微软雅黑";
    width: 370px;
    height: 780px;
    position: fixed;
    top: 50%;
    right: 0;
    margin-top: -396px;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 10px;

    .title {
      position: absolute;
      top: -38px;
      color: #fff;
      font-size: 20px;
      font-weight: normal;
    }

    .container {
      height: 100%;
      border: 2px solid #f5b82b;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
    }
  }

  @media screen and (max-width: 1366px) {
    .wrap {
      zoom: 0.8;
    }
  }
</style>
