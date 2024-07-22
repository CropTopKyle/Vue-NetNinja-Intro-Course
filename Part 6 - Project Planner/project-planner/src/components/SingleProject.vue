<template>
  <div
    class="project"
    :class="{ complete: projects.complete }">
    <div class="actions">
      <h3 @click="handleDetailsToggle">{{ projects.title }}</h3>
      <div class="icons">
        <span class="material-icons">edit</span>
        <span
          class="material-icons"
          @click="handleDeleteProject"
          >delete</span
        >
        <span
          class="material-icons tick"
          @click="handleTaskStatusToggle"
          >done</span
        >
      </div>
    </div>
    <div
      v-if="toggleDetails"
      class="details">
      <p>{{ projects.details }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['projects'],
    data() {
      return {
        toggleDetails: false,
        uri: 'http://localhost:3000/projects/' + this.projects.id,
      }
    },
    methods: {
      handleDetailsToggle() {
        this.toggleDetails = !this.toggleDetails
      },

      handleDeleteProject() {
        fetch(this.uri, { method: 'DELETE' })
          .then(() => this.$emit('delete', this.projects.id))
          .catch((error) => console.log(error.message))
      },

      handleTaskStatusToggle() {
        fetch(this.uri, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ complete: !this.projects.complete }),
        })
          .then(() => {
            this.$emit('updateStatus', this.projects.id)
          })
          .catch((error) => console.error(error.message))
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

  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .material-icons {
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
  }

  .material-icons:hover {
    color: #777;
  }

  .project.complete {
    border-left: 10px solid #00ce89;
  }

  .project.complete .tick {
    color: #00ce89;
  }
</style>
