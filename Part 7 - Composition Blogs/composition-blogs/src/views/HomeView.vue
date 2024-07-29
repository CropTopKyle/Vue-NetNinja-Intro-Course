<template>
  <div class="home">
    <h1>Composition Blogs</h1>
    <div v-if="errorMessage">{{ errorMessage }}</div>
    <button @click="togglePosts = !togglePosts">Toggle Posts</button>
    <div v-if="posts.length">
      <PostList
        v-if="togglePosts"
        :posts="posts" />
    </div>
    <div v-else>
      <LoadingSpinner />
    </div>
    <TagCloud />
  </div>
</template>

<script>
  import LoadingSpinner from '@/components/LoadingSpinner.vue'
  import PostList from '@/components/PostList.vue'
  import getPosts from '@/composables/getPosts'
  import { ref } from 'vue'

  export default {
    name: 'HomeView',
    components: { PostList, LoadingSpinner },
    setup() {
      const togglePosts = ref(true)

      const { posts, errorMessage, loadPosts } = getPosts()
      loadPosts()

      return { posts, togglePosts, errorMessage }
    },
  }
</script>

<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>
