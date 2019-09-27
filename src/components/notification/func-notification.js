/* eslint-disable no-console */
/**
 * 通过方法调用的，专用的组件,扩展了Notification组件
 */
import Notification from './notification.vue'

export default {
  extends: Notification,
  computed: {
    style() {
      return {
        position: 'fixed',
        right: '20px',
        bottom: `${this.verticalOffset}px`,
      }
    },
  },
  data() {
    return {
      verticalOffset: 0,
      height: 0,
      autoClose: 3000,
    }
  },

  mounted() {
    this.createTimer()
  },
  methods: {
    createTimer() {
      if (this.autoClose) {
        this.timer = setTimeout(() => {
          this.visible = false
        }, this.autoClose)
      }
    },
    clearTimer() {
      if (this.autoClose) {
        clearTimeout(this.timer)
      }
    },
    afterEnter() {
      console.log('-------------afterEnter ' + this.$el.offsetHeight)
      this.height = this.$el.offsetHeight
    },
    beforeDestory() {
      this.clearTimer()
    },
  },
}
