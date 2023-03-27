import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useClientStore = defineStore('client', () => {
    const currentNotebook = ref(null)
    const currentNote = ref(null)
    function setCurrentNotebook(val) {
        currentNotebook.value = val;
        currentNote.value = null
    }
  
    function setCurrentNote(val) {
        currentNote.value = val;
      }
    
    return { currentNotebook, currentNote, setCurrentNotebook, setCurrentNote}
  })
  