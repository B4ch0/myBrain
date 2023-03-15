<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
<div class="container">
  <div class="flex-column centered">
    <h1>Login</h1>
    <form>
        <input v-model="email" placeholder="Email" />
        <input v-model="password" placeholder="Password" type="password"/>
        <p>Submit</p>
        <p>Create new account: </p>
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
