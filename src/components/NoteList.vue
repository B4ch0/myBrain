<script setup>
import { useFirestore} from 'vuefire'
import { useClientStore } from '../stores/client'
import { collection, doc, updateDoc} from "firebase/firestore"; 

const db = useFirestore()
const clientStore = useClientStore()



async function addNote(){
    const name = prompt("Create note", "New note");
    const notebook = clientStore.currentNotebook
    const notebookId = notebook.id
    const docRef = doc(collection(db, "notebooks"), notebookId)
    const notes = notebook.notes
  notes.push({title: name, content: ""})
  await updateDoc(docRef, {
      notes: notes
  });
}

function selectNote(){
  
}
</script>




<template >
    <div class="menu">
      <button  class="addNote" @click="addNote()">+</button>
    </div><div>
      <button class="selectButton" @click="selectNote()">{{  }}</button>
    </div>
  </template>

  <style>
.menu{
  padding: 15px;
  display: flex;
  border-bottom: 1px solid #e2e2e2;
}
.addNote{
  color: #fff;
  background: rgb(10, 219, 28);
  width: 30px;
  height: 30px;
  font-weight: bold;
  font-size: 20px;
}
.selectButton{
  width: 80%;
  height: 100%;
  text-align: left;
  padding: 15px;
  white-space: nowrap;
  overflow: hidden;
  font-size: 14px;
}
</style>