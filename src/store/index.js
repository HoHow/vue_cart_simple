import Vue from 'vue'
import Vuex from 'vuex'
import VeeValidate from 'vee-validate';


// Modules
//import carts from './carts'

// Initialize
Vue.use(Vuex)
Vue.use(VeeValidate);
const state = {
  cart: []
}
const getters = {}
const actions = {}
const mutations = {}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
