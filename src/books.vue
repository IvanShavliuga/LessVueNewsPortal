<template lang="pug">
section.page
  appbook(v-for="(b,k) in books" :book="b", :key="k+200")
</template>
<script>
import book from './book';
export default {
  data()  {
    return {
      users:[]    
    }
  },
  created() {
    this.books=this.$store.getters.books;
  },
  components: {
    appbook:book  
  }
}
</script>