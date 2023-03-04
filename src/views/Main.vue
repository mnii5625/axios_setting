<template>
  <div>
    <button @click="axiosTest()">TEST</button>
  </div>
</template>

<script setup>
  import axios from 'axios';

  const axiosTest = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
      console.log('성공!')
      console.log(response)
    })
  }
</script>

<style scoped>

</style>