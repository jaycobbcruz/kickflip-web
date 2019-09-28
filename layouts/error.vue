<template>
  <div class="container">
    <nuxt-link to="/">Go to Home page</nuxt-link>
    <h1 v-if="error.statusCode === 404">
      Page not found
      <p>
      Here's a picture of a cat
      </p>
      <img src="/images/cat.png" alt="cat" />
    </h1>
    <h1 v-else>An error occurred</h1>
  </div>
</template>

<script>
  export default {
    props: ['error']
  }
</script>