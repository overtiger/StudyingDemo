export const threads = (state) => state.threads

//根据currentThreadID获取当前线程
export const currentThread = (state) => {
  return state.currentThreadID ? state.threads[state.currentThreadID] : {}
}

//获取当前线程内的所有信息
export const currentMessages = (state) => {
  debugger
  const thread = currentThread(state)
  return thread && thread.messages ? thread.messages.map((id) => state.messages[id]) : []
}

//统计未读信息数量
export const unreadCount = ({ threads }) => {
  //Object.keys返回对象可枚举属性的数组。
  //数组的reduce方法，是遍历数组，并且将返回语句的值作为count进行运算，id为数组中元素
  if (Object.keys(threads).length == 0) return 0

  return Object.keys(threads).reduce((count, id) => {
    return threads[id].latestMessage != null && threads[id].latestMessage.isRead ? count : count + 1
  }, 0)
}

//返回按时间排序的信息数组，不影响原来数组
export const sortedMessages = (state, getters) => {
  const messages = getters.currentMessages
  return messages.slice().sort((a, b) => a.timestamp - b.timestamp)
  //↑↑↑  这一句里面两个知识点，都是对数组的操作。slice()是分割，返回一个新的数组，
  //不影响原来的数组，这里没有参数，可以理解为复制。
  //sort()排序，第一个参数a的时间戳-第二个参数b的时间戳，如果返回值大于 0，则位置互换。如果返回值小于 0，则位置不变。
}

export default {
  threads,
  currentThread,
  currentMessages,
  unreadCount,
  sortedMessages,
}
