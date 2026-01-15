<script setup lang="ts">
  import {BApp} from 'bootstrap-vue-next'
  import NavBar from './core/NavBar.vue'
  import {useStorageStore} from "./stores/storage"

  const storage = useStorageStore();
</script>

<template>
  <BApp>
    <NavBar />
    
    Chosen storage method is: {{ storage.chosenProvider }}
  </BApp>

</template>

<style scoped></style>
