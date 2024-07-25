import { ref } from 'vue'

const getUsers = async () => {
  const users = ref([])
  const errorMessage = ref(null)
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
  return { posts, errorMessage, getUsers }
}

export default getUsers
