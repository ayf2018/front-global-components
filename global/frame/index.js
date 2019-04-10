import myIframe from './src/index'

/* istanbul ignore next */
myIframe.install = function (Vue) {
  Vue.component(myIframe.name, myIframe)
}

export default myIframe
