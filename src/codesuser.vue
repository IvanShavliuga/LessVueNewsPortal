<template lang="pug">
section.page
  appcode(v-for="(c,k) in codes" :code="c", :key="k+100" :user="users[c.userId]")
</template>
<script>
import code from './code';
export default {
  data() {
    return {
      loginid:0,
      codes:[],
      users:[]   
    }  
  },
  created() {
    this.users=this.$store.getters.users;
    this.loginid=this.$store.getters.loginid;
    this.codes=this.$store.getters.codeuser;
    
  },
  components: {
    appcode:code  
  } 
}
</script>