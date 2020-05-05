<template lang="pug">
article 
  .picture
    div {{post.id+1}}
  h4 {{post.title}}
  p {{post.desc}} 
  p.newsstat
    span просмотров {{post.views.length}}
    span мне нравится {{post.like.length}}
    span коментариев {{post.comments.length}}
    span репостов {{post.repost.length}}
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>