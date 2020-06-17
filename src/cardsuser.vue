<template lang="pug">
section.page
  appcard(v-for="(c,k) in cards" :card="c" :key="k")   
</template>
<script>
import card from './card';
export default {
  data() {
    return {
      cards:[]    
    }  
  },
  created() {
    this.cards = this.$store.getters.personalcards;
  },  
  components: {
    appcard:card
  } 
}
</script>