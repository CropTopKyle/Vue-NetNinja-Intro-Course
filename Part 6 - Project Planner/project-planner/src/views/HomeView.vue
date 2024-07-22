<template>
  <div class="home">
    <div v-if="projects.length">
      <div
        v-for="project in projects"
        :key="project.id">
        <SingleProject
          :projects="project"
          @delete="handleDelete"
          @updateStatus="handleStatusUpdate" />
      </div>
    </div>
  </div>
</template>

<script>
  import SingleProject from '@/components/SingleProject.vue'

  export default {
    name: 'HomeView',
    components: { SingleProject },
    methods: {
      handleDelete(id) {
        this.projects = this.projects.filter((project) => {
          return project.id !== id
        })
      },
      handleStatusUpdate(id) {
        let p = this.projects.find((project) => {
          return project.id == id
        })
        p.complete = !p.complete
      },
    },
    data() {
      return {
        projects: [],
      }
    },
    mounted() {
      fetch('http://localhost:3000/projects')
        .then((res) => res.json())
        .then((data) => (this.projects = data))
        .catch((error) => console.log(error.message))
    },
  }
</script>
