<template lang="pug">
div.message 
  h3.message__title
  p.message__info
    span.message__from(v-if="message.type==='system'") system
    span.message__from(v-if="message.type==='user-add'") user add
    span.message__from(v-if="message.type==='group-add'") group add  
    span.message__to {{users[message.to].login}}
    span.message__date
  p.message__text
</template>
<script>
export default {
  props:{
    users: {
      type:Array,
      required:true    
    },
    message: {
      type:Array,
      required: true       
    }   
  }

}
</script>