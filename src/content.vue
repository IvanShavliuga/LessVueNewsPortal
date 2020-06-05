<template lang="pug">
.content
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
  }
}

</script>
