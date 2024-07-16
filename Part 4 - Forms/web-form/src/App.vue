<template>
  <h1>Useability Form</h1>
  <SignupForm />
</template>

<script>
  import SignupForm from './components/SignupForm.vue'
  export default {
    name: 'App',
    components: { SignupForm },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  body {
    margin: 0px;
    padding: 0px;
    background: #eee;
  }
</style>
