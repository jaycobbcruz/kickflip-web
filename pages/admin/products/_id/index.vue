<template>
  <div class="container">
    {{product.name}}
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