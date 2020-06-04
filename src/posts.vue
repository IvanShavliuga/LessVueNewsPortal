<template lang="pug">
section.page
  apparticle(v-for="(p,key) in posts",:key="key",:post="p")
</template>
<script>
import  article from './article';
export default {
  props: {
    posts: {
      type: Array,
      required: true    
    }  
  },
  components: {
    apparticle:article  
  }
}
</script>