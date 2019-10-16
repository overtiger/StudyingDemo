import actions from './actions'
import mutations from './mutations'

export default {
  namespaced: true,
  state: {
    // todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]'),
    //↑↑  这是官方的写法，要使用localStorage来存取，但是案例中只有get却没有set。
    //因此这里永远获取不到。我们直接定义为空数组就可以了
    todos: [],
  },
  actions,
  mutations,
}
