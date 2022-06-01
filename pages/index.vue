<template>
  <div class="container">
      <div class="link-container" v-for="article of articles" :key="article.slug">
          <NuxtLink :to="{ name: 'slug', params: { slug: article.slug } }">
              <div>{{ article.title }}</div>
          </NuxtLink>
      </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content("articles")
      .where({'publish' : true})
      .sortBy('updatedAt', 'desc')
      .fetch();

    return { articles };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      console.log(date);
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>
<style lang='scss' scoped>
body{
  background-color: #fffff8;
  box-sizing:border-box;
  // display: flex;
}
.container {
  position: absolute;
  font-family : "Times New Roman";
  display: flex;
  width: 100vw;
  // justify-content: center;
  // align-content: center;

  flex-direction: column;
}
a:link {
  color: #111111;
  background-color: transparent;
  /* text-decoration: none; */
}
a:visited {
  color: grey;
  background-color: transparent;
  /* text-decoration: none; */
}
.link-container{
  // position: relative;
  padding: 20px 0 0 0;
  max-width: 600px;
}
</style>
