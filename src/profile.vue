<template lang="pug">
section.page
  div.profilepage(:data-id="user.login+'_'+user.id") 
    h4.profilepage__header  {{user.name}}
    p.profilepage__login 
      i.fa.fa-id-badge.icon.icon__user 
      a(:href="user.link" target="_blank") {{user.login}}
    p.profilepage__info {{user.age}},  {{user.city}}
    p.profilepage__info {{user.spec}}
    p.profilepage__info Friends: {{user.friends.length}}
    p.profilepage__skills
      ul.profilepage__skills__list
        li.profilepage__skills__item(v-for="(s,k) in user.skills" :key="k+100") 
          p {{s}} 
    p.profilepage__contacts
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
      user:{}    
    }  
  },
  components: {
    appuser:user
  },
  created() {
    this.user = this.$store.getters.user;  
  }
}  
</script>