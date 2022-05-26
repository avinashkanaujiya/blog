<template>
  <div class="container">
    <article class="article-container">
      <nuxt-content :document="article" />
    </article>
  </div>
</template>
<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      return { article }
    }
  }
</script>
<style lang='scss' scoped>
body{
  background-color: #fffff8;
}
.container{
  /* position: absolute; */
  /* font-family: 'Roboto', sans-serif; */
  font-family : "Times New Roman";
    display: flex;
  justify-content: center;
  align-content: center;
  font-weight: 400;
  color: #111111;
}
.article-container{
  width: 700px;
  font-size: 16px;
  // text-align: justify;
  padding: 10px;
  line-height: 1.5rem;
  .nuxt-content {
    // ul{
    //   margin: 15px 0 15px 60px ;
    // }
    pre {
      white-space: pre-wrap; //css3
      white-space: moz-pre-wrap; //firefox
      white-space: -pre-wrap; //opera 4-6
      white-space: -o-pre-wrap; //opera 7
      word-wrap: break-word; //internet explorer
    }
    p{
      margin: 10px 0 10px 0;
      // text-indent: 40px;
    }
    table {
      overflow:"auto";
    }
  }
}
.nuxt-content-highlight {
  max-width: 600px;
}
</style>
