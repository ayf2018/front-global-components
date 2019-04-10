import inputSearch from './src/index'

/* istanbul ignore next */
inputSearch.install = function (Vue) {
  Vue.component(inputSearch.name, inputSearch)
}

export default inputSearch
