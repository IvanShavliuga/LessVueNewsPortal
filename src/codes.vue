<template lang="pug">
section.page
  appcode(v-for="(c,k) in codes", :code="c", :key="k+100")
</template>
<script>
import code from './code';
export default {
  data()  {
    return {
      codes:[]    
    }
  },
  created() {
    this.codes=this.$store.getters.codes;
  },
  components: {
    appcode:code  
  }
}
</script>