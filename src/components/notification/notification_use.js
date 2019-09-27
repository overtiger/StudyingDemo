/**
 * 调用并实例化 扩展的Notification的组件notification_extend
 */
import Vue from 'vue'
import Component from './notification_extend'

const notificationConstructor = Vue.extend(Component) //创建一个组件

const instances = [] //保存创建的组件
let seed = 1 //用来生成id

//每执行一次$notify就执行下面的代码，而上面的仅加载该文件的时候执行一次
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
  instance.vm.visible = true // ---->写在这里也可以，写在instance创建的时候也行
  //计算离窗口底部的高度，组件之间间隔为16
  let verticalOffset = 0
  instances.forEach((element) => {
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
