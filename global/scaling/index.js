import scaling from './src/index'

/* istanbul ignore next */
scaling.install = function (Vue) {
  Vue.component(scaling.name, scaling)
}

export default scaling
