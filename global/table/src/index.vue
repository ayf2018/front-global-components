<template>
  <div class="common-table my-table-main" ref="J_common_table">
    <Table
      class="table"
      :columns="columns"
      :data="data"
      :loading="loading"
      @on-selection-change="handleSelectChange"
    ></Table>
    <Page class="page"
          v-show="data.length > 0 && page.current>0"
          :total="page.total"
          :page-size="page.pageSize"
          show-total
          show-sizer
          :current.sync="page.current"
          @on-change="changePage"
          @on-page-size-change="changePageSize"
    ></Page>
  </div>
</template>

<script>
export default {
  name: 'commonTable',
  props: {
    columns: {
      type: Array,
      default () {
        return []
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    queryData: {
      type: Function,
      default () {}
    },
    data: {
      type: Array,
      default () {
        return []
      }
    },
    page: {
      type: Object,
      default () {
        return {
          pageSize: 10,
          total: 0,
          current: 1
        }
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    changePage (num) {
      this.queryData(num)
    },
    changePageSize (size) {
      this.page.pageSize = size
      this.page.current = 1
      this.queryData(this.page.current)
    },
    refresh () {
      this.$emit('refresh')
    },
    handleSelectChange (selection) {
      this.$emit('on-selectChange', selection)
    }
  }
}
</script>

<style>
  .my-table-main .ivu-table td,
  .my-table-main .ivu-table th {
    border: none !important;
  }

  .my-table-main .ivu-table::before,
  .my-table-main .ivu-table::after {
    background-color: transparent;
  }

  .my-table-main .ivu-table-body {
    height: calc(100% - 50px);
    overflow-y: auto;
  }
</style>

<style lang="less" scoped>
  .common-table {
    position: relative;
    height: 100%;

    .ivu-table-wrapper {
      border: none !important;
    }

    .table {
      height: 100%;
    }

    .page {
      position: absolute;
      bottom: -55px;
      left: 0;
      right: 0;
      text-align: center;
    }
  }
</style>
