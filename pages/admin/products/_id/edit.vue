<template>
  <product-form />
</template>

<script>
  import ProductForm from "~/components/forms/ProductForm"
  export default {
    name: "EditProduct",
    components: { ProductForm },
    async fetch({store, params}) {
      await store.dispatch('products/show', { id: params.id });
    }
  }
</script>