import Vue from 'vue'
import Vuex from 'vuex'
import Login from '@/store/modules/Login'
import Theme from '@/store/modules/Theme'
import ListUsers from '@/store/modules/ListUsers'
import Message from '@/store/modules/Message'

import * as getters from '@/store/getters'
import * as mutations from '@/store/mutations'
import * as actions from '@/store/actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    showListUser: false,
    showPopupNav: false,
    countUsers: 0,
    countUsersOnline: 0
  },
  getters,
  mutations,
  actions,
  modules: {
    Login,
    Theme,
    ListUsers,
    Message
  }
})

export default store
