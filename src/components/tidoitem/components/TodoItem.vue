<template>
  <li>
    <div>
      <input type="checkbox" :checked="todo.done" @change="toggleTodo(todo)">
      <label v-text="todo.text" @dblclick=" editing = true"></label>
      <button @click="removeTodo(todo)">删除</button>
    </div>
    <input v-show="editing" v-focus="editing" :value="todo.text" @keyup.enter="doneEdit" @keyup.esc="cancelEdit" @blur="doneEdit">
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Todo',
  props: ['todo'],
  data() {
    return {
      editing: false, //控制编辑框input的显示隐藏
    }
  },
  directives: {
    //自定义指令，实现当编辑框出现时，处于聚焦状态
    focus(el, { value }, { context }) {
      if (value) {
        context.$nextTick(() => {
          el.focus()
        })
      }
    },
  },
  methods: {
    ...mapActions(['editTodo', 'toggleTodo', 'removeTodo']), //在action中定义的方法
    doneEdit(e) {
      //完成编辑
      const value = e.target.value.trim()
      const { todo } = this //结构赋值，取this对象中的todo属性
      if (!value) {
        this.removeTodo(todo)
      } else if (this.editing) {
        this.editTodo({ todo, value })
        this.editing = false
      }
    },
    cancelEdit(e) {
      //取消编辑
      e.target.value = this.todo.text
      this.editing = false
    },
  },
}
</script>