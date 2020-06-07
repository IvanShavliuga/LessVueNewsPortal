<template lang="pug">
div.comments
  button.comments__button(@click="prev(post)") prev
  button.comments__button spam
  button.comments__button(@click="next(post)") next
  span.comment__number(v-if="post.comments.length>0") {{post.activecomment+1}} / {{post.comments.length}}
  appcomment(v-if="post.comments.length>0"  :comment="comments[post.activecomment]"  :user="users[comments[post.activecomment].userId]")
  div(v-if="post.comments==[]||post.comments==undefined||post.comments.length==0").commentsno 
    div No comments
</template>
<script>
import comment from './comment';
export default {
  props: {
    comments: {
      type:Array,
      required:true    
    },
    users: {
      type:Array,
      required:true    
    },
    post: {
      type: Object,
      required:true    
    }
  },
  components:{
    appcomment:comment 
  },
  methods: {
    next(post) {
      this.$store.dispatch("postcommentnext",post)   
    },
    prev(post) {
      this.$store.dispatch("postcommentprev",post)   
    }  
  }
}
</script>