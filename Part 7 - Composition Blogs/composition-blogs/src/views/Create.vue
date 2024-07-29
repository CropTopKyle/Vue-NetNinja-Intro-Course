<template>
  <div v-if="errorMessage">
    <h3>{{ errorMessage }}</h3>
  </div>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <h2>Create a new blog</h2>
      <label>Title:</label>
      <input
        type="text"
        v-model="title"
        required />
      <label>Body:</label>
      <textarea
        v-model="body"
        required></textarea>
      <label>Tags:</label>
      <input
        v-model="tag"
        type="text"
        @keydown.enter.prevent="addTag" />
      <div
        v-for="tag in tags"
        :key="tag"
        class="pill">
        <p>#{{ tag }}</p>
      </div>
      <button class="form-button">Submit</button>
    </form>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import submitForm from '@/composables/submitForm'
  import { useRouter } from 'vue-router'

  export default {
    setup() {
      const title = ref('')
      const body = ref('')
      const tag = ref('')
      const tags = ref([])
      const { postFormData, errorMessage } = submitForm()
      const router = useRouter()

      const addTag = () => {
        if (!tags.value.includes(tag.value)) {
          tag.value = tag.value.replace(/\s/g, '') //Removes all whitespace
          tags.value.push(tag.value)
        }
        tag.value = ''
      }

      const handleSubmit = async () => {
        const formData = {
          title: title.value,
          body: body.value,
          tags: tags.value,
        }

        try {
          await postFormData(formData)
          router.push({ name: 'home' })
        } catch (errorMessage) {
          console.log(errorMessage.value)
        }
      }

      return {
        title,
        body,
        tag,
        tags,
        addTag,
        submitForm,
        handleSubmit,
        errorMessage,
        addTag,
      }
    },
  }
</script>

<style>
  form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  input,
  textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #818181;
    border-radius: 5px;
  }
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: black;
    margin-bottom: 10px;
  }
  .form-button {
    display: block;
    margin-top: 30px;
    background: #148dff;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 20px;
  }

  button:hover {
    background: #0f70ca;
  }
  .pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 20px;
    font-size: 14px;
  }
</style>
