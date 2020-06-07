<template lang="pug">
div.code
  div(v-for="(src,key) in code.src").code__list
    article(v-if="src==='codepen'", :data-id="code.id").code__codepen
      p(data-height="280",
        data-width="300",
        data-theme-id="light",
        data-default-tab="result",
        data-user="ivanshavliuga",
        data-slug-hash="WYzWEK",
        style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;",
        data-pen-title="ITNEWS. ").codepen
        span See the Pen 
          a(:href="code.link[key]") ITNEWS
          a(:href="code.profile[key]") by Ivan Shavliuga 
          a(href="https://codepen.io") CodePen 
      p.code__codepen__block
        h3.code__title 
      appstaticpost(:like="code.like" :views="code.views" :comments="code.comments" :repost="code.repost")
    article(v-else-if="src==='github'", :data-id="code.id").code__github__block
      p.code__github
        div.code__github__image 
          a(:href="code.link[key]", title)
            i.fab.fa-github.icon.icon__code
        h3.code__title {{code.title}} 
        p.code__profile {{code.profile[key]}}
      appstaticpost(:like="code.like" :views="code.views" :comments="code.comments" :repost="code.repost")
    article(v-else, :data-id="code.id").code__otherlink
      p.code__linkcode
        div.code__linkcode__image
          a(:href="code.link[key]")
            i.fas.fa-code.icon.icon__code
        h3.code__title {{code.title}}
        p.code__profile {{code.profile[key]}} 
      appstaticpost(:like="code.like" :views="code.views" :comments="code.comments" :repost="code.repost")
</template>
<script>
import staticpost from './staticpost';
export default {
  props: {
      code: {
        type: Object,
        required:true      
      }  
  },
  components: {
    appstaticpost:staticpost  
  }

}

</script>