import auth from '@/services/auth'

const state = {
  account: {
    username: '',
    avatar: '',
    status: '',
    id: ''
  }
}

const getters = {
  getUsername: state => {
    return state.account.username
  },
  getAvatar: state => {
    return state.account.avatar
  },
  checkLogin: state => {
    return !state.username && !state.avatar
  },
  getStatus: state => {
    return state.account.status
  },
  getId: state => {
    return state.account.id
  },
  getAccount: state => {
    return state.account
  }
}

const mutations = {
  setUsername: (state, username) => {
    state.account.username = username
  },
  setAvatar: (state, avatar) => {
    state.account.avatar = avatar
  },
  setStatus: (state, status) => {
    state.account.status = status
    let newInfoAccount = {...auth.getAccountLocalstore(), status}
    auth.setAccountLocalstore(newInfoAccount)
  },
  setId: (state, id) => {
    state.account.id = id
  },
  setAccount: (state, account) => {
    state.account = account
  }
}

const actions = {
  setUsername: ({ commit }, username) => {
    commit('setUsername', username)
  },
  setAvatar: ({ commit }, avatar) => {
    commit('setAvatar', avatar)
  },
  setStatus: ({ commit }, status) => {
    commit('setStatus', status)
  },
  setId: ({ commit }, id) => {
    commit('setId', id)
  },
  setAccount: ({ commit }, account) => {
    commit('setAccount', account)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
