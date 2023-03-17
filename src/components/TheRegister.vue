
<template>
    <div class="container">
      <div class="flex-column centered">
        <h1>Register</h1>
        <form>
          <input v-model="email" placeholder="Email" />
          <input v-model="password" placeholder="Password" type="password"/>
          <button class="submit" @click="login()">Submit</button> 
        </form>
        <p>Login</p>
      </div>
    </div>
  
    
  </template>
  
  <style scoped>
   
    .centered{
      margin: 0 auto;
      width: 300px;
    }
  
  </style>