<template lang="pug">
section.page
  h2.page__header Comments user
  div.page__container
    each ind in [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]
      appcomment
</template>
<script>
import comment from './comment';
export default {
  components: {
    appcomment:comment  
  }
}
</script>