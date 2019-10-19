export const STORAGE_KEY = 'todo-vuejs'

export default {
  addTodo(state, todo) {
    state.todos.push(todo)
  },

  removeTodo(state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },

  editTodo(state, { todo, text = todo.text, done = todo.done }) {
    // eslint-disable-next-line no-debugger
    debugger
    //编辑todo分为编辑文本和编辑状态。
    //如果编辑时只传入todo，则使用todo的默认值，即不改变todo
    //如果编辑时传入todo和文本，则状态使用todo的默认值，只改变文本
    //如果编辑时传入todo和状态，则文本使用todo的默认值，只改变状态
    //如果编辑时传入todo，状态，文本，则都改变
    todo.text = text
    todo.done = done
  },
}
