import Crud from './crud.js'

const crud = new Crud('/api/products', 'product')
export const state = () => ({
  list: [],
  product: {},
})
export const mutations = {
  ...crud.mutations
}

export const actions = {
  ...crud.actions
}