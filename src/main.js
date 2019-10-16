import Vue from 'vue'
import App from './App.vue'
// import store from './components/tidoitem/store'
import store from './store'
import router from './router'

import Notification from './components/notification'
import tabs from './components/tabs'

Vue.use(Notification)
Vue.use(tabs)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('#app')
store.dispatch('chatStore/getAllMessages') //这样写也行
// getAllMessages(store)

Vue.filter('time', (timestamp) => {
  return new Date(timestamp).toLocaleTimeString()
})
