<template>
  <div class="container">
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <div class="link-container">
          <NuxtLink :to="{ name: 'slug', params: { slug: article.slug } }">
            <!-- <NuxtLink :to="{ name: 'post-slug', params: { slug: article.slug } }"> -->
            <div>
              <h3>{{ article.title }}</h3>
            </div>
            <br />
          </NuxtLink>
          <p class="date-label">{{ formatDate(article.updatedAt) }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content("articles")
      .where({ publish: !false })
      .fetch();

    return { articles };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>
<style lang='scss' scoped>
.container {
  /* position: absolute; */
  display: flex;
  justify-content: center;
  align-content: center;
  /* font-family: 'Source Serif Pro', serif; */
}
a:link {
  color: black;
  background-color: transparent;
  /* text-decoration: none; */
}
a:visited {
  color: grey;
  background-color: transparent;
  /* text-decoration: none; */
}
.link-container {
  display: flex;
  .date-label {
    margin: 0 0 20px 10px;
    padding: 5px 5px 5px 5px;
    background-color: rgb(179, 226, 253);
    color: rgb(0, 0, 0);
    text-decoration: none;
    border-radius: 10px;
    font-size: 14px;
    // margin-bottom: 15px;
  }
}
li::marker {
  color: rgb(0, 60, 255); /* Change the color */
}
</style>
