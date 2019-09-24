<template>
  <div>
    <b-navbar toggleable="lg">
      <b-navbar-brand href="/">
        <img src="/images/kickflip-logo.png" width="100" height="30" alt="kickflip" />
      </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item href="#">Shirts</b-nav-item>
        <b-nav-item href="#">Shoes</b-nav-item>
        <b-nav-item href="#">Skate</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" class="float-right">
          <font-awesome-icon icon="user-circle"  style="font-size: 30px"/>
          Login
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <nuxt />
    <footer id="footer" class="fixed-bottom float-right">
      <div class="float-right">
        @kickflip 2019
      </div>
    </footer>
  </div>
</template>

<style>
</style>
