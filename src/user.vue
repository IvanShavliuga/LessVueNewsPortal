<template lang="pug">
div.user(:data-id="user.login+'_'+user.id")
  div.user__circle 
    div.user__icon.fa.fa-user
    i(v-if="user.gender=='men'").user__gender.fa.fa-mars.icon.icon__men
    i(v-if="user.gender=='women'").user__gender.fa.fa-venus.icon.icon__women 
  h4.user__header  {{user.name}}
  p.user__login 
    i.fa.fa-id-badge.icon.icon__user 
    router-link(:to="'/profile/'+user.id") {{user.login}}
  p.user__info {{user.age}},  {{user.city}}
  p.user__info {{user.spec}}
  p.user__info Friends: {{user.friends.length}}
  p.user__skills
    ul.user__skills__list
      li.user__skills__item(v-for="(s,k) in user.skills" :key="k+100") 
        p {{s}} 
  p.user__contacts
    ul.user__contacts__list
      li.user__contacts__item(v-for="(c,k) in user.contacts" :key="k+200")
        p.user__contacts__messenger {{c.messenger}}
        p.user__contacts__contact {{c.contact}}
  p.user__buttons
    button.user__add(v-if="adduser==true") Add to friends    
</template>
<script>
export default {
  props: {
    user: {
      type: Object,
      required: true   
    },
    adduser: {
      type: Boolean,
      required: true    
    } 
  }
}
</script>