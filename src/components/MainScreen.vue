<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { signOut } from "firebase/auth";
import { useFirebaseAuth, useCurrentUser, useFirestore, useCollection } from 'vuefire'
import { collection, addDoc, query, where} from "firebase/firestore"; 
import NoteList from './NoteList.vue';
import NoteEditor from './NoteEditor.vue';

import NotebookList from './NotebookList.vue';

const auth = useFirebaseAuth();

const router = useRouter();
const user = useCurrentUser();
const db = useFirestore()

function logOut(){
  signOut(auth).then(() => { router.push('/login')})
  .catch((error) => {
    }); 

}
 


const notebooksQuery = query(
    collection(db, 'notebooks'),
    where('user', '==', user.value ? user.value.uid : null)
  )
const notebooks = useCollection(notebooksQuery)

const menu = computed(() => {
  if(!notebooks.value) return {};
  return nestObjects(notebooks.value);
})

function nestObjects(arr) {
  let tree = [];
  let lookup = {};

  arr.forEach(obj => {
    const { id, parent, children, ...rest } = obj;
    lookup[id] = { id, parent: parent || null, children: [], ...rest };
  });

  Object.keys(lookup).forEach(id => {
    const obj = lookup[id];
    if (obj.parent) {
      const parent = lookup[obj.parent];
      parent.children.push(obj);
    } else {
      tree.push(obj);
    }
  });
  return tree;
}
async function createNotebook(){
  const name = prompt("Create notebook", "New note");
  await addDoc(collection(db, "notebooks"), {
    user: user.value.uid,
    name: name,
    notes: [],
    children: []
  });
  notebookName.value = ""
}
</script>


<template>
   <div class="container">
    <div class="flex-row mainScreen">
      <div class="flex-column menu">
        <template v-if="user"><div>
       <p >User: <strong>{{ user.email }}</strong> / <a href="#" @click="logOut()">Log Out</a></p></div>
      </template>
      <div class="flex-row title-menu">
        <h2>Notebooks</h2>
        <button class="addIcon" @click="createNotebook()" >+</button>
      </div>
      <NotebookList :menu="menu"/>
    </div>
    <NoteList/>
    <NoteEditor/>
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


.title-menu{
  position: relative;
}
.title-menu h2{
  text-transform: uppercase;
  font-weight: bold;
}
.addIcon{
  position: absolute;
  top: 10px;
  right: 0;
  font-size: 30px;
  font-weight: 700;
}
</style>
