<template>
<div class="container">
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <!-- <NuxtLink :to="{ name: 'post-title', params: { title: article.title } }"> -->
        <NuxtLink :to="{ name: 'post-slug', params: { slug: article.slug } }">
          <div>
            <h3>{{ article.title }}</h3>
          </div>
          <br>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content}) {
      const articles = await $content('articles').fetch()

      return { articles }
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
</style>
