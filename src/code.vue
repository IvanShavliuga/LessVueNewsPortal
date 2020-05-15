<template lang="pug">
article.code
  div(v-if="code.src==='codepen'", :data-id="code.id").code__codepen
    p(data-height="265",
      data-theme-id="light",
      data-default-tab="result",
      data-user="ivanshavliuga",
      data-slug-hash="WYzWEK",
      style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;",
      data-pen-title="ITNEWS. ").codepen
      span See the Pen 
        a(href="https://codepen.io/ivanshavliuga/pen/WYzWEK") ITNEWS
        a(href="https://codepen.io/ivanshavliuga") by Ivan Shavliuga 
        a(href="https://codepen.io") CodePen 
  div(v-if="code.src==='github'", :data-id="code.id").code__github
  div(v-else, :data-id="code.id").code__otherlink
</template>
<script>
export default {
  data() {
    return {
      code: {
        src:'codepen',
        id:0,
        link:'https://codepen.io/ivanshavliuga/pen/WYzWEK'      
      }
      
      
    }  
  }

}

</script>