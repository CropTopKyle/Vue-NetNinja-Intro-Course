<template>
  <div class="block">Click Me!</div>
</template>

<script>
  export default {
    props: ['delay'],
  }
</script>

<style>
  .block {
    width: 800px;
    border-radius: 20px;
    background: rgba(119, 199, 0, 0.986);
    color: white;
    font-size: 50px;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
    cursor: pointer;
  }
</style>
