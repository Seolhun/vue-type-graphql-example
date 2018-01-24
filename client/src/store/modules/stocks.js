import stocks from '../../data/stocks'

const state = {
  stocks: []

}

const getters = {
  stocks: state => {
    return state.stocks
  }
}

// Can't Async
const mutations = {
  'SET_STOCKS'(state, stocks) {
    state.stocks = stocks
  },
  'RND_STOCKS'(state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5))
    })
  }
}

// Can Async
const actions = {
  buyStock: ({ commit }, order) => {
    commit('BUY_STOCK', order)
  },
  initStocks: ({ commit }) => {
    commit('SET_STOCKS', stocks)
  },
  randomizeStocks: ({ commit }) => {
    commit('RND_STOCKS')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
