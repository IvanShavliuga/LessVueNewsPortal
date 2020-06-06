<template lang="pug">
- var menuitems = [{link:"/",text:"Home"},{link:"/alerts",text:"Alerts"},{link:"/codes",text:"Codes"},{link:"/users",text:"Users"},{link:"/books",text:"Books"}]
- var profileitems = [{link:"/profile",text:"profile"},{link:"messages", text:"messages"},{link:"commentsuser",text:"comments"},{link:"postsuser",text:"posts"}, {link:"followers",text:"followers"},{link:"groupsuser",text:"groups"},{link:"booksuser",text:"books"},{link:"codesuser",text:"codes"},{link:"cardsuser",text:"cards"},{link:"settings",text:"settings"},{link:"logout",text:"log out"}]
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
    each item in menuitems
      li
        router-link(to=item.link)=item.text
  div.header__navbar
    ul.header__nav
      each item in profileitems
        li.header__link
          router-link(to=item.link).header__link__text=item.text
</template>