<template lang="pug">
footer  
  div.copyright 
    div &copy; 2020 Это портфолио Ивана Иванова (Шавлюги) 
      span Использую flexbox и          
        span LESS,          
        span Vue.js, 
        span Webpack,
        span Pug.
  div.promo
    ul.promo__list
      li.promo__item
        a(href="https://codepen.io/ivanshavliuga/pen/WYzWEK")
          i.fab.fa-codepen.icon.icon__links 
          span version 1.0.0 
      li.promo__item
        a(href="https://codepen.io/ivanshavliuga/pen/BaooJdO")
          i.fab.fa-codepen.icon.icon__links 
          span version 1.2.0 
      li.promo__item
        a(href="https://github.com/IvanShavliuga/LessVueNewsPortal")
          i.fas.fa-code-branch.icon.icon__links
          span current version 1.3.2
      li.promo__item
        a(href="https://github.com/IvanShavliuga")
          i.fab.fa-github.icon.icon__links
          span github profile
      li.promo__item
        a(href="https://ivanshavliuga.github.io/resume/index.html")
          i.fa.fa-address-card.icon.icon__links
          span resume
      li.promo__item
        a(href="https://t.me/vuejscodesru")
          i.fab.fa-telegram-plane.icon.icon__links
          span Vue.js коды, вебинары, лекции 
</template>