<template>
  <div class="scaling">
    <div class="triangle" @click="state=!state;">
      <span v-show="!state" class="title">点击展开</span>
      <div :class="{isShow:!state}" class="container">
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
      </div>
    </div>
    <div v-show="state" class="content" >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scaling',
  data () {
    return {
      state: true
    }
  },
  props: {
    width: {
      type: [Number, String],
      default: 272
    },
    height: {
      type: [Number, String],
      default: 300
    }
  },
  computed: {
    contentHeight: function () {
      return this.state ? this.height : 0
    }
  }
}
</script>

<style lang="less" scoped>
  /* 安 */
  .scaling {
    width: 272px;
    position: fixed;
    z-index: 9999;
    bottom: 0;
    left: 0;

    .triangle {
      border-bottom: 2px solid rgb(236, 196, 77);
      text-align: center;

      &:hover {
        cursor: pointer;
      }

      .title {
        position: relative;
        bottom: 15px;
        left: 0;
        color: #fff;
      }
    }

    .content {
      height: 100%;
      overflow: auto;
      padding-bottom: 10px;
      background: rgba(0, 0, 0, 0.5);
      transition: all ease-in-out 0.6s;
    }
  }

  @media (max-width: 1366px) {
    .scaling {
      width: 217px;
    }
  }

  /* 金 */
  .container {
    position: relative;
    width: 24px;
    height: 20px;
    left: 50%;
    top: -30px;
    margin-left: -12px;
  }

  .isShow {
    .chevron {
      &::before {
        transform: skew(0deg, -30deg);
      }

      &::after {
        transform: skew(0deg, 30deg);
      }

      transform: translateY(45px) scale3d(0.5, 0.5, 0.5);
      animation: moveUp 3s ease-out infinite;

      &:first-child {
        animation: moveUp 3s ease-out 1s infinite;
      }

      &:nth-child(2) {
        animation: moveUp 3s ease-out 2s infinite;
      }
    }
  }

  .chevron {
    position: absolute;
    width: 20px;
    height: 6px;
    opacity: 0;
    transform: scale3d(0.5, 0.5, 0.5);
    animation: move 3s ease-out infinite;
  }

  .chevron:first-child {
    animation: move 3s ease-out 1s infinite;
  }

  .chevron:nth-child(2) {
    animation: move 3s ease-out 2s infinite;
  }

  .chevron::before,
  .chevron::after {
    content: ' ';
    position: absolute;
    top: 0;
    height: 100%;
    width: 51%;
    background: rgb(236, 196, 77);
  }

  .chevron::before {
    left: 0;
    transform: skew(0deg, 30deg);
  }

  .chevron::after {
    right: 0;
    width: 50%;
    transform: skew(0deg, -30deg);
  }

  @keyframes moveUp {
    25% {
      opacity: 1;
      transform: translateY(40px);
    }

    33% {
      opacity: 1;
      transform: translateY(30px);
    }

    67% {
      opacity: 1;
      transform: translateY(20px);
    }

    100% {
      opacity: 0;
      transform: translateY(10px) scale3d(0.5, 0.5, 0.5);
    }
  }

  @keyframes move {
    25% {
      opacity: 1;
    }

    33% {
      opacity: 1;
      transform: translateY(20px);
    }

    67% {
      opacity: 1;
      transform: translateY(30px);
    }

    100% {
      opacity: 0;
      transform: translateY(45px) scale3d(0.5, 0.5, 0.5);
    }
  }
</style>
