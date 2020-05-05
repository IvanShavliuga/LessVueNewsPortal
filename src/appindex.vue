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
    appaside
    .content
      apparticle(v-for="(p,key) in $store.getters.postsAll" :key="key" :post="p") 
  footer  Это портфолио Ивана Иванова (Шавлюги) Использую flexbox и LESS

</template>
<script>
import article from './article'
import aside from './aside'
export default {
  data() {
    return {
      status:"200 OK",
    }  
  },
  components: {
    apparticle:article,  
    appaside:aside
  }
}
</script>
<style>
.color {
  color: #98dba0;
  font-size: 100px;
}
</style>