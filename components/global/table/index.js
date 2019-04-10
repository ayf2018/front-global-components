import commonTable from './src/index'

/* istanbul ignore next */
commonTable.install = function (Vue) {
  Vue.component(commonTable.name, commonTable)
}

export default commonTable
