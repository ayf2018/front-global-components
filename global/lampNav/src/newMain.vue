<template>
  <div class="left-nav-main">
    <input-search v-on:on-search="searchLampPole" :currentTypeCode='currentTypeCode'
      @drawerShow="drawerShow"></input-search>
    <header-drawer :headerData="headerData"
      :isShow='isShow'
      v-on:return-current-item="returnCurrentItem"></header-drawer>
    <icon-types :types="eventTypes"
      :currentTypeCode='currentTypeCode'></icon-types>
    <div class="leftNav">
      <div class="leftBox">
        <ul :class="{'showPage':total>page.size}"
          :style="{'height':navHeight+'px'}"
          class="content-list">
          <li v-if="renderList.length>0 && !isLoading"
            class="itemLi"
            v-for="(t,i) in renderList"
            :key="i"
            @click="onClick(t,i)"
            :class="{active:currentIndex===i,item2:currentType==='style2'}">
            <img class="itemImg"
              :src="t.icon">
            <p class="itemName">{{t.name}}</p>
            <img v-if="t.state"
              class="state-img"
              :src="currentIndex===i?t.stateActiveicon:t.stateicon">
          </li>
          <li class="errLi"
            v-if="renderList.length===0 && !isLoading">
            暂无数据！
          </li>
          <li class="loadings-spin-container"
            v-if="isLoading">
            <Spin fix
              class="mySpin">
            </Spin>
          </li>
        </ul>
        <my-page v-show="total>page.size"
          :current="page.current"
          :total="total"
          :size="page.size"
          @on-previous="handleprevious"
          @on-next="handleNext"></my-page>
      </div>
      <div v-if="currentType==='style2'"
        class="query">
        <div class="external">
          <Input v-model="queryVal"
            placeholder="输入船只名称" />
          <a @click="query"></a>
        </div>
      </div>
      <div v-if="currentType==='style2'"
        class="message">
        <p>在用轮船数量：{{shipData.work}}</p>
        <p>空闲轮船数量：{{shipData.free}}</p>
        <p>维保轮船数量：{{shipData.repair}}</p>
      </div>
    </div>
  </div>

</template>
<script>
import headerDrawer from './headerDrawer'
import iconTypes from './iconTypes'

import myPage from './myPage.vue'
export default {
  components: { headerDrawer, iconTypes, myPage },
  props: {
    bottomHeight: {
      type: Number,
      default: 0
    },
    list: {
      type: Array,
      default: ['测试']
    },
    initIndex: {
      default: -2
    },
    currentType: {
      type: String,
      default: 'style1'
    },
    shipData: {
      type: Object,
      default () {
        return {
          repair: '0',
          work: '0',
          free: '0'
        }
      }
    },
    headerData: {
      type: Object,
      default () {
        return {
          renderTitleList: [],
          renderTitle: ''
        }
      }
    },
    eventTypes: {
      type: Array,
      default: []
    },
    currentTypeCode: {
      type: String,
      default: 'light_pole_lamp_holder'
    }
  },
  name: 'LampNav',

  data () {
    return {
      isShow: false,
      queryVal: '',
      isFrist: true,
      internalIndex: -1,
      page: {
        current: 1,
        size: 100
      },
      isLoading: true
    }
  },
  mounted () {
    this.initPage()
  },
  methods: {
    drawerShow (t) {
      this.isShow = t
    },
    returnCurrentItem (t) {
      this.$emit('return-current-item', t)
    },
    searchLampPole (t) {
      this.$emit('on-search', t)
    },
    query () {},
    onClick (t, i) {
      this.list.forEach((item, index) => {
        let attr = t.id ? 'id' : 'groupId'
        if (t[attr] === item[attr]) {
          this.internalIndex = i
          this.$emit('setIndex', t, index)
        }
      })
    },
    initPage () {
      if (this.navHeight / 45 > this.list.length) {
        // 一页放不下
        this.page.size = Math.floor((this.navHeight - 50) / 45)
      } else {
        // 一页放得下
        this.page.size = Math.floor(this.navHeight / 45)
      }
    },
    handleprevious () {
      this.page.current--
    },
    handleNext () {
      this.page.current++
    }
  },
  watch: {
    currentIndex (val, oldVal) {
      if (oldVal !== '') {
        this.isFrist = false
      }
    },
    initIndex: function () {
      this.initIndex = this.initIndex
    },
    $route (route) {
      this.internalIndex = -1
    },
    list: function (val, oldVal) {
      this.isLoading = false
    }
  },
  computed: {
    statistics () {
      let data = {
        repair: 0,
        work: 0,
        free: 0
      }
      for (let attr in this.shipData) {
        if (this.shipData[attr] !== 0) {
          data[attr] = this.shipData[attr]
        }
      }
      return data
    },
    currentIndex () {
      return this.initIndex === -2 ? this.internalIndex : this.initIndex
    },
    navHeight () {
      return window.innerHeight - this.bottomHeight - 50
    },
    total () {
      return this.list.length
    },
    renderList () {
      let limit = document.body.clientWidth > 1366 ? 8 : 8
      let temp = this.list.slice(
        (this.page.current - 1) * this.page.size,
        this.page.current * this.page.size
      )
      return temp.map(({ name, ...t }) => {
        return {
          ...t,
          name: name.length > limit ? name.substr(0, limit - 1) + '...' : name
        }
      })
    }
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
    outline: none;
  }

  &:focus {
    outline: none;
  }
}
</style>
<style lang="less" scoped>
.loadings-spin-container {
  display: inline-block;
  width: 100%;
  height: 100%;
  position: relative;

  /deep/ .mySpin {
    background-color: transparent;
  }
}
</style>

<style lang="less" scoped>
@import "~@/styles/basics.less";
@show-time: 0.5s;
@move-time: 1s;
@show-font-time: 0.8s;
@move-font-time: 0.8s;

.left-nav-main {
  width: 272px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  background-color: @background-color;

  .leftNav {
    height: calc(~"100% - 50px");
    margin-left: 67px;

    .leftBox {
      height: 70%;
      position: relative;

      .active-bar {
        position: absolute;
        padding-left: 50px;
        width: 222px;
        height: 40px;
        background: transparent;
        left: 0;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
        padding-left: 125px;
        transition: top @move-time;

        &.active {
          width: 290px;
          background: rgba(0, 194, 120, 0.8);
          transition: all @show-time;
        }
      }

      ul {
        height: 100%;
        float: right;
        width: 100%;

        &.showPage {
          height: calc(~"100% - 50px");
        }
      }

      .myPage {
        text-align: center;
        color: #fff;
        font-size: @font-size-max;
      }

      .itemLi {
        width: 100%;
        padding-left: 50px;
        height: 60px;
        transition: all @show-time;

        &.item2 {
          padding-left: 20px;
        }

        &.active {
          width: 230px;
          background: rgba(0, 194, 120, 0.8);
          border-bottom-right-radius: 10px;
          border-top-right-radius: 10px;
          padding-left: 85px;

          &.item2 {
            padding-left: 45px;

            .itemName {
              color: #fff;
            }
          }

          .itemName {
            color: #fff;
          }
        }

        &:hover {
          cursor: pointer;
        }

        margin-bottom: 5px;

        .itemImg {
          margin-right: 12px;
          margin-top: 16px;
        }

        .itemName {
          display: inline-block;
          height: 60px;
          text-align: center;
          color: rgb(182, 183, 183);
          font-size: @font-size-max;
          line-height: 60px;
          vertical-align: top;
        }

        .state-img {
          width: 24px;
          height: 22px;
          transform: scale(0.8);
        }
      }

      .errLi {
        text-align: center;
        color: #fff;
        font-size: @font-size-medium;
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
          background: url("~assets/video/icon-query.png") no-repeat center;
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
        width: 100%;
        font-size: @font-size-max;
        line-height: 40px;
        font-family: "Microsoft YaHei";
        color: rgb(182, 183, 183);
        text-align: center;
      }
    }
  }
}

@media (max-width: 1366px) {
  .left-nav-main {
    width: 217px;

    .leftNav {
      width: 217px;

      .leftBox {
        .active-bar {
          width: 235px;
        }

        .itemLi {
          padding-left: 25px;
          width: 100%;

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
}
</style>
