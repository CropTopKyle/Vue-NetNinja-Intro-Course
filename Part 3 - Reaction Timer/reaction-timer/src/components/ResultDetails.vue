<template>
  <div>
    <h1>Results</h1>
    <h3>Reaction Time: {{ this.reactionTime }}ms</h3>
  </div>
</template>

<script>
  export default {
    props: ['reactionTime'],
  }
</script>

<style></style>
