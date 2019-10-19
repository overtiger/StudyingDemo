import actions from './actions'
import mutations from './mutations'
import { STORAGE_KEY } from './mutations'
export default {
  namespaced: true,
  state: {
    todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]'),
    //↑↑  这是官方的写法，要使用localStorage来存取，
    // todos: [],
  },
  actions,
  mutations,
}
