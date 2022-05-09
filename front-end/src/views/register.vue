<template>
  <div class="container">
       <div class="col">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Username</span>
          <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" v-model="username">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Password</span>
          <input type="text" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" v-model="password">
        </div>
           <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">first_name</span>
          <input type="text" class="form-control" placeholder="first_name" aria-label="Username" aria-describedby="basic-addon1" v-model="first_name">
        </div>
           <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">last_name</span>
          <input type="text" class="form-control" placeholder="last_name" aria-label="Username" aria-describedby="basic-addon1" v-model="last_name">
        </div>
        <button type="button" class="btn btn-primary" @click="cf_register">Register</button>
        <p>
          <a ></a>&nbsp;<a>Back to <router-link to="/login">Login</router-link></a>
        </p>
      </div>
  </div>
</template>

<script>
import axios from "axios";


export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      username: "",
      password: "",
    };
  },

  methods: {
    cf_register() {
         axios
            .post("http://localhost:3000/register",{
                  user_name: this.username,
                  password: this.password,
                  first_name: this.first_name,
                  last_name: this.last_name,
                  type:"buyer"

            })
            .then((response) => {
                  this.$router.push({ name: "login" });
                    console.log(response)      
                })
                .catch((err) => {
                  console.log(err);
                });
    },
  },
};
</script>

<style scoped>
</style>

