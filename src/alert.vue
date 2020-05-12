<template lang="pug">
div.alert
  h2.alert__header {{alert.header}}
  div.alert__image
    div.alert__icon.fas.fa-exclamation-circle.icon__alert
  div.alert__text {{alert.body}}
  div.alert__status
    span.alert__user {{users[alert.userId].login}}
    span.alert__index {{alert.status}}
    span.alert__date {{alert.date}}
</template>
<script>
export default {
  props: {
    alert: {
      type: Object,
      required:true    
    },
    users: {
      type:Array,
      required: true       
    }  
  }

}
</script>