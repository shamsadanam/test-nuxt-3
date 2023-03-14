import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([]);

  function fetchProducts(){
    
  }
})

// In Setup Stores:

// ref()s become state properties
// computed()s become getters
// function()s become actions