<template lang="pug">
article.post 
  .picture
    div {{post.id+1}}
  h4 {{post.title}}
  p.post__desc {{post.desc}} 
  appstaticpost(:like="post.like" :views="post.views" :comments="post.comments" :repost="post.repost")
  appcomment(v-if="post.comments.length!=0" v-for="(c,k) in post.comments" :comment="comments[c]" :key="k" :user="users[comments[c].userId]")
  div(v-else) No comments
</template>
<script>
import staticpost from './staticpost';
import comment from './comment';
export default {
  props: {
    post: {
      type: Object,
      required: true
    },
    comments: {
      type:Array,
      required:true    
    },
    users: {
      type:Array,
      required:true    
    }
  },
  components: {
    appstaticpost:staticpost, 
    appcomment:comment 
  }
}
</script>