<template lang="pug">
section.page
  div.page__container
    appcomment(v-for="(c,k) in comments" :key="k" :comment="c", :user="user")
</template>
<script>
import comment from './comment';
export default {
  data() {
    return {
      comments: [],
      userid:0    
    }
  },
  components: {
    appcomment:comment  
  },
  created() {
    this.userid=this.$store.getters.loginid;
    this.comments=this.$store.getters.commentsuser;  
    this.user=this.$store.getters.user;
  }
}
</script>