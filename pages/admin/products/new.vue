<template>
  <product-form />
</template>
<script>
  import ProductForm from "~/components/forms/ProductForm"
  export default {
    components: { ProductForm },
    fetch ({store}) {
      store.commit('products/setProduct', {})
    }
  }
</script>