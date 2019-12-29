<template>
  <input type="text" 
         class="form-control" 
         placeholder="Search" 
         v-model="searchTerm" 
         @input="searchTermChanged($event.target.value)"/>
</template>

<script>
export default {    
    name: 'Search',
    data() {
      return {
        searchTerm: ''
      }
    },
    methods: {
        searchTermChanged(searchTerm) {
        this.$emit('search-term-changed', searchTerm)
        }
    }
}
</script>