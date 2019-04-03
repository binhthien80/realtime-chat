import Vue from 'vue'
import Vuex from 'vuex'
import Login from '@/store/modules/Login'
import Theme from '@/store/modules/Theme'
import * as getters from '@/store/getters'
import * as mutations from '@/store/mutations'
import * as actions from '@/store/actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    showListUser: false
  },
  getters,
  mutations,
  actions,
  modules: {
    Login,
    Theme
  }
})

export default store
