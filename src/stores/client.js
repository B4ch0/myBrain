import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useClientStore = defineStore('client', () => {
    const currentNotebook = ref(null)
    function setCurrentNotebook(val) {
        currentNotebook.value = val;
    }
  

    return { currentNotebook }
  })
  