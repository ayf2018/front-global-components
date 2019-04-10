import RightNav from './src/newMain'

/* istanbul ignore next */
RightNav.install = function (Vue) {
  Vue.component(RightNav.name, RightNav)
}

export default RightNav
