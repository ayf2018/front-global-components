<template>
    <div id="my-modal" class="my-modal" v-if="visible" :style="{width:width+'px',marginLeft:'-'+width/2+'px'}">
        <div class="head">
            <h3>{{title}}</h3>
            <Icon class="close-btn" type="ios-close-circle-outline" />
            <!-- <Icon class="close-btn" type="ios-close" /> -->
            <a @click="onClick" class="close-btn">
                ×
            </a>
        </div>
        <div class="body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'myModal',
  props: {
    title: {
      type: [String],
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 536
    }
  },
  data () {
    return {
      visible: this.value
    }
  },
  watch: {
    value (val) {
      this.visible = val
    }
  },
  methods: {
    onClick () {
      this.$emit('on-click')
      this.visible = false
    //   this.value = false
    }
  }
}
</script>

<style lang="less" scoped>
  .my-modal {
    position: fixed;
    width: 536px;
    // height: 290px;
    min-height: 290px;
    z-index: 129;
    top: 30%;
    left: 50%;
    margin-left: -268px;
    margin-top: -145px;

    .head {
      height: 32px;

      h3 {
        font-size: 16px;
        color: rgb(254, 254, 254);
        line-height: 32px;
        display: inline-block;
      }

      .close-btn {
        float: right;
        display: inline-block;
        font-size: 30px;
        line-height: 32px;
        color: #fff;

        /deep/ .ivu-icon {
          font-size: 16px;
        }
      }
    }

    .body {
      height: calc(~'100% - 32px');
      border: 1px solid rgb(235, 186, 76);
      background-color: rgba(0, 0, 0, 0.8);
    }
  }
</style>
