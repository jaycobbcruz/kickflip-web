<template>
  <div class="container">
    <b-col>
      {{product.name}}
    </b-col>
    <b-col>
      {{product.description}}
    </b-col>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    name: "ShowProduct",
    async fetch({store, params}) {
      await store.dispatch('products/show', { id: params.id });
    },
    computed: {
      ...mapState('products', ['product'])
    }
  }
</script>