<template>
  <div>
    <h1>{{ title }}</h1>
  </div>

  <div v-if="showModal">
    <Modal
      theme=""
      @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Modal 1</h1>
      <p>Modal 1 Text</p>
    </Modal>
  </div>

  <div v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <h1>Modal 2</h1>
      <p>Modal 2 Text</p>
    </Modal>
  </div>

  <button @click="toggleModal">Open Modal 1</button>
  <button @click="toggleModalTwo">Open Modal 2</button>
</template>

<script>
  import Modal from './components/Modal'

  export default {
    name: 'App',
    components: { Modal },
    data() {
      return {
        title: 'Website Title',
        showModal: false,
        showModalTwo: false,
      }
    },
    methods: {
      toggleModal() {
        this.showModal = !this.showModal
      },
      toggleModalTwo() {
        this.showModalTwo = !this.showModalTwo
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
    margin-top: 60px;
  }
  h1 {
    border-bottom: 1px solid #ddd;
    display: inline-block;
    padding-bottom: 10px;
  }
  button {
    background: #bbb;
    padding: 10px;
    border: none;
    border-radius: 4px;
    margin: 10px;
    font-size: 16px;
    color: #333;
  }
</style>
