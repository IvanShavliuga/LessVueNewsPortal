<template lang="pug">
section.page
  appuser(v-for="(u,k) in followers" :key="k" :user="u")
</template>
<script>
import user from './user';
export default {
  data() {
    return {
      followers:[]    
    }  
  },
  created() {
    this.followers=this.$store.getters.friends;  
  },
  components: {
    appuser: user  
  }
}
</script>