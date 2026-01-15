<script setup lang="ts">
import { BApp } from 'bootstrap-vue-next'
import NavBar from './core/NavBar.vue'
</script>

<template>
  <BApp>
    <NavBar />
    
    <main>
      <RouterView />
    </main>
  </BApp>

</template>

<style scoped></style>
