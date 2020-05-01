<template lang="pug">
aside.aside 
  div.profile(:data-id="user.login+'_'+user.id")
    h4.profile__header  {{user.name}}
    p.profile__login 
      a(:href="link" target="_blank") {{user.login}}
    p.profile__info {{user.age}}, {{user.country}} {{user.city}}
    p.profile__info {{user.email}}
 
</template>
<script>
export default {
  data() {
    return {
      user: {
        login:"IvanShavliuga",
        link:"https://github.com/IvanShavliuga",
        email:"iva.drakon.nov@gmail.com",
        name:"Ivan Shavliuga",
        age:31,
        city:"Novopolotsk",
        country:"Belarus",
        id:0      
      }    
    }  
  }
}
</script>