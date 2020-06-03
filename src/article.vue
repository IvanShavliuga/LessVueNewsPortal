<template lang="pug">
article.post 
  .picture
    div {{post.id+1}}
  h4 {{post.title}}
  p.post__desc {{post.desc}} 
  appstaticpost(:like="post.like" :views="post.views" :comments="post.comments" :repost="post.repost")
</template>
<script>
import staticpost from './staticpost';
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  components: {
    appstaticpost:staticpost  
  }
}
</script>