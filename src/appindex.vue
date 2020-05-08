<template lang="pug">
div#appindex(data-id="appindex")
  - var items = ['Главная','Наука','Технологии','Программирование','Тесты']
  header.header
    .logo IT
      span NEWS
    ul.header__menu
      each item in items
        li=item
    div.header__navbar
      ul.header__nav
        li.header__link
          a(href="#" target="_blank") Profile
        li.header__link
          a(href="#" target="_blank") news
        li.header__link
          a(href="#" target="_blank") friends
        li.header__link
          a(href="#" target="_blank") groups
        li.header__link
          a(href="#" target="_blank") messages
        li.header__link
          a(href="#" target="_blank") comments
        li.header__link
          a(href="#" target="_blank") cards
        li.header__link
          a(href="#" target="_blank") settings
        li.header__link
          a(href="#" target="_blank") log out
  .promohead This is my work. New version 1.2.0. {{status}}
  main 
    appaside(:user="$store.getters.user", :friends="$store.getters.friends")
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