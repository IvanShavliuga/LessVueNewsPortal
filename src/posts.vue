<template lang="pug">
section.page
  apparticle(v-for="(p,key) in posts",:key="key",:post="p")
</template>
<script>
import  article from './article';
export default {
  data()  {
    return {
      posts:[]    
    }
  },
  created() {
    this.posts=this.$store.getters.postsAll;
  },
  components: {
    apparticle:article  
  }
}
</script>