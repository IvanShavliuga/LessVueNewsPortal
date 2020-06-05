<template lang="pug">
- var items = ['Главная','Наука','Технологии','Код', "Вебинары", "Группы"]
header.header
  div.header__banner 
    h1.header__title
      .logo IT
        span NEWS
    p.header__subtitle Новости высоких технологий и науки
  ul.header__menu
    li
      i.fab.fa-less.icon.icon__tech 
      i.fab.fa-vuejs.icon.icon__tech
    each item in items
      li=item
  div.header__navbar
    ul.header__nav
      li.header__link
        a(href="#" target="_blank") Profile
      li.header__link
        a(href="#" target="_blank") 
          router-link(to="/") news
      li.header__link
        a(href="#" target="_blank") 
          router-link(to="/users") users
      li.header__link
        a(href="#" target="_blank") groups
      li.header__link
        a(href="#" target="_blank") message
      li.header__link
        a(href="#" target="_blank") comments
      li.header__link
        a(href="#" target="_blank") cards
      li.header__link
        a(href="#" target="_blank") settings
      li.header__link 
        a(href="#" target="_blank") log out
</template>