<template lang="pug">
p.newsstat
  span.far.fa-eye.icon.icon__static {{views.length}}
  span.far.fa-heart.icon.icon__static {{like.length}}
  span.far.fa-comment-dots.icon.icon__static {{comments.length}}
  span.fas.fa-flag.icon.icon.icon__static {{repost.length}}
</template>
<script>
export default {
  props: {
    like: {
      type:Array,
      required:true    
    },
    repost: {
      type:Array,
      required:true    
    },
    comments: {
      type:Array,
      required:true    
    },
    views: {
      type:Array,
      required:true    
    }  
  }
}
</script>