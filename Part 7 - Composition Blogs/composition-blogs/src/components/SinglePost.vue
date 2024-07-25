<template>
  <div class="post">
    <router-link
      :to="{
        name: 'details',
        params: {
          id: post.id,
        },
      }"
      ><h3>{{ post.title }}</h3></router-link
    >
    <p>{{ post.body }}</p>
    <span
      v-for="tag in post.tags"
      :key="tag">
      #{{ tag }}
    </span>
  </div>
</template>

<script>
  import { onMounted, onUnmounted } from 'vue'

  export default {
    props: ['post'],
    setup(props) {
      onMounted(() => {
        console.log('Components mounted')
      })

      onUnmounted(() => {
        console.log('Component unmounted')
      })
    },
  }
</script>

<style></style>
