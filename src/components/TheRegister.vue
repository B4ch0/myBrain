<script setup>
import { ref , onMounted} from 'vue'
import { useRouter , useRoute} from 'vue-router'
import {createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import VButton from './utils/VButton.vue';
import { getCurrentUser } from 'vuefire'



const router = useRouter();
const email = ref('')
const password = ref('')
const route = useRoute();
const auth = getAuth();
const loading = ref(false)
const errors = ref('')




function registerUser(e){
  e.preventDefault();
  loading.value = true;
  errors.value = '';
  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    loading.value = false
    router.push( route.query.redirect || '/')
  })
  .catch((error) => {
    loading.value = false;
    errors.value = error.message;
  });}
  
  onMounted(async () => {
  const currentUser = await getCurrentUser()
  if (currentUser) {
    const to =
      route.query.redirect && typeof route.query.redirect === 'string'
        ? route.query.redirect
        : '/'

    router.push(to)
  }
})


</script>
<template>
    <div class="container">
      <div class="flex-column centered">
        <h1>Register</h1>
        <template v-if="errors">
      <p class="error">{{ errors }}</p>
    </template>
        <form>
          <input v-model="email" placeholder="Email" />
          <input v-model="password" placeholder="Password" type="password"/>
          <VButton :loading="loading" full-width @click="registerUser($event)">Register</VButton> 
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
  .error{
  color: red;
}
  </style>