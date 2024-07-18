<template>
  <h1>Job Details Page</h1>
  <p>The job id is {{ $route.params.id }}</p>

  <div>
    <h1>{{ $route.id }}</h1>
  </div>
</template>

<script>
  export default {
    props: ['id'],
    data() {
      return {}
    },
  }
</script>

<style></style>
