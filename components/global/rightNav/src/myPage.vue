<template>
    <div class="page-main">
        <a :class="{'prohibit':current===1}"
            class="previous fa fa-angle-left"
            @click="previous"
        ></a>
        <a :class="{'prohibit':current===totalPage}"
            class="next fa fa-angle-right"
            @click="next"
        ></a>
    </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 0
    }
  },
  computed: {
    totalPage () {
      return Math.ceil(this.total / this.size)
    }
  },
  methods: {
    previous () {
      if (this.current === 1) {
      } else {
        this.$emit('on-previous')
      }
    },
    next () {
      if (this.current === this.totalPage) {
      } else {
        this.$emit('on-next')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.page-main {
  height: 50px;
  line-height: 50px;

  a {
    font-size: 30px;
    color: #fff;
    display: inline-block;
    padding: 0 10px;

    &.previous {
      float: left;
      margin-left: 10px;
    }

    &.next {
      float: right;
      margin-right: 10px;
    }

    &.prohibit {
      color: rgba(255, 255, 255, 0.5);
      cursor: auto;
    }
  }
}
</style>
