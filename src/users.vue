<template lang="pug">
section.page
  appuser(v-for="(c,k) in users" :user="c", :key="k+100")
</template>
<script>
import user from './user';
export default {
  props: {
    users: {
      type: Array,
      required: true    
    }  
  },
  components: {
    appuser:user  
  }
}
</script>