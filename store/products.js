export const state = () => ({
  list: [],
  product: {},
})

export const mutations = {
  set (state, product) {
    state.list = product
  },
  add (state, value) {
    state.list.push(value)
  },
  remove (state, {product}) {
    state.list.filter(p => product.id !== p.id)
  },
  mergeProduct (state, data) {
    Object.assign(state.product, data)
  },
  setProduct (state, form) {
    state.product = form
  }
}

export const actions = {
  async get ({commit}) {
    await this.$axios.get('/api/products')
      .then((res) => {
        if (res.status === 200) {
          commit('set', res.data)
        }
      })
  },
  async show ({commit}, params) {
    await this.$axios.get(`/api/products/${params.id}`)
      .then((res) => {
        if (res.status === 200) {
          commit('mergeProduct', res.data)
        }
      })
  },
  async set ({commit}, products) {
    await commit('set', products)
  },
  create ({commit}, params) {
    return this.$axios.post('/api/products', params)
  },
  update ({commit}, params) {
    return this.$axios.put(`/api/products/${params.id}`, params)
  },
  delete ({commit}, params) {
    return this.$axios.delete(`/api/products/${params.id}`)
  }
}