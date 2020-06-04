<template lang="pug">
div#appindex(data-id="appindex")
  appheader
  .promohead
    span.promohead__time {{time.hour}} : {{time.minute}} : {{time.second}} 
    span.promohead__weather
      i.fas.fa-sun.icon.icon__weather 
      span.promohead__temperature 13 &#8451;
    span.promohead__news {{news}}
  main    
    appaside(:user="$store.getters.user", 
      :friends="$store.getters.friends", 
      :cards="$store.getters.cards", 
      :groups="$store.getters.groupsUser"
      :iduser="$store.getters.loginid")   
    .content
      appbooks(:books="$store.getters.books")
      appusers(:users="$store.getters.users")
      appcodes(:codes="$store.getters.codes")
      appalerts(:alerts="[$store.getters.alert]", :users="$store.getters.users")
      appposts(:posts="$store.getters.postsAll")
  appfooter
</template>
<script>
import header from './header';
import alerts from './alerts';
import posts from './posts';
import aside from './aside';
import footer from './footer';
import codes from './codes';
import users from './users';
import books from './books';
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
    appheader:header,
    appalerts:alerts,
    appposts:posts,  
    appaside:aside,
    appfooter:footer,
    appcodes:codes,
    appusers:users,
    appbooks:books
  }
}
</script>
<style>
.color {
  color: #98dba0;
  font-size: 100px;
}
</style>