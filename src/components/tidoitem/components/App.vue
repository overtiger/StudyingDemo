<template>
  <section class="todoapp">

    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" autofocus autocomplete="off" placeholder="what needs to be done?" @keyup.enter="addTodo">
    </header>

    <section class="main" v-show="todos.length">
      <input class="toggle-all" id="toggle-all" type="checkbox" :checked="allChecked" @change="toggleAll(!allChecked)">
      <ul class="todo-list">
        <TodoItem v-for="(todo, index) in filteredTodos" :key="index" :todo="todo" />
      </ul>
    </section>

    <footer class="footer" v-show="todos.length">
      <span class="todo-count">
        <strong>{{remaining}}</strong>
        {{remaining | pluralize('item')}} left
      </span>
      <ul class="filters">
        <li v-for="(val, key) in filters">
          <a :href="'#/'+ key" :class="{selected: visibility === key}" @click="visibility = key">{{key | capitalize}}</a>
        </li>
      </ul>

      <button class="clear-completed" v-show="todos.length > remaining" @click="clearCompleted">Clear completed</button>
    </footer>

  </section>
</template>
<script>
import { mapActions } from 'vuex'
import TodoItem from './TodoItem.vue'

const filtersMy = {
  //三个按钮，每个按钮对应不同的过滤条件
  all: (todos) => todos,
  active: (todos) => todos.filter((todo) => !todo.done),
  completed: (todos) => todos.filter((todo) => todo.done),
}

export default {
  components: { TodoItem },
  data() {
    return {
      visibility: 'all', //取值为三个按钮"all", "active","conpleted"
      filtersMy,
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos
    },
    allChecked() {
      return this.todos.every((todo) => todo.done)
    },
    filteredTodos() {
      return filtersMy[this.visibility](this.todos)
    },
    remaining() {
      return this.todos.filter((todo) => !todo.done).length
    },
  },

  methods: {
    ...mapActions(['toggleAll', 'clearCompleted']),
    addTodo(e) {
      const text = e.target.value
      if (text.trim()) {
        this.$store.dispatch('addTodo', text)
      }
      e.target.value = ''
    },
  },
  filters: {
    //自定义过滤器
    pluralize: (n, w) => (n === 1 ? w : w + 's'), //n指的是被过滤的对象remaining，w是字符串item。处理字符串item，只有一条todo时，就是item，否则是items
    capitalize: (s) => s.charAt(0).toUpperCase() + s.slice(1), //处理字符串，首字母大写
  },
}
</script>