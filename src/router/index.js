import Chat from '@/components/chat/Chat.vue'
import Notification from '@/components/notification/notification_view.vue'
import Tabs from '@/components/tabs/Tabs_view.vue'
import TodoItem from '@/components/tidoitem/Todo.vue'
import shoppingCart from '@/components/shoppingCart/components/App.vue'
import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

const routes = [
  {
    path: '/chat',
    name: 'chat',
    component: Chat,
  },
  {
    path: '/notification',
    name: 'notification',
    component: Notification,
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: Tabs,
  },
  {
    path: '/todoItem',
    name: 'todoItem',
    component: TodoItem,
  },
  {
    path: '/shoppingCart',
    name: 'shoppingCart',
    component: shoppingCart,
  },
]

export default new Router({
  routes,
})
