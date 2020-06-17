<template lang="pug">
section.page
  appcode(v-for="(c,k) in codes", :code="c", :key="k+100", :user="users[c.userId]")
</template>
<script>
import code from './code';
export default {
  data()  {
    return {
      codes:[],
      users:[]    
    }
  },
  created() {
    this.codes=this.$store.getters.codes;
    this.users=this.$store.getters.users;
  },
  components: {
    appcode:code  
  }
}
</script>