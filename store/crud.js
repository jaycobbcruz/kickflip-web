export default class {
  constructor (endpoint, entityName, listName = 'list') {
    this.actions = {
      async findAll ({commit}) {
        await this.$axios.get(endpoint).then((res) => { if (res.status === 200) { commit('setList', res.data) } })
      },
      async show ({commit}, params) {
        await this.$axios.get(`${endpoint}/${params.id}`).then((res) => { if (res.status === 200) { commit('merge', res.data) } })
      },
      create ({commit}, params) { return this.$axios.post(endpoint, params) },
      update ({commit}, params) { return this.$axios.put(`${endpoint}/${params.id}`, params) },
      delete ({commit}, params) { return this.$axios.delete(`${endpoint}/${params.id}`) }
    }
    this.mutations = {
      setList (state, entityList) { state[listName] = entityList },
      merge (state, data) { Object.assign(state[entityName], data) },
      set (state, form) { state[entityName] = form }
    }
  }
}
