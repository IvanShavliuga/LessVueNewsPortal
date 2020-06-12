<template lang="pug">
div.message 
  h3.message__title {{message.title}}
  p.message__info
    span.message__info__system(v-if="message.type==='system'") system
    span.message__info__add(v-if="message.type==='user-add'") user add
    span.message__info__add(v-if="message.type==='group-add'") group add 
    span.message__arrow.icon.icon__arrow.fas.fa-angle-double-right 
    span.message__to {{users[message.to].login}}
  p.message__text {{message.body}}
</template>
<script>
export default {
  props:{
    users: {
      type:Array,
      required:true    
    },
    message: {
      type:Object,
      required: true       
    }   
  }

}
</script>