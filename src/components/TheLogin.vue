<script setup>
import { ref } from 'vue'
import { useRouter, useRoute} from 'vue-router'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useFirebaseAuth } from 'vuefire'

const router = useRouter();
const route = useRoute();
const auth = useFirebaseAuth();
const loading = ref(false)

const email = ref('');
const password = ref('');


function login(){
  loading.value = true;
signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    loading.value = false;
    router.push(route.query.redirect || '/')
  })
  }
  





</script>

<template>
<div class="container">
  <div class="flex-column centered">
    <h1>Login</h1>
    <form>
        <input v-model="email" placeholder="Email" />
        <input v-model="password" placeholder="Password" type="password"/>
        <button class="submit" @click="login()">Submit</button> 
        <p>Create new account: <router-link to="/register">Register</router-link></p>
      </form>
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
  min-width: 100%;
  box-sizing:border-box;
}

input:focus {
  border-color: #B5B5B5;
  color: #343030;
}
</style>
