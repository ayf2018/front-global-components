<template>
  <div class="drawer" >
        <p
          v-if="headerData.renderTitle"
          v-show="!isShow"
          class="current-title"
        >
          {{headerData.renderTitle}}
        </p>
        <div class="drawer-main"
            id="drawer"
            v-if="headerData.renderTitle"
            :style="{width:width+54+'px',right:right}"
            :class="{active:drawerStart}"
        >
            <div
                class="drawer-list"
                :style="{width:width+'px'}"
            >
              <router-link
                  v-for="(t,i) in headerData.renderTitleList"
                  :key="i"
                  :to="t.src"
              >
                  <p
                    v-show="drawerStart"
                    :key="i" class="other"
                    @click="returnCurrentItem(t)"
                  >
                    {{t.title}}
                  </p>
              </router-link>
            </div>
               <a
                class="drawer-btn fa"
                @click="changerDrawerStart"
                :class="{'fa-caret-left':drawerStart,'fa-caret-right':!drawerStart}"
               ></a>
            </div>
            <div
              v-if="!headerData.renderTitle"
              class="style2"
            >
            </div>
    </div>
</template>

<script>
import { EventBus } from 'common/event-bus.js'
export default {
  props: ['headerData', 'isShow'],
  data () {
    return {
      isOver: false,
      drawerStart: false
    }
  },
  computed: {
    width () {
      return this.drawerStart ? this.headerData.renderTitleList.length * 80 + 54 : 0
    },
    right () {
      return -this.width + 'px'
    }
  },
  mounted () {
    window.$(() => {
      window.$(document).click((event) => {
        if (event.target.parentNode.id === 'drawer') {
          event.stopPropagation()
          return false
        }
        if (this.drawerStart === true && event.target.id !== 'drawer') {
          this.drawerStart = false
          EventBus.$emit('position-reset')
        }
      })
    })
  },
  methods: {
    returnCurrentItem (t) {
      this.$emit('return-current-item', t)
    },
    changerDrawerStart () {
      this.drawerStart = !this.drawerStart
      if (this.drawerStart) {
        this.open()
      } else {
        this.close()
      }
    },
    open () {
      EventBus.$emit('position-xy', 300, 50)
    },
    close () {
      EventBus.$emit('position-reset')
    }
  }
}
</script>

<style lang="less" scoped>

@import "~@/styles/basics.less";

.drawer {
  width: auto;
  height: 50px;
  position: relative;

  .style2 {
    width: 100%;
    height: 100%;
  }

  .drawer-main {
    display: none;
    overflow: hidden;

    &.active {
      padding-left: 54px;
    }

    width: auto;
    height: 50px;
    position: absolute;
    top: 0;
    right: 0;
    transition: all 0.5s;

    .drawer-list {
      width: 80px;
      height: 100%;
      transition: width 0.5s;

      p {
        cursor: pointer;

        &:hover {
          background-color: @background-color;
          color: rgb(61, 190, 127);
        }
      }
    }

    .drawer-btn {
      width: 54px;
      height: 100%;
      color: #fff;
      font-size: 30px;
      line-height: 50px;
      text-align: center;
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  p {
    height: 50px;
    font-size: @font-size-max;
    line-height: 50px;
    font-weight: bold;
    text-align: center;
    font-family: "Microsoft YaHei";
    color: #fff;
    width: 80px;
    float: left;

    &.current-title {
      width: calc(~"100% - 119px");
      margin-left: 65px;
      // background-color: @background-color;
      color: rgb(61, 190, 127);
    }
  }
}
</style>
