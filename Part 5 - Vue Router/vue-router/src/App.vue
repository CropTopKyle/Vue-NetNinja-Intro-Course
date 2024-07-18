<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link> |
    <router-link :to="{ name: 'Recruiters' }">Recruiters</router-link>
  </nav>

  <button @click="handleRedirect">Redirect</button>
  <button @click="handlePageBack">Go Back</button>
  <button @click="handlePageForward">Go Forward</button>

  <router-view />
</template>

<script>
  export default {
    methods: {
      handleRedirect() {
        console.log('Redirect button was pressed!')
        this.$router.push({ name: 'Home' })
      },
      handlePageBack() {
        console.log('Back button was pressed!')
        this.$router.go(-1)
      },
      handlePageForward() {
        console.log('Forward button was pressed!')
        this.$router.go(+1)
      },
    },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }

  button {
    margin: 0 10px;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background: rgb(192, 192, 192);
  }
</style>
