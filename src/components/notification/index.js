import Notification from './notification.vue'
import notify from './notification_use'

export default (Vue) => {
  Vue.component(Notification.name, Notification)
  Vue.prototype.$notify = notify //注册到vue原型对象上面，可以通过this.$notify调用
}
