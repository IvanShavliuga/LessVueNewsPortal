<template lang="pug">
section.page
  div.profilepage(:data-id="user.login+'_'+user.id") 
    h4.profilepage__header  {{user.name}}
    p.profilepage__login 
      i.fa.fa-id-badge.icon.icon__user 
      a(:href="user.link" target="_blank") {{user.login}}
    p.profilepage__info {{user.age}},  {{user.city}}
    p.profilepage__info {{user.spec}}
    p.profilepage__friends(v-if="user.friends.length>0")
      h4.profilepage__friends__title Friends: {{user.friends.length-1}}
      ul.profilepage__friends__list
        li.profilepage__friends__item(v-for="(f,k) in friends" :key="k")
          appuser( :user="f")
    p.profilepage__friends(v-if="addfriends.length>0")
      h4.profilepage__friends__title Added to friends: {{addfriends.length}}
      ul.profilepage__friends__list
        li.profilepage__friends__item(v-for="(f,k) in addfriends" :key="k+300")
          appuser( :user="users[f.from]")
    p.profilepage__skills
      h4.profilepage__skills__title Skills:
      ul.profilepage__skills__list
        li.profilepage__skills__item(v-for="(s,k) in user.skills" :key="k+100") 
          p {{s}} 
    p.profilepage__contacts
      h4.profilepage__contacts__title Contacts:
      ul.profilepage__contacts__list
        li.profilepage__contacts__item(v-for="(c,k) in user.contacts" :key="k+200")
          p.profilepage__contacts__messenger {{c.messenger}}
          p.profilepage__contacts__contact {{c.contact}} 
</template>
<script>
import user from './user';
export default {
  data() {
    return {
      user:{},
      addfriends:[],
      users:[],
      friends:[]    
    }  
  },
  components: {
    appuser:user
  },
  created() {
    this.user = this.$store.getters.user;
    this.users = this.$store.getters.users;
    this.friends = this.$store.getters.friends;
    this.addfriends = this.$store.getters.addfriends;  
  }
}  
</script>