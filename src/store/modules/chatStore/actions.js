import * as api from '../../../components/chat/api'

export const getAllMessages = ({ commit }) => {
  api.getAllMessage((message) => {
    commit('receiveAll', message)
  })
}

export const sendMessage = ({ commit }, payload) => {
  api.createMessage(payload, (message) => {
    commit('receiveMessage', message)
  })
}

export const switchThread = ({ commit }, payload) => {
  commit('switchThread', payload)
}

export const addThread = ({ commit }, { id, name }) => {
  commit('addThread', { id, name })
}

export const removeThread = ({ commit }, id) => {
  commit('removeThread', id)
}

export default {
  getAllMessages,
  sendMessage,
  switchThread,
  addThread,
  removeThread,
}
