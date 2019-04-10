import LampNav from './src/newMain'

/* istanbul ignore next */
LampNav.install = function (Vue) {
  Vue.component(LampNav.name, LampNav)
}

export default LampNav
