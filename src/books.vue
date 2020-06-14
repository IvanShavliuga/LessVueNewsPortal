<template lang="pug">
section.page
  appbook(v-for="(b,k) in books" :book="b", :user="users[b.userId]" :key="k+200")
</template>
<script>
import book from './book';
export default {
  data()  {
    return {
      users:[],
      books:[]    
    }
  },
  created() {
    this.books=this.$store.getters.books;
    this.users=this.$store.getters.users;
  },
  components: {
    appbook:book  
  }
}
</script>