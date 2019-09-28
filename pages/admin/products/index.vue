<template>
  <div class="container">
    <b-row>
      <b-col>
        <b-btn variant="outline-success" class="mb-3" :to="'/admin/products/new'">
          New
        </b-btn>
        <b-table striped hover :items="list" :fields="fields">
          <template v-slot:cell(name)="data">
            <b-link :to="`/products/${data.item.id}`">{{data.item.name}}</b-link>
          </template>
          <template v-slot:cell(actions)="data">
            <div class="container-actions">
              <b-btn variant="primary" :to="'products/'+data.item.id+'/edit'">
                <font-awesome-icon icon="edit" />
              </b-btn>
              <b-btn variant="danger" @click="id = data.item.id" v-b-modal.confirmDelete>
                <font-awesome-icon icon="trash-alt" />
              </b-btn>
            </div>
          </template>
        </b-table>
        <b-modal id="confirmDelete" title="Delete" @ok="destroy" ok-variant="danger">
          Are you sure?
        </b-modal>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex';

  export default {
    async fetch({store}) {
      await store.dispatch('products/findAll')
    },
    computed: {
      ...mapState ('products', ['list'])
    },
    data() {
      return {
        id: 0,
        fields: [
          {
            key: 'name',
            label: 'Name',
            sortable: true,
          },
          {
            key: 'description',
            label: 'Description',
            sortable: true,
          },
          {
            key: 'actions',
            label: '',
            sortable: false,
            thStyle: { width: '120px' }
          }
        ]
      }
    },
    methods: {
      ...mapActions('products', ['delete', 'findAll']),
      destroy () {
        this.delete({id: this.id}).then(() => this.findAll())
      }
    }
  }
</script>

<style scoped>
</style>
