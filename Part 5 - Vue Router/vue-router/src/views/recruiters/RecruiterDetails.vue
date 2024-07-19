<template>
  <div v-if="recruiter">
    <h1>{{ recruiter.name }}</h1>
    <p>Years of Experience: {{ recruiter.experience }}</p>
  </div>
</template>

<script>
  export default {
    props: ['id'],
    data() {
      return {
        recruiter: null,
      }
    },

    mounted() {
      fetch('http://localhost:3000/recruiters/' + this.id)
        .then((res) => res.json())
        .then((data) => (this.recruiter = data))
        .catch((err) => console.log(err.message))
    },
  }
</script>

<style></style>
