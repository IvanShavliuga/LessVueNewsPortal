<template lang="pug">
article.post 
  .picture
    div {{post.id+1}}
  h4 {{post.title}}
  p.post__desc {{post.desc}} 
  appstaticpost(:like="post.like" :views="post.views" :comments="post.comments" :repost="post.repost" :user="users[post.userId]" type="post")
  appcommentform(:comments="comments", :users="users", :post="post")
</template>
<script>
import staticpost from './staticpost';
import commentform from './commentform';
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
    appcommentform:commentform 
  }
}
</script>