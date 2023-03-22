<script setup>
import { useRouter } from 'vue-router'
import { signOut } from "firebase/auth";
import { useFirebaseAuth, useCurrentUser } from 'vuefire'
const auth = useFirebaseAuth();

const router = useRouter();
const user = useCurrentUser();

function logOut(){
  signOut(auth).then(() => { router.push('/login')})}
     
    
</script>
<template>
   <div class="container">
    <div class="flex-row mainScreen">
      <div class="flex-column menu">
       <p >User: <strong>{{ user.mail }}</strong> / <a href="#" @click="logOut()">Log Out</a></p>
      </div>
    </div>
  </div>
</template>








<style scoped>
.mainScreen{
  height: 100vh;
}
.menu{
  background-color: #444;
  color: #fff;
  padding: 5px 20px 0 25px;
  overflow: scroll;
  max-width: 300px;
}
.menu a{
  color: #fff;
}
</style>