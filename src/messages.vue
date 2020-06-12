<template lang="pug">
section.page
  appmessage(v-for="(m,k) in messages" :key="k" :message="m" :users="users" :groups="groups")
</template>
<script>
import message from './message';
export default {
  data(){
    return {
      messages:[],
      users:[],
      groups:[]    
    }
  },
  created() {
    this.messages = this.$store.getters.messages;
    this.users = this.$store.getters.users;
    this.groups=this.$store.getters.groups;
  },
  components:{
    appmessage:message  
  }
}
</script>