<template lang="pug">
.content(:style="(asidehide)?('width:70%'):('width:100%')")
  router-view
</template>
<script>
export default {
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
