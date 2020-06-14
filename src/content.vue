<template lang="pug">
.content(:style="(asidehide)?('width:70%'):('width:100%')")
  router-view
</template>
<script>
export default {
  props: {
    books: {
      type: Array,
      required: true    
    },
    users: {
      type: Array,
      required: true    
    },
    codes: {
      type: Array,
      required:true    
    },
    alerts: {
      type: Array,
      required: true    
    },
    posts: {
      type: Array,
      required: true    
    }
  },
  data() {
    return {
      asidehide:true    
    }  
  },
  updated() {
    this.asidehide=this.$store.getters.asidehide;  
  },
  created() {
    this.asidehide=this.$store.getters.asidehide;  
  }
}

</script>
