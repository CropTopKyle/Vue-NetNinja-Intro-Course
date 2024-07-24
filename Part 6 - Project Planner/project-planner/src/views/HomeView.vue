<template>
  <div class="home">
    <FilterNav
      @filterChange="filterStatus = $event"
      :filterStatus="filterStatus" />
    <div v-if="projects.length">
      <div
        v-for="project in filteredProjects"
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
  import FilterNav from '@/components/FilterNav.vue'
  import SingleProject from '@/components/SingleProject.vue'

  export default {
    name: 'HomeView',
    components: { SingleProject, FilterNav },
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
        filterStatus: 'all',
      }
    },
    mounted() {
      fetch('http://localhost:3000/projects')
        .then((res) => res.json())
        .then((data) => (this.projects = data))
        .catch((error) => console.log(error.message))
    },
    computed: {
      filteredProjects() {
        if (this.filterStatus === 'completed') {
          return this.projects.filter((project) => project.complete)
        }
        if (this.filterStatus === 'uncompleted') {
          return this.projects.filter((project) => !project.complete)
        }
        return this.projects
      },
    },
  }
</script>

<style>
  .filter-nav button {
    background: none;
    border: none;
    color: #bbb;
    outline: none;
    font-size: 12px;
    text-transform: uppercase;
    margin-right: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
  }
</style>
