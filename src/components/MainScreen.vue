<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();


function logOut(){
  
     //gurnut na login page
    }
</script>
<template>
   <div class="container">
    <div class="flex-row mainScreen">
      <div class="flex-column menu">
       <p >User: <strong>JA</strong> / <a href="#" @click="logOut()">Log Out</a></p>
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
</style>