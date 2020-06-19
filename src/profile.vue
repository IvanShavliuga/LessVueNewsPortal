<template lang="pug">
section.page
  div.profilepage(:data-id="user.login+'_'+user.id") 
    appalert( :alert="alert" :users="[user]")
    h4.profilepage__header  {{user.name}}
    p.profilepage__login 
      i.fa.fa-id-badge.icon.icon__user 
      a(:href="user.link" target="_blank") {{user.login}}
    p.profilepage__info {{user.age}},  {{user.city}}
    p.profilepage__info {{user.spec}}
    p.profilepage__contacts
      h4.profilepage__contacts__title Contacts:
      ul.profilepage__contacts__list
        li.profilepage__contacts__item(v-for="(c,k) in user.contacts" :key="k+200")
          p.profilepage__contacts__messenger {{c.messenger}}
          p.profilepage__contacts__contact {{c.contact}} 
    p.profilepage__skills
      h4.profilepage__skills__title Skills:
      ul.profilepage__skills__list
        li.profilepage__skills__item(v-for="(s,k) in user.skills" :key="k+100") 
          p {{s}} 
    p.profilepage__education
      h4.profilepage__education__title Eduction:
      ul.profilepage__education__list
        li.profilepage__education__item(v-for="(e,k) in user.education" :key="k+100")
          div.profilepage__education__line
            each elem in [1,2,3,4]
              span=elem 
          div.profilepage__education__block 
            p {{e.caption}}
            p {{e.desc}}
            p {{e.years}}
            p {{e.link}}
    p.profilepage__friends(v-if="user.friends.length>0")
      h4.profilepage__friends__title Friends: {{user.friends.length-1}}
      ul.profilepage__friends__list
        li.profilepage__friends__item(v-for="(f,k) in friends" :key="k")
          appuser( :user="f" :adduser="false")
    p.profilepage__friends(v-if="addfriends.length>0")
      h4.profilepage__friends__title Added to friends: {{addfriends.length}}
      ul.profilepage__friends__list
        li.profilepage__friends__item(v-for="(f,k) in addfriends" :key="k+300")
          appuser( :user="users[f.from]" :adduser="true")
    p.profilepage__groups
      h4.profilepage__groups__title Groups:
      ul.profilepage__groups__list
        li.profilepage__groups__item(v-for="(f,k) in groupsadmin" :key="k")
          appgroup( :group="f" :loginid="loginid" :user="user")    
</template>
<script>
import user from './user';
import group from './group';
import alert from './alert';
export default {
  data() {
    return {
      user:{},
      addfriends:[],
      users:[],
      friends:[],
      groupsadmin:[],
      systemmessages:[], 
      loginid:0,
      alert:{}    
    }  
  },
  components: {
    appuser:user,
    appgroup:group,
    appalert:alert
  },
  created() {
    this.user = this.$store.getters.user;
    this.users = this.$store.getters.users;
    this.friends = this.$store.getters.friends;
    this.addfriends = this.$store.getters.addfriends;
    this.groupsadmin = this.$store.getters.groupsAdmin;
    this.loginid = this.$store.getters.loginid;
    this.systemmessages = this.$store.getters.sysmessages;  
    this.alert = {
      header: this.systemmessages[0].title,
      body:this.systemmessages[0].body,
      status:`${(this.systemmessages[0].read)?('прочитано'):('не прочитано')}`,
      userId:this.systemmessages[0].to,
      read:this.systemmessages[0].read,
      date:"12.05.2020 14:54:36"       
    }
  }
}  
</script>