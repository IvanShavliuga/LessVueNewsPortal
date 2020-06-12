<template lang="pug">
section.page
  appmessage(v-for="(m,k) in messages" :key="k" :message="m" :users="users")
</template>
<script>
import message from './message';
export default {
  data(){
    return {
      messages:[],
      users:[]    
    }
  },
  created() {
    this.messages = this.$store.getters.messages;
    this.users = this.$store.getters.users;
  },
  components:{
    appmessage:message  
  }
}
</script>