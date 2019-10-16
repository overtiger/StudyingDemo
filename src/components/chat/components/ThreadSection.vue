<template>
  <div class="thread-section">
    <div class="thread-count">
      <span style="line-height:2.5">
        Unread threads:{{unreadCount}}
      </span>
      <ul class="thread-list">
        <thread v-for="thread in threads" :key="thread.id" :thread="thread" :active="thread.id === currentThread.id" @remove="removeThread"
          @switch-thread="switchThread">
        </thread>
      </ul>
    </div>
  </div>
</template>

<script>
import Thread from './Thread.vue'
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'ThreadSection',
  components: { Thread },
  computed: mapGetters({ threads: 'chatStore/threads', unreadCount: 'chatStore/unreadCount', currentThread: 'chatStore/currentThread' }),
  methods: mapActions({ switchThread: 'chatStore/switchThread', removeThread: 'chatStore/removeThread' }),
}
</script>