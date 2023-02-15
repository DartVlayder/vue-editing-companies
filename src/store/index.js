import { createStore } from 'vuex'

export default createStore({
  state: {
    items: []
  },
  getters: {
    GET_ITEMS: state => {
      return state.items
    },
    getIdItems: (state) => (id) => {
      for (let i = 0; i < state.items[0].length; i++) {
        if (i == id) {
          return state.items[0][id]
        }
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
