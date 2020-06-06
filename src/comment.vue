<template lang="pug">
div.comment
  h4.comment__user @{{user.login}}
  p.comment__text {{comment.text}}
  p.comment__date 
    span {{comment.date}}
    span {{comment.like}}
</template>
<script>
export default  {
  props: {
    comment: {
      type:Object,
      required:true  
    },
    user: {
      type:Object,
      required:true    
    }
  }
}
</script>