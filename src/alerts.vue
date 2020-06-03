<template lang="pug">
section.page
  appalert(v-for="(c,k) in alerts", :alert="c", :key="k+100", :users="users")
</template>
<script>
import alert from './alert';
export default {
  props: {
    alerts: {
      type: Array,
      required: true    
    },
    users: {
      type: Array,
      required:true
    }  
  },
  components: {
    appalert:alert  
  }
}
</script>