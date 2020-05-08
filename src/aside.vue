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
</template>
<script>
export default {
  props: {
    user: {
      type: Object,
      required:true
    }  
  }
}
</script>