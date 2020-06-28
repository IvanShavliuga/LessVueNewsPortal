<template lang="pug">
article.book
  div.book__image
    i.fas.fa-book-reader.icon.icon__book
  h3.book__title {{book.title}} 
  p.book__author {{book.author}}
  p.book__desc {{book.desc}}
  p.book__catno(v-if="(book.cat == [undefined] ||book.cat == [] || book.cat == undefined||book.cat.length==0)")
    span нет категории
  p.book__cat(v-else)  
    ul.book__cat__list
      li.book__cat__item( v-for="(c,key) in book.cat", :key="key+300") {{c}}
  appstaticpost(:like="book.like" :views="book.views" :comments="book.comments" :repost="book.repost" :user="user"  type="book")
</template>
<script>
import staticpost from './staticpost';
export default {
  props: {
    book: {
      type: Object,
      required:true    
    },
    user: {
      type: Object,
      required:true  
    }  
  },
  components: {
    appstaticpost:staticpost  
  }
}
</script>