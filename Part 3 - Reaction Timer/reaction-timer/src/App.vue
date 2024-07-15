<template>
  <h1>Reaction Timer Game</h1>
  <h3>Instructions</h3>
  <p>
    Here's a simple reaction timer game: Click the "Start" button to begin. Wait
    for a box to appear on the screen - it will show up at a random time. As
    soon as you see the box, click it as fast as you can. The game will show you
    how quickly you reacted. To play again, just hit the "Retry" button. Try to
    beat your best time!
  </p>
  <button
    v-show="showStartButton"
    @click="startGame">
    Start
  </button>
  <LoadingNote v-show="isLoading" />
  <ClickBlock
    v-if="isPlaying"
    @click="stopGame" />
  <ResultsDetails
    v-if="showResults"
    :reactionTime="reactionTime" />
  <button
    @click="startGame"
    v-show="showRetryButton"
    class="retry-button">
    Retry
  </button>
</template>

<script>
  import ClickBlock from './components/ClickBlock.vue'
  import ResultsDetails from './components/ResultDetails.vue'
  import LoadingNote from './components/LoadingNote.vue'

  export default {
    name: 'App',
    components: { ClickBlock, ResultsDetails, LoadingNote },
    data() {
      return {
        isPlaying: false,
        delay: null,
        startTime: null,
        endTime: null,
        reactionTime: null,
        showResults: false,
        showStartButton: true,
        showRetryButton: false,
        isLoading: false,
      }
    },
    methods: {
      startGame() {
        this.showStartButton = false
        this.showRetryButton = false
        this.isLoading = true
        this.showResults = false
        this.delay = 2000 + Math.random() * 5000
        setTimeout(() => {
          this.isLoading = false
          this.isPlaying = true
        }, this.delay)
        console.log(this.delay)
        this.startTime = Date.now()
      },

      stopGame() {
        this.endTime = Date.now()
        this.reactionTime = (
          this.endTime -
          this.startTime -
          this.delay
        ).toFixed(2)
        this.isPlaying = false
        this.showResults = true
        this.showRetryButton = true
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
</style>
