<template>
  <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input
      type="text"
      required
      v-model="title" />
    <label>Details:</label>
    <textarea
      required
      v-model="details"></textarea>
    <button>Update Project</button>
  </form>
</template>

<script>
  export default {
    props: ['id'],
    data() {
      return {
        title: '',
        details: '',
        uri: 'http://localhost:3000/projects/' + this.id,
      }
    },
    mounted() {
      fetch(this.uri)
        .then((res) => res.json())
        .then(
          (data) => ((this.title = data.title), (this.details = data.details))
        )
    },
    methods: {
      handleSubmit() {
        let project = {
          title: this.title,
          details: this.details,
        }
        fetch(this.uri, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(project),
        })
          .then(() => {
            this.$router.push('/')
          })
          .catch((error) => console.log(error))
      },
    },
  }
</script>

<style></style>
