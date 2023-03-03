import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: '',
    password: ''
  },
  getters: {
    getLogin: state => state.login
  },
  mutations: {
    // тут меняешь логин и пароль
  },
  actions: {
    // вызываешь mutations
  },
  modules: {
  }
})
