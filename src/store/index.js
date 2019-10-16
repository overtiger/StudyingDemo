import chatStore from './modules/chatStore'
import todoStore from './modules/todoStore'
import cart from './modules/shoppingStore/modules/cart'
import products from './modules/shoppingStore/modules/products'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    chatStore,
    todoStore,
    cart,
    products,
  },
})
