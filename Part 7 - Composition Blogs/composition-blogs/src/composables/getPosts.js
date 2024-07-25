import { ref } from 'vue'

const getPosts = () => {
  const posts = ref([])
  const errorMessage = ref(null)

  const loadPosts = async () => {
    try {
      let response = await fetch('http://localhost:3000/posts')
      if (!response.ok) {
        throw Error('Post fetch failed.')
      }
      posts.value = await response.json()
    } catch (err) {
      errorMessage.value = err.message
    }
  }
  return { posts, errorMessage, loadPosts }
}

export default getPosts
