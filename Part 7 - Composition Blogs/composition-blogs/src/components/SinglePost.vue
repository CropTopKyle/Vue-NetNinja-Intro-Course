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

<style>
  .post {
    margin: 0 40px 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #e7e7e7;
  }

  .post h3 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: blueviolet;
    margin-bottom: 10px;
    max-width: 400px;
  }
</style>
