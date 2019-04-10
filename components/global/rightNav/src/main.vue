<template>
  <div class="rightNav">

    <div class="rightBox">
      <ul>
        <li v-if="renderList.length>0" class="itemLi" v-for="(t,i) in renderList" :key="i" @click="onclick(t,i)" :class="{active:selectedIndex===i}">
          <img class="itemImg" :src="t.icon">
          <p class="itemName">{{t.name}}</p>

        </li>
        <li class="errLi" v-if="renderList.length===0">暂无数据！</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RightNav',
  data () {
    return {
      selectedIndex: ''
    }
  },
  methods: {
    onclick (t, i) {
      this.selectedIndex = i
      this.onClick(t, i)
    }
  },
  computed: {
    renderList () {
      return this.list.slice(0, 6)
    }
  },
  watch: {
    currentIndex (val, oldVal) {
      this.selectedIndex = val
    }
  },
  props: {
    // 列表的依赖数组
    currentIndex: {
      default: ''
    },
    list: {
      type: Array,
      default () {
        return [{
          name: '', // 显示的名称
          icon: ''// 附带的图标
        }]
      }
    },
    // 列表的点击事件，默认第一个返回参数是list的item，第二个返回参数是index
    onClick: {
      type: Function
    }
  },
  mounted () {
    this.selectedIndex = this.currentIndex
  }
}
</script>

<style lang="less">
  .external {
    .ivu-input-wrapper {
      width: 80%;
      vertical-align: top;
    }

    input {
      width: 100%;
      height: 36px;
      border-width: 0;
      background-color: transparent;
      font-size: 16px;
      font-family: "Microsoft YaHei";
      color: rgb(161, 160, 160);
      line-height: 36px;
      margin-left: 3%;
      vertical-align: top;
    }
  }
</style>

<style lang="less" scoped>
  .rightNav {
    position: fixed;
    z-index: 1000;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    padding-top: 100px;
    width: 272px;

    .rightBox {
      height: 60%;
      position: relative;

      ul {
        height: 100%;
        width: 100%;
      }

      .myPage {
        text-align: center;
        color: #fff;
        font-size: 15px;
      }

      .itemLi {
        padding-left: 60px;
        height: 40px;

        &.item2 {
          padding-left: 20px;

          .itemName {
            width: 150px;
          }

          &.active {
            padding-left: 45px;

            .itemName {
              width: 150px;
            }
          }
        }

        &:hover {
          cursor: pointer;
        }

        margin-bottom: 15px;

        .itemImg {
          width: 24px;
          height: 26px;
          margin-top: 6px;
          margin-right: 10px;
        }

        .itemName {
          display: inline-block;
          height: 40px;
          text-align: center;
          color: rgb(182, 183, 183);
          font-size: 16px;
          line-height: 40px;
          vertical-align: top;
        }

        .state-img {
          vertical-align: top;
          margin-top: 30px;
        }

        &.active {
          width: 295px;
          background: rgba(45, 140, 240, 0.8);
          left: 0;
          border-bottom-right-radius: 10px;
          border-top-right-radius: 10px;
          padding-left: 125px;

          .itemImg {
            line-height: 40px;
          }

          .itemName {
            width: 120px;
            overflow: hidden;
            display: inline-block;
            color: #fff;
          }
        }
      }

      .errLi {
        text-align: center;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
      }
    }

    .query {
      .external {
        width: 100%;
        height: 38px;
        max-width: 320px;
        border: 1px solid #fff;
        display: inline-block;
        border-radius: 6px;
        text-align: left;
        vertical-align: top;

        a {
          display: inline-block;
          height: 100%;
          width: 15%;
          background: url('~assets/video/icon-query.png') no-repeat center;
        }
      }
    }

    .message {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 10px;

      p {
        margin: auto;
        width: 200px;
        font-size: 16px;
        line-height: 40px;
        font-family: "Microsoft YaHei";
        color: rgb(182, 183, 183);
      }
    }
  }

  @media (max-width: 1366px) {
    .rightNav {
      width: 217px;

      .rightBox {
        .itemLi {
          padding-left: 25px;

          &.active {
            width: 235px;
            padding-left: 70px;
          }

          &.item2 {
            padding-left: 10px;

            .itemName {
              width: 120px;
            }

            &.active {
              padding-left: 25px;

              .itemName {
                width: 140px;
              }
            }
          }
        }
      }
    }
  }
</style>
