<template>
  <div class="input-search" :style="{width:width+'px'}">
    <p class="searchBody">
      <img :src="searchImg" alt="" @click="changerDrawerStart" v-show="!drawerStart">
      <Input v-model="lampPoleName" v-show="drawerStart"  class="searchInput"  @keyup.enter.native="searchLampPole"/>
      <img :src="searchImg" alt="" @click="searchLampPole" v-show="drawerStart" >
      <a class="drawer-btn fa" @click="changerDrawerStart" :class="{'fa-caret-left':drawerStart}"></a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'inputSearch',
  data () {
    return {
      lampPoleName: '',
      drawerStart: false,
      searchImg: this.$$icon['icon-input-search']
    }
  },
  watch: {
    drawerStart (t) {
      this.$emit('drawerShow', t)
    }
  },
  computed: {
    width () {
      let width = window.innerWidth > 1366 ? 272 : 217
      return this.drawerStart ? width : 50
    }
  },
  methods: {
    searchLampPole () {
      this.$emit('on-search', this.lampPoleName)
    },
    changerDrawerStart () {
      this.lampPoleName = ''
      this.drawerStart = !this.drawerStart
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/basics.less";

.input-search {
  transition: width 0.5s;
  height: 50px;
  position: absolute;
  padding-top: 9px;
  width: 100%;
  vertical-align: middle;
  z-index: 4;

  .searchBody {
    line-height: 32px;
    margin-left: 15px;
  }

  .drawer-btn {
    height: 100%;
    color: #fff;
    font-size: 30px;
    display: inline-block;
    line-height: 50px;
    position: absolute;
    right: 10px;
    top: 0;
  }

  .searchInput {
    width: calc(~"100% - 67px");
    display: inline-block;

    /deep/ .ivu-input {
      border-color: @border-color;
    }

    /deep/ .ivu-input:hover {
      border-color: @color-white;
    }
  }

  img {
    margin-left: 10px;
    vertical-align: middle;
    display: inline-block;
    &:hover{
      cursor: pointer;
    }
  }
}
</style>
