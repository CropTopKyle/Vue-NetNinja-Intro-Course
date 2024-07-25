<template>
  <h1>Create a new blog!</h1>
  <div class="create">
    <form>
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
        v-on:keydown.enter.prevent="addTag" />
      <div
        v-for="tag in tags"
        :key="tag"
        class="pill">
        <p>#{{ tag }}</p>
      </div>
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    Setup() {
      const title = ref('')
      const body = ref('')
      const tag = ref('')
      const tags = ref([])

      const addTag = () => {
        if (!tags.value.includes(tag.value)) {
          tag.value = tag.value.replace(/\s/, '') //Removes all whitespace
          tags.value.push(tag.value)
        }
        tags.value('')
      }
      return { title, body, tag, addTag, tags }
    },
  }
</script>

<style></style>
