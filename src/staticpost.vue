<template lang="pug">
p.newsstat
  span.fa.fa-at.icon.icon__static 
    router-link(:to="'/userpage/'+user.id") {{user.login}}
  span.far.fa-eye.icon.icon__static {{views.length}}
  span(@click="clickbutton('like')").far.fa-heart.icon.icon__static {{like.length}}
  span.far.fa-comment-dots.icon.icon__static {{comments.length}}
  span(@click="clickbutton('repost ')").fas.fa-flag.icon.icon.icon__static {{repost.length}}
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
    },
    user: {
      type: Object,
      required:true    
    }  
  },
  methods: {
    clickbutton(type) {
      switch(type) {
        case "like":
          this.$emit("like",{type:"Object",data:this.like.length+1});
          break;
        case "repost":
          this.$emit("repost",this.repost.length+1);
          break;       
      }
    }  
  }
}
</script>