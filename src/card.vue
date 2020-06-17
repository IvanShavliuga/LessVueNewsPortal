<template lang="pug">
article.card
  h3.card__title {{card.header}}
  div.card__image
    i.fas.fa-laptop-code.icon.icon__cards
  p.card__text {{card.body}}
    .card__link 
      a(href="#") read more
    p.card__date
      i.fa.fa-clock.icon.icon__watch 
      span {{card.date}}
      span.card__status in process
</template>
<script>
export default {
  props: {
    card:{
      type: Object,
      required:true    
    }  
  }
}
</script>