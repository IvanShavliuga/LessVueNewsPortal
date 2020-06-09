<template lang="pug">
div.comment
  h4.comment__user @{{user.login}}
  p.comment__text {{comment.text}} ({{comment.id}}, {{comment.likeclick}})
  p.comment__date 
    span {{comment.date}}
    span
      i.far.fa-thumbs-up.icon.icon__vote(title="+", @click="likecomment(comment)")
      b {{comment.like}}
      i.far.fa-thumbs-down.icon.icon__vote(title="-", @click="dislikecomment(comment)") 
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
  },
  methods: {
    likecomment(comment) {
      this.$store.dispatch("likecomment",comment);    
    },
    dislikecomment(comment) {
      this.$store.dispatch("dislikecomment",comment);    
    }  
  }
}
</script>