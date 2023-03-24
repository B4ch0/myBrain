<script setup>
import { useFirestore} from 'vuefire'


const db = useFirestore()




async function addNote(){
    const name = prompt("Create note", "New note");
}

</script>




<template >
    <div class="menu">
      <button @click="addNote()">+</button>
      
    </div>
  </template>

  <style>
.menu{
  padding: 15px;
  display: flex;
  border-bottom: 1px solid #e2e2e2;
}


</style>