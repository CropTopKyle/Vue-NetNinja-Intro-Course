<template>
  <h1>Meet the Recruiters</h1>
  <div
    class="recruiters"
    v-for="recruiter in recruiters"
    :key="recruiter.id">
    <router-link
      :to="{
        name: 'RecruiterDetails',
        params: {
          id: recruiter.id,
        },
      }">
      <h2>{{ recruiter.name }}</h2>
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        recruiters: [
          { name: 'Romanos Hanna', experience: 5, id: 1 },
          { name: 'Paul Annette', experience: 2, id: 2 },
          { name: 'Augusta Veronika', experience: 8, id: 3 },
          { name: 'Otto Kristiane', experience: 1, id: 4 },
        ],
      }
    },
  }
</script>

<style>
  .recruiters h2 {
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
  }

  .recruiters h2:hover {
    background: #ddd;
  }

  .recruiters a {
    text-decoration: none;
  }
</style>
