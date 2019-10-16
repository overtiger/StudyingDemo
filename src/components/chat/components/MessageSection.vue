<template>
  <div class="message-section">
    <h3 class="message-thread-heading">{{thread.name}}</h3>
    <ul class="message-list" ref="list">
      <message v-for="message in messages" :key="message.id" :message="message">
      </message>
    </ul>
    <textarea class="message-composer" v-model="text" @keyup.enter="sendMessage"></textarea>
  </div>
</template>
<script>
import message from './Message.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'MessageSection',
  components: {
    message,
  },
  computed: { message },
  data() {
    return {
      text: '',
    }
  },
  computed: mapGetters({ thread: 'chatStore/currentThread', messages: 'chatStore/sortedMessages' }),
  watch: {
    'thread.latestMessage': function() {
      this.$nextTick(() => {
        const ul = this.$refs.list
        ul.scrollTop = ul.scrollHeight
      })
    },
  },
  methods: mapActions({
    sendMessage(dispatch) {
      const { text, thread } = this
      if (text.trim()) {
        dispatch('chatStore/sendMessage', {
          text,
          thread,
        })
        this.text = ''
      }
    },
  }),
}
</script>