import summaryList from './src/index'

/* istanbul ignore next */
summaryList.install = function (Vue) {
  Vue.component(summaryList.name, summaryList)
}

export default summaryList
