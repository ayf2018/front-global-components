<template>
  <div class="foot-body" >
    <footer>
      <slot name="footer"></slot>
    </footer>
    <header>
      <slot name="header"></slot>
    </header>
    <div class="summary-body">
      <p v-for="(t,i) in summaryList" :key="t.key" class="item"  :class="{second:i%2==1}">
        <span class="title">{{t.key}}</span>
        <a v-if="t.func" class="sum clickable" @click="t.func">
          <span v-if="!checkNumber(t.value)">
              {{t.value}}{{t.unit?t.unit:''}}
          </span>
          <span v-else>
            {{toDecimal(t.value)}}{{t.unit?t.unit:''}}
          </span>
        </a>
        <span v-else class="sum" :class="{'min':isMin(t.value,t.unit?t.unit:'')}" >
            <span v-if="!checkNumber(t.value)">
                {{t.value}}{{t.unit?t.unit:''}}
            </span>
            <span v-else>
              {{toDecimal(t.value)}}{{t.unit?t.unit:''}}
            </span>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
function getBLen (str) {
  if (str == null) {
    return 0
  }
  if (typeof str !== 'string') {
    str += ''
  }
  return str.replace(/[^\x00-\xff]/g, 'ab').length
}
export default {
  name: 'summary-list',
  props: {
    summaryList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    isMin (val, unit) {
      let num = val
      if (this.checkNumber(val)) {
        num = this.toDecimal(val)
      }
      num = `${num}${unit}`
      if (getBLen(num) >= 5) {
        return true
      } else {
        return false
      }
    },
    checkNumber (theObj) {
      var reg = /^[0-9]+.?[0-9]*$/
      if (reg.test(theObj)) {
        return true
      }
      return false
    },
    toDecimal (x) {
      var f = parseFloat(x)
      if (isNaN(f)) {
        return
      }
      // if (Object.prototype.toString.call(datas.data[attr]) === '[object Number]') {
      //   datas.data[attr] = datas.data[attr].toFixed(1)
      // }
      // console.log(Object.prototype.toString.call(f), f % 1 === 0, f)
      if (f % 1 === 0) {
        return f
      } else {
        return f.toFixed(0)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/basics.less";

.foot-body {
  overflow-y: auto;
  height: 100%;

  .item {
    display: inline-block;
    width: calc(~"50% - 2px");
    height: 76px;
    background-color: rgba(0, 0, 0, 0.2);
    margin: 4px 4px 0 0;
    vertical-align: top;

    a,
span {
      display: block;
      text-align: center;

      &.title {
        font-size: 14px;
        color: rgba(253, 253, 253, 0.6);
        line-height: 42px;
      }

      &.sum {
        font-size: 16px;
        color: @color-nav-num;
        line-height: 0.678;

        &.min {
          font-size: 16px;
        }

        &.clickable {
          color: rgba(34, 191, 238, 0.788235294117647);
          cursor: pointer;
        }
      }

      &.sum-flip {
        height: 46px;
      }
    }
  }

  .second {
    margin-right: 0;
  }
}

/deep/.ivu-btn-primary {
  color: @color-btn;
  background-color: rgba(0, 0, 0, 0);
  border-color: @btn-border;
}

/deep/.ivu-btn-success {
  color: @color-btn;
  background-color: rgba(0, 0, 0, 0);
  border-color: @btn-border;
}
</style>
