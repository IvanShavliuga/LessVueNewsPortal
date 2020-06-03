<template lang="pug">
section.page
  appbook(v-for="(b,k) in books" :book="b", :key="k+200")
</template>
<script>
import book from './book';
export default {
  props: {
    books: {
      type: Array,
      required: true    
    }  
  },
  components: {
    appbook:book  
  }
}
</script>