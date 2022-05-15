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
      const article = await $content('articles', params.title).fetch()

      return { article }
    }
  }
</script>
<style scoped>
.container{
  /* position: absolute; */
  display: flex;
  justify-content: center;
  align-content: center;
}
.article-container{
  max-width: 600px;
  font-size: 20px;
}
</style>
