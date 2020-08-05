import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    pageTitle: 'Banner Maker',
    appTitle: 'Banner Maker',
    cdnImgUrl: 'https://s3.eu-west-2.amazonaws.com/boltcdn/img/',
    apiURL: 'http://admin.ahmetsc.com/api/PA7BATaXQTYCRKNt/',
    targetHref: null
  },
  getters: {
    appTitle (state) {
      return state.pageTitle
    }
  },
  mutations: {
    goHref (state, payload) {
      state.targetHref = payload.targetHref
      state.appTitle = payload.appTitle + ' | ' + state.pageTitle
      document.title = state.appTitle
    },
    newTitle (state, payload) {
      state.targetHref = payload.targetHref
      state.appTitle = payload.appTitle + ' | ' + state.pageTitle
      document.title = state.appTitle
    }
  }
})
