import * as api from '../api'

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
