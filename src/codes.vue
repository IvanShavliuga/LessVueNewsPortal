<template lang="pug">
section.page
  appcode(v-for="(c,k) in codes", :code="c", :key="k+100")
</template>
<script>
import code from './code';
export default {
  props: {
    codes: {
      type: Array,
      required: true    
    }  
  },
  components: {
    appcode:code  
  }
}
</script>