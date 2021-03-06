// import Vue from 'vue'
// import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

// Vue.use(Vuex)

const state = {
  currentThreadID: null, //当前线程ID，用来获取当前线程
  threads: {
    /**
     * id:{
     *    id,
     *    name,
     *    message:[...ids]
     *    latestMessage
     * }
     */
  },
  messages: {
    /**
     * id:{
     *  id,
     *  threadId,
     *  threadName,
     *  authorName,
     *  text,
     *  timestamp,
     *  isRead
     * }
     */
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
