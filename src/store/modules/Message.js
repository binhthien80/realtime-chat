import _ from 'lodash'

const state = {
  message: undefined,
  listTyping: []
}

const getters = {
  getMessage: state => {
    return state.message
  },
  getListTyping: state => {
    return state.listTyping
  }
}

const mutations = {
  setMessage: (state, ms) => {
    state.message = ms
  },
  setListTyping: (state, l) => {
    if (l.typing) {
      state.listTyping.push(l)
    } else {
      state.listTyping = _.remove(state.listTyping, function (n) {
        return n.username !== l.username
      })
    }
  }
}

const actions = {
  setMessage: ({ commit }, e) => {
    commit('setMessage', e)
  },
  setListTyping: ({ commit }, e) => {
    commit('setListTyping', e)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
