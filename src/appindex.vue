<template lang="pug">
div#appindex(data-id="appindex")
  - var items = ['Главная','Наука','Технологии','Программирование','Тесты']
  header
    .logo IT
      span NEWS
    ul
      each item in items
        li=item
  .promohead This is my work. New version 1.2.0. {{status}}
  main 
    each index in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
      apparticle 
  footer  Это портфолио Ивана Иванова (Шавлюги) Использую flexbox и LESS

</template>
<script>
import article from './article'
export default {
  data() {
    return {
      status:"200 OK",
    }  
  },
  components: {
    apparticle:article  
  }
}
</script>
<style>
.color {
  color: #98dba0;
  font-size: 100px;
}
</style>