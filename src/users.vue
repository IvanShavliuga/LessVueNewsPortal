<template lang="pug">
section.page
  appuser(v-for="(c,k) in users" :user="c", :key="k+100",:adduser="false")
</template>
<script>
import user from './user';
export default {
  data()  {
    return {
      users:[]    
    }
  },
  created() {
    this.users=this.$store.getters.users;
  },
  components: {
    appuser:user  
  }
}
</script>