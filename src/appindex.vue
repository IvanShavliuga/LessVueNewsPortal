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
  .promohead
    span.promohead__time {{time.hour}} : {{time.minute}} : {{time.second}} 
    span.promohead__weather
      i.fas.fa-sun.icon.icon__weather 
      span.promohead__temperature 13&#8451;
    span.promohead__news {{news}}
  main 
    appaside(:user="$store.getters.user", :friends="$store.getters.friends")
    .content
      apparticle(v-for="(p,key) in $store.getters.postsAll" :key="key" :post="p") 
  footer  Это портфолио Ивана Иванова (Шавлюги) Использую flexbox и LESS

</template>
<script>
import article from './article';
import aside from './aside';

export default {
  data() {
    return {
      status:"200 OK",
      news:"Скорый поезд придет ровно в 6 часов",
      time:{
        hour:0,
        minute:0,
        second:0
      },
    }  
  },
  methods: {
    now() {
      let d=new Date();
      this.time.hour=d.getHours();
      this.time.minute=d.getMinutes();
      this.time.second=d.getSeconds();
      this.rndnews();
      setTimeout(()=>{this.now()},1000);
    },
    rndnews() {
      let len = this.$store.getters.postsAll.length;
      let p = this.$store.getters.postsAll[Math.floor(Math.random()*len)];
      let u = this.$store.getters.users[p.userId];
      this.news="@" + u.login + ": " + p.title;    
    }
  },
  created:function(){ 
    this.now();  
    setTimeout(()=>{this.now()},1000);
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