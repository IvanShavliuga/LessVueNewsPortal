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
      appuser(:user="$store.getters.user")
      appcode(v-for="(c,k) in $store.getters.codes" :code="c", :key="k+100")   
      appalert(:alert="$store.getters.alert", :users="$store.getters.users")
      apparticle(v-for="(p,key) in $store.getters.postsAll" :key="key" :post="p") 
  appfooter
</template>
<script>
import header from './header';
import alert from './alert';
import article from './article';
import aside from './aside';
import footer from './footer';
import code from './code';
import user from './user';
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
    appalert:alert,
    apparticle:article,  
    appaside:aside,
    appfooter:footer,
    appcode:code,
    appuser:user
  }
}
</script>
<style>
.color {
  color: #98dba0;
  font-size: 100px;
}
</style>