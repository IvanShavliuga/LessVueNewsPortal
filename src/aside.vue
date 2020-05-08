<template lang="pug">
aside.aside 
  div.profile(:data-id="user.login+'_'+user.id")
    h4.profile__header  {{user.name}}
    p.profile__login 
      i.fa.fa-id-badge.icon.icon__user 
      a(:href="user.link" target="_blank") {{user.login}}
    p.profile__info {{user.age}},  {{user.city}}
    p.profile__info {{user.spec}}
  div.images
    ul.images__list
      li.images__circle 
        div.images__lamp &nbsp;
      li.images__circle 
        div.images__arrow &nbsp;
      li.images__circle 
        div.images__phone &nbsp;
  div.contacts
    ul.contacts__list
      li.contacts__item(v-for="(c,key) in user.contacts" :key="key")
        div.contacts__name 
          i(v-if="c.messenger=='phone'").fa.fa-phone.icon.icon__phone
          i(v-if="c.messenger=='email'").fa.fa-envelope.icon.icon__email
          i(v-if="c.messenger=='telegram'").fab.fa-telegram.icon.icon__telegram 
          span {{c.messenger}}
        div.contacts__contact {{c.contact}}   
  div.skills
    ul.skills__list
      li(v-for="(s,k) in user.skills" :key="k").skills__text {{s}} 
  div.friends
    ul.friends__list
      li(v-for="(f,k) in friends" :key="k").friends__item 
        div.friends__circle 
          div.friends__icon.fa.fa-user
          i(v-if="f.gender=='men'").friends__gender.fa.fa-mars.icon.icon__men
          i(v-if="f.gender=='women'").friends__gender.fa.fa-venus.icon.icon__women 
        div.friends__name
          span {{f.name}}
        div.friends__login @{{f.login}} 
        div.friends__spec {{f.spec}}  
</template>
<script>
export default {
  props: {
    user: {
      type: Object,
      required:true
    },  
    friends: {
      type:Array,
      required:true    
    }
  }
}
</script>