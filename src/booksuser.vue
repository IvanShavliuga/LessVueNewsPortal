<template lang="pug">
section.page
  appbook(v-for="(b,k) in books" :book="b", :key="k+100" :user="users[b.userId]")
</template>
<script>
import book from './book';
export default {
  data() {
    return {
      loginid:0,
      books:[],
      users:[]   
    }  
  },
  created() {
    this.users=this.$store.getters.users;
    this.loginid=this.$store.getters.loginid;
    this.books=this.$store.getters.booksUser;
    
  },
  components: {
    appbook:book
  } 
}
</script>