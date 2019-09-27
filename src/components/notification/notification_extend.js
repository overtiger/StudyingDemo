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
      verticalOffset: 0, //具窗口底部的高度
      height: 0, //组件本身的高度
      autoClose: 3000, //自动消失的时间
      visible: false,
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
      //只有动画播完才能获取到组件高度
      this.height = this.$el.offsetHeight
    },
    beforeDestory() {
      this.clearTimer()
    },
  },
}
