/**
 * 调用了扩展的Notification的组件func-notification
 */
import Vue from 'vue'
import Component from './func-notification'

const notificationConstructor = Vue.extend(Component) //创建一个组件

const instances = [] //保存创建的组件
let seed = 1

const notify = (options) => {
  if (Vue.prototype.$isServer) return //如果是服务端渲染就直接返回，否则拿不到dom元素

  const { autoClose, ...rest } = options

  const instance = new notificationConstructor({
    propsData: { ...rest },
    data: {
      autoClose: autoClose === undefined ? 3000 : autoClose,
    },
  })

  const id = `notification_${seed++}` //模板字符串，使用${}引用变量
  instance.id = id
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)

  //计算高度
  let verticalOffset = 0
  instances.forEach((element) => {
    // eslint-disable-next-line no-debugger
    debugger
    verticalOffset += element.$el.offsetHeight + 16
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset
  instances.push(instance)

  instance.vm.$on('closed', () => {
    removeInsatance(instance)
    document.body.removeChild(instance.vm.$el)
    instance.vm.visible = false
  })

  instance.vm.$on('close', () => {
    removeInsatance(instance)
    document.body.removeChild(instance.vm.$el)
    instance.vm.visible = false
  })

  const removeInsatance = (instance) => {
    if (!instance) return
    const len = instances.length
    const index = instances.findIndex((inst) => instance.id === inst.id)

    instances.splice(index, 1)

    if (len <= 1) return
    const removeHeight = instance.vm.height
    for (let i = index; i < len - 1; i++) {
      instances[i].verticalOffset = parseInt(instances[i].verticalOffset) - removeHeight - 16
    }
  }
  return instance.vm
}

export default notify
