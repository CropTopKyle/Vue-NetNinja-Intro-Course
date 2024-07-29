<template>
  <h1>Post Details</h1>
  <div v-if="errorMessage">
    <h3>{{ errorMessage }}</h3>
  </div>
  <div
    v-if="singlePost"
    class="post">
    <h3>{{ singlePost.title }}</h3>
    <p class="pre">{{ singlePost.body }}</p>
  </div>
  <div v-else><LoadingSpinner /></div>
  <router-link :to="{ name: 'home' }">Return Home</router-link>
</template>

<script>
  import getSinglePost from '@/composables/getSinglePost'
  import LoadingSpinner from './LoadingSpinner.vue'
  import { useRoute } from 'vue-router'

  export default {
    props: ['id'],
    components: { LoadingSpinner },
    setup(props) {
      const route = useRoute()
      console.log(route)

      const { singlePost, errorMessage, loadSinglePost } = getSinglePost(
        route.params.id
      )

      loadSinglePost()

      return { singlePost, errorMessage }
    },
  }
</script>

<style>
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }

  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }

  .pre {
    white-space: pre-wrap;
  }
</style>
