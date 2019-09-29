<template>
  <div id="app">
    <!-- <notification content="test nofify" @close="handleClose()"></notification> -->
    <button @click="notify">点我notify</button>
    <tabs :value="tabValue" @change="handleChange">
      <tab lable="tab1" index="1">
        <span>content 1{{inputContent}}</span>
      </tab>
      <tab index="2">
        <span slot="label" style="color: red">tab2</span>
        <span>content 2</span>
      </tab>
      <tab lable="tab3" index="3">
        <span>content 3</span>
      </tab>
    </tabs>
  </div>
</template>

<script>
import createApp from './create-app'
export default {
  name: 'app',
  // components: {
  //   Notification,  createApp.js中引入了，这里不用再注册
  // },
  data() {
    return {
      tabValue: '1',
      inputContent: '',
    }
  },
  methods: {
    notify() {
      this.$notify({
        content: 'test $notify',
        btn: 'close',
      })
    },
    handleChange(value) {
      this.tabValue = value
    },
  },
  // mounted() {
  //   setTimeout(() => {
  //     this.tabValue = '2'
  //   }, 1000)
  // },
}
</script>

<style>
</style>
