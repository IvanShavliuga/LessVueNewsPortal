<template lang="pug">
section.page
  appgroup(v-for="(g,k) in groups" :key="k" :group="g" :loginid="loginid" :user="users[g.idAdmin]")
</template>
<script>
import group from './group';
export default {
  data() {
    return {
      loginid:0,
      groups:[],
      users:[]   
    }  
  },
  created() {
    this.users=this.$store.getters.users;
    this.loginid=this.$store.getters.loginid;
    this.groups=this.$store.getters.groupsUser;
    
  },
  components: {
    appgroup:group  
  } 
}
</script>