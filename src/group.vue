<template lang="pug">
div.group
  div.group__circle 
    div.group__icon.fas.fa-users
    i(v-if="group.idAdmin==loginid").group__status.fa.fa-user-secret.icon.icon__admin
    i(v-else).group__status.far.fa-newspaper.icon.icon__group 
  h3.group__title {{group.name}}
  p.group__cat {{group.category}}
  p.group__desc {{group.desc}}
  p.group__statistic 
    span.group__admin @{{user.login}}
    span.group__news 
      i.far.fa-file.icon.icon__group      
      b {{group.idNews.length}}
    span.group__followers
      i.fas.fa-users.icon.icon__group
      b {{group.followers.length}}
</template>
<script>
export default {
  props: {
    group: {
      type: Object,
      required:true    
    },
    user: {
      type: Object,
      required:true    
    },
    loginid: {
      type: Number,
      required:true    
    }  
  }
}
</script>