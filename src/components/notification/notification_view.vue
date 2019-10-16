<template>
  <div>
    <button @click="notify">点我notify</button>
  </div>
</template>
<script>
import notification from './notification.vue'
export default {
  components: {
    notification,
  },
  methods: {
    notify() {
      this.$notify({
        //因为在vue原型上面注册了，所以可以这样调用
        content: 'test $notify',
        btn: 'close',
      })
    },
  },
}
</script>