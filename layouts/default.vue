<template>
  <div>
    <no-ssr>
      <notifications group="alerts" position="bottom right">
        <template slot="body" slot-scope="props">
          <b-alert
            :show="props.item.duration || 1000"
            dismissible
            :variant="props.item.type || 'info'"
            @dismissed="props.item.timer=0">
            <div v-if="props.item.title">
              <h4 class="alert-heading">{{ props.item.title }}</h4>
              <hr />
            </div>
            <p>{{props.item.text}}</p>
          </b-alert>
        </template>
      </notifications>
    </no-ssr>
    <b-navbar toggleable="lg">
      <nuxt-link to="/" class="navbar-brand">
        <img src="/images/kickflip-logo.png" width="100" height="30" alt="kickflip" />
      </nuxt-link>
      <b-navbar-nav>
        <b-nav-item href="#">Shirts</b-nav-item>
        <b-nav-item href="#">Shoes</b-nav-item>
        <b-nav-item href="#">Skate</b-nav-item>
        <div class="searchbar">
          <input class="search_input" type="text" name="" placeholder="Search...">
          <a href="#" class="search_icon"><font-awesome-icon icon="search" /></a>
        </div>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <nuxt-link to="login" class="nav-link">
          <font-awesome-icon icon="user-circle" style="font-size: 30px"/>
          Login
        </nuxt-link>
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

<style scoped>
  .navbar {
    margin-bottom: 20px;
  }
  .search_input {
    border: 0;
    outline: 0;
    background: none;
    width: 400px;
  }
  .searchbar {
    margin-left: 80px;
    border-radius: 30px;
    padding: 4px 10px 0 22px;
    background-color: #fff;
    border: 1px solid #e1e1e1;
  }
  .searchbar:hover > .search_icon{
    background: white;
    color: red;
  }
  .search_icon {
    font-size: 15px;
    height: 26px;
    width: 30px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: red;
  }
  input {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
  }
</style>
