<template lang="pug">
section.page
  apparticle(v-for="(p,key) in posts",:key="key",:post="p", :users="users", :comments="comments")
</template>
<script>
import  article from './article';
export default {
  data()  {
    return {
      posts:[],
      users:[],
      comments:[]    
    }
  },
  created() {
    this.posts=this.$store.getters.postgroup;
    this.users=this.$store.getters.users;
    this.comments=this.$store.getters.comments;
  },
  components: {
    apparticle:article  
  }
}
</script>