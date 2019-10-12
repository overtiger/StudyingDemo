const data = require('./mock-data')
const LATENCY = 16

//获取全部消息
export function getAllMessage(cb) {
  setTimeout(() => {
    cb(data)
  }, LATENCY)
}
//创建消息
export function createMessage({ text, thread }, cb) {
  const timestamp = Date.now()
  const id = 'm_' + timestamp
  const message = {
    id,
    text,
    timestamp,
    threadID: thread.id,
    threadName: thread.name,
    authorName: 'Evan',
  }

  setTimeout(function() {
    cb(message)
  }, LATENCY)
}
