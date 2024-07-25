import { ref } from 'vue'

const getSinglePost = (id) => {
  const singlePost = ref(null)
  const errorMessage = ref(null)

  const loadSinglePost = async () => {
    try {
      let response = await fetch('http://localhost:3000/posts/' + id)
      if (!response.ok) {
        throw Error('Post fetch failed.')
      }
      singlePost.value = await response.json()
    } catch (err) {
      errorMessage.value = err.message
    }
  }
  return { singlePost, errorMessage, loadSinglePost }
}

export default getSinglePost
