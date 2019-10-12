import Vue from 'vue'

export default {
  //接收全部信息，遍历信息数组
  receiveAll(state, messages) {
    let latestMessage
    messages.forEach((message) => {
      if (!state.threads[message.threadID]) {
        //如果没有这个线程id就创建这个线程
        createThread(state, message.threadID, message.threadName)
      }
      if (!latestMessage || message.timestamp > latestMessage.timestamp) {
        latestMessage = message
      }
      addMessage(state, message)
    })
    setCurrentThread(state, latestMessage.threadID)
  },

  //接收并添加信息
  receiveMessage(state, message) {
    addMessage(state, message)
  },

  //切换当前线程
  switchThread(state, id) {
    setCurrentThread(state, id)
  },

  //添加线程
  addThread(state, { id, name }) {
    createThread(state, id, name)
    const messageId = 'ms_' + Object.keys(state.messages).length
    const messageNew = {
      isRead: false,
      timestamp: Date.now(),
      id: messageId,
      threadID: id,
      threadName: name,
      authorName: 'admin',
      text: 'Hello!',
    }
    state.threads[id].messages.push(messageId)
    state.threads[id].latestMessage = messageNew
    Vue.set(state.messages, messageId, messageNew)
  },
  //删除线程
  removeThread(state, id) {
    if (state.currentThreadID === id) state.currentThreadID = null
    // delete state.threads[id]   非响应式
    Vue.delete(state.threads, id)
    Object.keys(state.messages).forEach((item) => {
      if (state.messages[item].threadID === id) {
        Vue.delete(state.messages, item)
      }
    })
  },
}

//创建线程Vue.set是响应式的给threads对象添加属性
function createThread(state, id, name) {
  Vue.set(state.threads, id, {
    id,
    name,
    messages: [],
    latestMessage: null,
  })
}

//添加信息
function addMessage(state, message) {
  message.isRead = message.threadID === state.currentThreadID
  const thread = state.threads[message.threadID]
  //如果线程的信息数组中没有id = 当前信息id的，就把当前信息添加进去，并更新最后一条消息
  if (!thread.messages.some((id) => id === message.id)) {
    thread.messages.push(message.id)
    thread.latestMessage = message
  }
  //Vue.set是响应式的给threads对象添加属性
  Vue.set(state.messages, message.id, message)
}

//根据id确认当前线程
function setCurrentThread(state, id) {
  state.currentThreadID = id
  if (!state.threads[id]) {
    debugger
  }
  //当前线程的最后一条消息要设置为已读
  state.threads[id].latestMessage.isRead = true
}
