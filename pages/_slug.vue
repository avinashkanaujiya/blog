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
<style lang='scss'>
.container{
  /* position: absolute; */
  display: flex;
  justify-content: center;
  align-content: center;
  /* font-family: 'Roboto', sans-serif; */
  font-weight: 400;
}
.article-container{
  max-width: 600px;
  font-size: 20px;
  text-align: justify;
  .nuxt-content {
    ul{
      margin: 20px 0 20px 60px ;
    }
  }
}
</style>
