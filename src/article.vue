<template lang="pug">
article 
  .picture
    div {{post.id}}
  h4 {{post.title}}
  p {{post.desc}} 
   .newsstat
     span просмотров {{post.view}}
     span мне нравится {{post.like}}
     span коментариев {{post.comments}}
     span репостов {{post.repost}}
</template>
<script>
export default {
  data() {
    return {
      post: {
        id:0,
        title:'Title',
        desc:"Здесь должна быть новость вашего портала. Здесь должна быть новость вашего портала. Здесь должна быть новость вашего портала.  Здесь должна быть новость вашего портала. ",
        like:20,
        comments:3,
        repost:12,
        view:300      
      }    
    }  
  }
}
</script>