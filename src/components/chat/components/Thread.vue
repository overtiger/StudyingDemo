<template>
  <li class="thread-list-item" :class="{active: active}" @click="$emit('switch-thread', thread.id)">
    <h5 class="thread-name">{{thread.name}}</h5>
    <div class="thread-time">
      {{thread.latestMessage.timestamp | time}}
    </div>
    <div class="thread-last-message">
      {{thread.latestMessage.text}}
    </div>
    <div style="text-align: right"><a href="#" style="text-decoration : none;" @click.stop="$emit('remove',thread.id)">×</a></div>

  </li>
</template>

<script>
export default {
  name: 'Thread',
  props: {
    thread: Object,
    active: Boolean,
  },
}
</script>