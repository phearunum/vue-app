import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import * as Cookies from "js-cookie";
import  state from './state';
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: [
    createPersistedState()
  ],
  /*
  states: {
    layout: 'app-blank',
    user: '',
    token: localStorage.getItem('token') || '',
    status: '',
    isLogin: false,
    table: 0
  },
  mutations: {
    SET_LAYOUT(state, payload) {
      state.layout = payload
    },
   resetState(state) {
      state.isLogin = false;
      state.token = null;
      state.user = null;
      state.table = 0;
    } 
  },
  
  actions: {
    layout(context, value) { context.commit('layout', value) },
    clearState({ commit }) {
      commit('resetState');
    },
  },
 
  getters: {
    layout(state) {
      return state.layout
    },
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    table: state => state.table,
  },
   */
  modules: {
  }
})
