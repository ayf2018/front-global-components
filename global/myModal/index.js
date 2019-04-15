import myModal from './src/main'

/* istanbul ignore next */
myModal.install = function (Vue) {
  Vue.component(myModal.name, myModal)
}

export default myModal
