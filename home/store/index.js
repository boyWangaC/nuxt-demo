import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    list: 10
  },
  mutations: {
    increment (state, list) {
      state.list = list
    }
  }
})

export default store