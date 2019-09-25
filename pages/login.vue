<template>
  <div class="container">
    <b-row>
      <b-col lg="6">
        <b-card-group deck>
          <b-card bg-variant="light" header="NEW CUSTOMER">
            <b-card-text>
              <b-form @submit="">
                <b-form-group label="First Name" label-for="first-name">
                  <b-form-input id="first-name" />
                </b-form-group>
                <b-form-group label="Last Name" label-for="last-name">
                  <b-form-input id="last-name" />
                </b-form-group>
                <b-form-group label="Email" label-for="email">
                  <b-form-input id="email" />
                </b-form-group>
                <b-form-group label="Password" label-for="password">
                  <b-form-input id="password" type="password" />
                </b-form-group>
                <b-button block pill variant="success">
                  <font-awesome-icon icon="user" />
                  Create Account
                </b-button>
              </b-form>
            </b-card-text>
          </b-card>
        </b-card-group>
      </b-col>
      <b-col lg="6">
        <b-card-group deck>
          <b-card bg-variant="light" header="LOGIN">
            <b-card-text>
              <b-form @submit="">
                <b-form-group label="Username" label-for="username">
                  <b-form-input id="username" />
                </b-form-group>
                <b-form-group label="Password" label-for="password">
                  <b-form-input id="password" />
                </b-form-group>
                <b-button pill variant="success" class="float-right btn-login">
                  <font-awesome-icon icon="sign-in-alt" />
                  Login
                </b-button>
              </b-form>
            </b-card-text>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
  </div>
</template>
<script>
  // const axios = require('axios')
  export default {
    asyncData ({params}) {
      // return axios.get('http://localhost:3000/sample.json').then(({data}) => {
      //   return { message: data.message }
      // })
      return null
    }
  }
</script>
<style>
  .card-deck {
    margin-top: 40px;
  }
  .btn-login {
    padding-left: 40px;
    padding-right: 40px;
  }
</style>
