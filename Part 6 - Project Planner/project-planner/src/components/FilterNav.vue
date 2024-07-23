<template>
  <nav class="filter-nav">
    <button
      :class="{ active: filterStatus === 'all' }"
      @click="updateFilter('all')">
      View All
    </button>
    <button
      :class="{ active: filterStatus === 'completed' }"
      @click="updateFilter('completed')">
      View Completed
    </button>
    <button
      :class="{ active: filterStatus === 'uncompleted' }"
      @click="updateFilter('uncompleted')">
      View Uncompleted
    </button>
  </nav>
</template>

<script>
  export default {
    props: ['filterStatus'],
    methods: {
      updateFilter(taskStatus) {
        this.$emit('filterChange', taskStatus)
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

  .filter-nav button.active {
    color: #555;
  }
</style>
