<style src="../css/chat.css">
</style>

<template>
  <div class="chatapp">
    <div>
      <input class="thread-create" v-model="threadName" placeholder="请输入要创建的聊天室名称">
      <button @click="addThread">创建</button>
    </div>
    <ThreadSection></ThreadSection>
    <message-section></message-section>
  </div>
</template>
<script>
import MessageSection from './MessageSection.vue'
import ThreadSection from './ThreadSection.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      threadName: '',
    }
  },
  components: {
    ThreadSection,
    MessageSection,
  },
  computed: mapGetters({ threads: 'threads' }),
  methods: mapActions({
    addThread(dispatch) {
      const id = 'm_' + Object.keys(this.threads).length
      const name = this.threadName
      dispatch('addThread', { id, name })
      this.threadName = ''
    },
  }),
}
</script>