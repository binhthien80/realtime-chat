const state = {
  getTheme: {
    bgSearch: 'background: rgb(24, 25, 33)',
    bgInputSearch: 'background: rgba(0, 0, 0, .7); color: rgba(255, 255, 255, .7); box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.4) inset; border: 2px solid #86BB71;',
    bgIconsSearch: 'background: #86BB71',
    bgListUser: 'background: rgb(26, 27, 35)',
    colorBlackLight: 'color: rgba(255, 255, 255, .8)',
    bgOffline: 'background: rgba(255, 255, 255, .3)',
    borderAvtUser: 'border: 2px solid #fff',
    bgTitleChatBot: 'background: #fff',
    colorWTitleChatBot: 'color: rgba(0, 0, 0, .8)',
    colorWLTitleChatBot: 'color: rgba(0, 0, 0, 1)',
    bgContentChatBox: 'border-top: 5px solid rgba(250, 250, 250, 1); border-bottom: 5px solid rgba(250, 250, 250, 1);background-image: linear-gradient(to right top, #f5f5f5, #f6f6f6, #f7f6f6, #f8f7f7, #f9f7f7);',
    bgThirdChatBox: 'background: #fff',
    bgInput: 'background: #fff; color: rgba(0, 0, 0, .8)',
    borderStar: 'color: #000',
    bgWheel: 'background: #ff7c47',
    colorMS: 'background-image: linear-gradient(to right top, #eaebeb, #eff0f0, #f5f5f5, #fafafa, #ffffff); --my-color-ms: #fafafa;color:rgba(0, 0, 0, .8); box-shadow: 0px 3px 3px 0px #CBCBCB;',
    colorMSRep: 'background-image: linear-gradient(to right top, #cefaff, #d1f9ff, #d4f7ff, #d8f5ff, #dbf4ff); color:rgba(0, 0, 0, .8); --my-color-rep-ms: #d8f5ff; box-shadow: 0px 3px 3px 1px #CCE8EB;'
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
      bgContentChatBox: 'border-top: 5px solid rgba(250, 250, 250, 1); border-bottom: 5px solid rgba(250, 250, 250, 1);background-image: linear-gradient(to right top, #f5f5f5, #f6f6f6, #f7f6f6, #f8f7f7, #f9f7f7);',
      bgThirdChatBox: 'background: #fff',
      bgInput: 'background: #fff, color: rgba(0, 0, 0, .8)',
      borderStar: 'color: #000',
      bgWheel: 'background: #ff7c47',
      colorMS: 'background-image: linear-gradient(to right top, #eaebeb, #eff0f0, #f5f5f5, #fafafa, #ffffff); --my-color-ms: #fafafa;color:rgba(0, 0, 0, .8); box-shadow: 0px 3px 3px 0px #CBCBCB;',
      colorMSRep: 'background-image: linear-gradient(to right top, #cefaff, #d1f9ff, #d4f7ff, #d8f5ff, #dbf4ff); color:rgba(0, 0, 0, .8); --my-color-rep-ms: #d8f5ff; box-shadow: 0px 3px 3px 1px #CCE8EB;'
    }
    localStorage.setItem('__theme', JSON.stringify(state.getTheme))
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
      bgWheel: 'background: #86BB71',
      colorMS: 'background-image: linear-gradient(to right top, #003840, #005A5B, #007369, #008C72, #02A676); --my-color-ms: rgb(0, 120, 107); box-shadow: 0px 3px 3px 1px #66FFFF;',
      colorMSRep: 'background-image: linear-gradient(to right top, #0169BE, #0576C2, #039BD8, #02C8F2, #05F3F3); --my-color-rep-ms: #05e1f2;  box-shadow: 0px 3px 3px 1px #66FFFF;'
    }
    localStorage.setItem('__theme', JSON.stringify(state.getTheme))
  },
  setDarkLightTheme: state => {
    state.getTheme = {
      ...state.getTheme,
      bgSearch: 'background: #610202;',
      bgInputSearch: 'background: rgba(0, 0, 0, .7); color: rgba(255, 255, 255, .7); box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.4) inset; border: 2px solid #F0D32A;',
      bgIconsSearch: 'background: #F0D32A',
      bgListUser: 'background: #740B0B;',
      colorBlackLight: 'color: rgba(255, 255, 255, .9)',
      bgOffline: 'background: rgba(255, 255, 255, .55)',
      borderAvtUser: 'border: 2px solid #fff',
      bgTitleChatBot: 'background: #88071b;',
      colorWTitleChatBot: 'color: rgba(255, 255, 255, .8)',
      colorWLTitleChatBot: 'color: rgba(255, 255, 255, 1)',
      bgContentChatBox: 'border-top: 5px solid #88071b; border-bottom: 5px solid #fdb7c8; background-image: linear-gradient(to bottom, #88071b, #9a061c, #ad051c, #bf061a, #d20918, #e0252a, #ee373b, #fb474c, #ff6570, #ff8191, #ff9daf, #fdb7c8);',
      bgThirdChatBox: 'background: #fdb7c8;',
      bgInput: 'background: #ffffff, color: red',
      borderStar: 'color: #F0D32A',
      bgWheel: 'background: #F0D32A',
      colorMS: 'background-image: linear-gradient(to right top, #d50d25, #e02133, #eb2f42, #f53c50, #ff485e); --my-color-ms: #f53c50; box-shadow: 0px 3px 3px 0px #fff;',
      colorMSRep: 'background-image: linear-gradient(to right top, #ff001f, #ff4442, #ff6662, #ff8280, #ff9d9d); --my-color-rep-ms: #ff9d9d; box-shadow: 0px 3px 3px 1px #fff;'
    }
    localStorage.setItem('__theme', JSON.stringify(state.getTheme))
  },
  setLightDarkTheme: state => {
    state.getTheme = {
      ...state.getTheme,
      bgSearch: 'background: rgb(24, 25, 33)',
      bgInputSearch: 'background: rgba(0, 0, 0, .7); color: rgba(255, 255, 255, .7); box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.4) inset; border: 2px solid #86BB71;',
      bgIconsSearch: 'background: #86BB71',
      bgListUser: 'background: rgb(26, 27, 35)',
      colorBlackLight: 'color: rgba(255, 255, 255, .8)',
      bgOffline: 'background: rgba(255, 255, 255, .3)',
      borderAvtUser: 'border: 2px solid #fff',
      bgTitleChatBot: 'background: #fff',
      colorWTitleChatBot: 'color: rgba(0, 0, 0, .8)',
      colorWLTitleChatBot: 'color: rgba(0, 0, 0, 1)',
      bgContentChatBox: 'border-top: 5px solid rgba(250, 250, 250, 1); border-bottom: 5px solid rgba(250, 250, 250, 1);background-image: linear-gradient(to right top, #f5f5f5, #f6f6f6, #f7f6f6, #f8f7f7, #f9f7f7);',
      bgThirdChatBox: 'background: #fff',
      bgInput: 'background: #fff; color: rgba(0, 0, 0, .8)',
      borderStar: 'color: #000',
      bgWheel: 'background: #ff7c47',
      colorMS: 'background-image: linear-gradient(to right top, #eaebeb, #eff0f0, #f5f5f5, #fafafa, #ffffff); --my-color-ms: #fafafa;color:rgba(0, 0, 0, .8); box-shadow: 0px 3px 3px 0px #CBCBCB;',
      colorMSRep: 'background-image: linear-gradient(to right top, #cefaff, #d1f9ff, #d4f7ff, #d8f5ff, #dbf4ff); color:rgba(0, 0, 0, .8); --my-color-rep-ms: #d8f5ff; box-shadow: 0px 3px 3px 1px #CCE8EB;'
    }
    localStorage.setItem('__theme', JSON.stringify(state.getTheme))
  },
  setTheme: (state, ls) => {
    state.getTheme = ls
  }
}

const actions = {
  setLigthTheme: ({ commit }) => {
    commit('setLigthTheme')
  },
  setDarkTheme: ({ commit }) => {
    commit('setDarkTheme')
  },
  setDarkLightTheme: ({ commit }) => {
    commit('setDarkLightTheme')
  },
  setLightDarkTheme: ({ commit }) => {
    commit('setLightDarkTheme')
  },
  setTheme: ({ commit }, ls) => {
    commit('setTheme', ls)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
