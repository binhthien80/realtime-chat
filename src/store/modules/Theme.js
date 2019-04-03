const state = {
  getTheme: {
    bgSearch: 'background: #ffffff',
    bgInputSearch: 'background: rgba(255, 255, 255, .7); color: rgba(0, 0, 0, .7); box-shadow: 0 0 8px 2px rgba(255, 255, 255, 0.4) inset; border: 2px solid #ff7c47;',
    bgIconsSearch: 'background: #fff; border-top: 2px solid #ff7c47; border-bottom: 2px solid #ff7c47; border-right: 2px solid #ff7c47; box-sizing: border-box',
    bgListUser: 'background: rgba(250, 250, 250, 1)',
    colorBlackLight: 'color: rgba(0, 0, 0, .65)',
    bgOffline: 'background: rgba(0, 0, 0, .4)',
    borderAvtUser: 'border: 2px solid rgba(0, 0, 0, .7)',
    bgTitleChatBot: 'background: #fff',
    colorWTitleChatBot: 'color: rgba(0, 0, 0, .8)',
    colorWLTitleChatBot: 'color: rgba(0, 0, 0, 1)',
    bgContentChatBox: 'border-top: 5px solid rgba(250, 250, 250, 1); border-bottom: 5px solid rgba(250, 250, 250, 1); background: #fff',
    bgThirdChatBox: 'background: #fff',
    bgInput: 'background: #fff; color: rgba(0, 0, 0, .8)',
    borderStar: 'color: #000',
    colorMS: 'background: #007369;',
    colorMSRep: 'background: #02C8F2;'
  }
}

const getters = {
  getTheme: state => {
    return state.getTheme
  }
}

const mutations = {
  setLigthTheme: state => {
    state.getTheme = {
      ...state.getTheme,
      bgSearch: 'background: #ffffff',
      bgInputSearch: 'background: rgba(255, 255, 255, .7); color: rgba(0, 0, 0, .7); box-shadow: 0 0 8px 2px rgba(255, 255, 255, 0.4) inset; border: 2px solid #ff7c47;',
      bgIconsSearch: 'background: #fff; border-top: 2px solid #ff7c47; border-bottom: 2px solid #ff7c47; border-right: 2px solid #ff7c47; box-sizing: border-box',
      bgListUser: 'background: rgb(250, 250, 250)',
      colorBlackLight: 'color: rgba(0, 0, 0, .5)',
      bgOffline: 'background: rgba(0, 0, 0, .4)',
      borderAvtUser: 'border: 2px solid #000',
      bgTitleChatBot: 'background: #fff',
      colorWTitleChatBot: 'color: rgba(0, 0, 0, .8)',
      colorWLTitleChatBot: 'color: rgba(0, 0, 0, 1)',
      bgContentChatBox: 'border-top: 5px solid rgba(250, 250, 250, 1); border-bottom: 5px solid rgba(250, 250, 250, 1); background: #fff',
      bgThirdChatBox: 'background: #fff',
      bgInput: 'background: #fff, color: rgba(0, 0, 0, .8)',
      borderStar: 'color: #000',
      colorMS: 'background: #007369;',
      colorMSRep: 'background: #02C8F2;'
    }
  },
  setDarkTheme: state => {
    state.getTheme = {
      ...state.getTheme,
      bgSearch: 'background: rgb(24, 25, 33)',
      bgInputSearch: 'background: rgba(0, 0, 0, .7); color: rgba(255, 255, 255, .7); box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.4) inset; border: 2px solid #86BB71;',
      bgIconsSearch: 'background: #86BB71',
      bgListUser: 'background: rgb(26, 27, 35)',
      colorBlackLight: 'color: rgba(255, 255, 255, .8)',
      bgOffline: 'background: rgba(255, 255, 255, .3)',
      borderAvtUser: 'border: 2px solid #fff',
      bgTitleChatBot: 'background: rgb(24, 25, 33)',
      colorWTitleChatBot: 'color: rgba(255, 255, 255, .8)',
      colorWLTitleChatBot: 'color: rgba(255, 255, 255, 1)',
      bgContentChatBox: 'border-top: 5px solid rgb(26, 27, 35); border-bottom: 5px solid rgb(26, 27, 35); background: rgb(24, 25, 33)',
      bgThirdChatBox: 'background: rgb(24, 25, 33)',
      bgInput: 'background: rgba(255, 255, 255, .1); color: rgba(255, 255, 255, .8)',
      borderStar: 'color: #fff',
      colorMS: 'background-image: linear-gradient(to right top, #003840, #005A5B, #007369, #008C72, #02A676);',
      colorMSRep: 'background-image: linear-gradient(to right top, #0169BE, #0576C2, #039BD8, #02C8F2, #05F3F3);'
    }
  }
}

const actions = {
  setLigthTheme: ({ commit }) => {
    commit('setLigthTheme')
  },
  setDarkTheme: ({ commit }) => {
    commit('setDarkTheme')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
