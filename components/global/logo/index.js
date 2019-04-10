import Logo from './src/index'

/* istanbul ignore next */
Logo.install = function (Vue) {
  Vue.component(Logo.name, Logo)
}

export default Logo
