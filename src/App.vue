<template>
  <div id="app">
    <!-- <notification content="test nofify" @close="handleClose()"></notification> -->
    <button @click="notify">点我notify</button>
  </div>
</template>

<script>
import createApp from './create-app'
export default {
  name: 'app',
  components: {
    Notification,
  },
  methods: {
    notify() {
      this.$notify({
        content: 'test $notify',
        btn: 'close',
      })
    },
  },
}
</script>

<style>
</style>
