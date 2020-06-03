<template lang="pug">
div.user(:data-id="user.login+'_'+user.id")
  h4.user__header  {{user.name}}
  p.user__login 
    i.fa.fa-id-badge.icon.icon__user 
    a(:href="user.link" target="_blank") {{user.login}}
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
</template>
<script>
export default {
  props: {
    user: {
      type: Object,
      required: true   
    }  
  }
}
</script>