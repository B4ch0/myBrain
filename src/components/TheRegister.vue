<script setup>
import { ref } from 'vue'
import { useRouter} from 'vue-router'

const router = useRouter();
const email = ref('')
const password = ref('')

function registerUser(){

    router.push( '/')
  }
  



</script>
<template>
    <div class="container">
      <div class="flex-column centered">
        <h1>Register</h1>
        <form>
          <input v-model="email" placeholder="Email" />
          <input v-model="password" placeholder="Password" type="password"/>
          <button class="submit" @click="registerUser()">Submit</button> 
        </form> <p><center><router-link to="/login">Login</router-link></center></p>
      </div>
    </div>
  
    
  </template>
  
  <style scoped>
   
    .centered{
      margin: 0 auto;
      width: 300px;
    }
    input{
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    border: 1px solid #E1E1E1;
    background: #fff;
    color: #9F9F9F;
    padding: 12px 40px 12px 20px;
    margin-bottom: 20px;
    box-sizing:border-box;
    min-width: 100%;
  }
  input:focus {
    border-color: #B5B5B5;
    color: #343030;
  }
  </style>