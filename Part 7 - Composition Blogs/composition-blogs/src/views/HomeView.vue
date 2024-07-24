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
    <div v-else><h2>Loading</h2></div>
  </div>
</template>

<script>
  import PostList from '@/components/PostList.vue'
  import { ref } from 'vue'

  export default {
    name: 'HomeView',
    components: { PostList },
    setup() {
      const posts = ref([])
      const users = ref([])
      const errorMessage = ref(null)
      const togglePosts = ref(true)

      const getUsers = async () => {
        try {
          let response = await fetch('http://localhost:3000/users')
          if (!response.ok) {
            throw Error('There was a problem fetching Users')
          }
          users.value = response.json()
        } catch (err) {
          errorMessage.value = err.message
          console.log(errorMessage.value)
        }
      }

      const getPosts = async () => {
        try {
          let response = await fetch('http://localhost:3000/posts')
          if (!response.ok) {
            throw Error('Post fetch failed.')
          }
          posts.value = await response.json()
        } catch (err) {
          errorMessage.value = err.message
          console.log(errorMessage.value)
        }
      }
      getPosts()
      getUsers()
      console.log(users.value)
      console.log(posts.value)
      return { posts, users, togglePosts, errorMessage }
    },
  }
</script>

<!-- Try block
Create variable that will hold the fetched data, set it equal to the fetch request.

check if the data was successfully fetched using an if statement on the response.ok. If true, throw Error('semi-detailed) error message.

if response is ok, it will pass the if check that only triggers if response is not ok.

set the value of the empty array to the response in json format (response.json). This is an asyn function so it needs an await.


Catch Block
pass an "err" parameter to the catch function.
set the error.message value equal to the err.message parameter data.

dont forget to trigger the fetch request by calling the function getData -->
