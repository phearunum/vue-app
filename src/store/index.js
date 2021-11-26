import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import * as Cookies from "js-cookie";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState()
  ],
  state: {
    layout: 'app-blank',
    user: '',
    token: localStorage.getItem('token') || '',
    status:'',
    isLogin: false,
  },
  mutations: {
    SET_LAYOUT(state, payload) {
      state.layout = payload
    },
    resetState (state) {
      state.isLogin=false;
      state.token=null;
      state.user=null;
  }
  },
  getters: {
    layout(state) {
      return state.layout
    },
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  },
  actions: {
    layout(context, value) { context.commit('layout', value) },
    clearState ({ commit }) {
      commit('resetState');
  },
  },
  modules: {
  }
})
