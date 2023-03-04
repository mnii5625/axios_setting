<template>
  <div>
    <button @click="axiosTest()">AXIOS TEST</button>
    <button @click="storeTest()">STORE TEST</button>
    <button @click="storeSetTest()">STORE SET TEST</button>
  </div>
</template>

<script setup>
  import axios from 'axios';
  import { useStore } from 'vuex';
  import { ref } from "vue";

  const store = useStore();
  const index = ref(0);

  const axiosTest = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
      console.log('성공!')
      console.log(response)
    })
  }

  const storeTest = () => {
    console.log(store.state.auth.accessToken);
  }

  const storeSetTest = () => {
    store.commit('SET_ACCESS_TOKEN', index.value++);
  }
</script>

<style scoped>

</style>