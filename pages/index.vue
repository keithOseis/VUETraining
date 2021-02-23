<template>
  <div>
     <h1>My blog posts:</h1>
     <ul>
        <li v-for="article in articles" :key="article.title">
           <nuxt-link to="#">{{article.title}}</nuxt-link>
        </li>
     </ul>
  </div>
</template>
<script>
  export default {
    async asyncData ({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .only(['title', 'description', 'image', 'slug'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return articles
    }
  }
</script>