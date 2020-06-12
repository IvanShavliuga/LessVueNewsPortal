<template lang="pug">
section.page
  appuser(:user="user")
</template>
<script>
import user from './user';
export default {
  data() {
    return {
      user:{}    
    }  
  },
  components: {
    appuser:user
  },
  created() {
    this.user = this.$store.getters.user;  
  }
}  
</script>