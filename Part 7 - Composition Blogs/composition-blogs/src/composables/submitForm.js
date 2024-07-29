import { ref } from 'vue'
import { useRouter } from 'vue-router'

const submitForm = () => {
  const errorMessage = ref(null)
  const router = useRouter()

  const postFormData = async (formData) => {
    try {
      let response = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw Error(
          'We have encountered an error while trying to post the blog data!'
        )
      }
    } catch (err) {
      errorMessage.value = err.message
    }
  }

  return { errorMessage, postFormData }
}

export default submitForm
