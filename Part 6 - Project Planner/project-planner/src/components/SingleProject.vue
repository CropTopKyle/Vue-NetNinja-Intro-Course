<template>
  <div class="project">
    <div class="actions">
      <h3 @click="handleDetailsToggle">{{ project.title }}</h3>
    </div>
    <div
      v-if="toggleDetails"
      class="details">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        toggleDetails: false,
      }
    },
    props: ['project'],
    methods: {
      handleDetailsToggle() {
        this.toggleDetails = !this.toggleDetails
      },
    },
  }
</script>

<style>
  .project {
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
    border-left: 10px solid #e90074;
    user-select: none;
  }

  h3 {
    cursor: pointer;
  }
</style>
