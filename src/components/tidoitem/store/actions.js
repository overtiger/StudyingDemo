export default {
  addTodo({ commit }, text) {
    //{commit}是解构赋值，直接从context对象中拿到的方法，否则就要写成context.commit
    commit('addTodo', {
      text,
      done: false, //默认新增的状态为false
    })
  },

  removeTodo({ commit }, todo) {
    commit('removeTodo', todo)
  },

  editTodo({ commit }, { todo, value }) {
    commit('editTodo', { todo, text: value })
  },

  toggleTodo({ commit }, todo) {
    //改变状态的方法，选中/未选中，实际调用的还是编辑
    commit('editTodo', { todo, done: !todo.done })
  },

  toggleAll({ state, commit }, done) {
    //全选的方法，实际是遍历所有todo并调用编辑
    state.todos.forEach((todo) => commit('editTodo', { todo, done }))
  },

  clearCompleted({ state, commit }) {
    //删除完成状态的todo，实际上是先过滤后删除
    state.todos.filter((todo) => todo.done).forEach((todo) => commit('removeTodo', todo))
  },
}
