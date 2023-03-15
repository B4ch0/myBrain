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
        <input v-model="email" placeholder="email" />
        <input v-model="password" placeholder="password" type="password"/>
        <p>Submit</p>
      </form>
  </div>



</div>
</template>

<style scoped>

</style>
