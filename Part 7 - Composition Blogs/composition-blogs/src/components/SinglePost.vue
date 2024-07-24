<template>
  <div class="post">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
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
