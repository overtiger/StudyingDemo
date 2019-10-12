import Vue from 'vue'
import App from './App.vue'
// import store from './components/tidoitem/store'
import store from './components/chat/store'
import { getAllMessages } from './components/chat/store/actions'
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  store,
}).$mount('#app')

// store.dispatch('getAllMessages')  这样写也行
getAllMessages(store)

Vue.filter('time', (timestamp) => {
  return new Date(timestamp).toLocaleTimeString()
})
