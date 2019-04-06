const state = {
  listUsers: []
}

const getters = {
  getList: state => {
    return state.listUsers
  },
  getListUsers: state => {
    return state.listUsers.sort((x, y) => {
      let lca = x.status.toLowerCase().split('')[1]
      let lcb = y.status.toLowerCase().split('')[1]
      return lca < lcb ? 1 : lca > lcb ? -1 : 0
    })
  }
}

const mutations = {
  setListUsers: (state, l) => {
    state.listUsers = l
  }
}

const actions = {
  setListUsers: ({ commit }, l) => {
    commit('setListUsers', l)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
