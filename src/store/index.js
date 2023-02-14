import { createStore } from 'vuex'

export default createStore({
  state: {
    items: []
  },
  getters: {
    GET_ITEMS: state => {
      return state.items
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
