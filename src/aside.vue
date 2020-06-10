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
  div.cards
    ul.cards__list
      li(v-for="(crd,k) in cards" :key="k").cards__item 
        div.cards__block
          h3.cards__title {{crd.header}}
          div.cards__image
            i.fas.fa-laptop-code.icon.icon__cards
          p.cards__text {{crd.body}}
          .cards__link 
            a(href="#") read more
          p.cards__date
            i.fa.fa-clock.icon.icon__watch 
            span {{crd.date}}
            span.cards__status in process 
  div.groups
    ul.groups__list
      li(v-for="(grp,k) in groups" :key="k").groups__item
        h3.groups__name(@click="selectgroup(grp.id)") 
          i(v-if="iduser===grp.idAdmin").fa.fa-user-secret.icon.icon__admin
          i(v-else).far.fa-newspaper.icon.icon__group
          span 
            router-link(to="/groupview") {{grp.name}}
  div.friends
    ul.friends__list
      li(v-for="(f,k) in friends" :key="k").friends__item 
        div.friends__circle 
          div.friends__icon.fa.fa-user
          i(v-if="f.gender=='men'").friends__gender.fa.fa-mars.icon.icon__men
          i(v-if="f.gender=='women'").friends__gender.fa.fa-venus.icon.icon__women 
        h3.friends__name
          span {{f.name}}
        h4.friends__login 
          i.fa.fa-at.icon.icon__login
          span {{f.login}} 
        div.friends__spec {{f.spec}}
        div.friends__link
          a(href="#") read more
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
    },
    cards: {
      type:Array,
      required:true    
    },
    groups: {
      type: Array,
      required:true    
    },
    iduser: {
      type: Number,
      required:true    
    }
  },
  methods: {
    selectgroup(id) {
      this.$store.dispatch("selectgroup",id);    
    }  
  }
}
</script>