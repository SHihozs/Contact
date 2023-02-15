<template>

<div class="card mx-auto" style="width: 35rem;" >
  <sui-grid-column>
    <sui-segment raised>

      <div class="ui teal segment">
         <sui-label ribbon color="teal">Login</sui-label>
      </div>
      
      <form class="ui form">
        <div class="field">
          <label><b>User Account</b></label>
             <input type="text" v-model="User.username" placeholder="User Account">
        </div>

        <div class="field">
          <label><b>Password</b></label>
            <input type="password" v-model="User.password" placeholder="Password">
            <div class="ui pointing red basic label" id = "errorDisplay" hidden = "true"></div>
        </div>
 
            <button class="ui button" type="submit" @click.prevent="logIn">Login</button>
        </form>

    </sui-segment>
  </sui-grid-column>
</div>

</template>

<script>

import axios from 'axios'
export default{

  name: 'LoginPage',
  data(){
    return{
      //รับจาก V-model
      User: {
        username: '',
        password: ''
       }
    }
  },
  
  methods: {
     logIn() {
        axios.get('https://contact3196-backend.herokuapp.com/users/' + this.User.username + '/' + this.User.password)
        //user return from backend
            .then((user) => {
              
              if(user.data.username == this.User.username && user.data.password == this.User.password)
              {
                this.$router.replace('/contactlistpage')
              } 
            
            })
            .catch((error) => {
                document.getElementById("errorDisplay").hidden = false
                document.getElementById("errorDisplay").textContent = "Incorrect Username or Password"
            })
          }
      }

  }



</script>


<style>

</style>