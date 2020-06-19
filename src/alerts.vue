<template lang="pug">
section.page
  appalert(v-for="(c,k) in alerts", :alert="c", :key="k+100", :users="users")
</template>
<script>
import alert from './alert';
export default {
  data()  {
    return {
      users:[],
      alerts:[],
      systemmessages:[]    
    }
  },
  created() {
    this.users=this.$store.getters.users;
    this.alerts=this.$store.getters.alerts;
    this.systemmessages = this.$store.getters.sysmessages;
  },
  components: {
    appalert:alert  
  }
}
</script>