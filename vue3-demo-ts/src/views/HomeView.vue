<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <main class="container">
    <div class="image">
      <img src="../assets/logo.svg" class="logo" alt="Vite logo" />
    </div>
    <HelloWorld msg="Vite + Vue"/>
  </main>
</template>

<style lang="scss" scoped>
.container {
  text-align: center;
  .image {
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }
}
</style>
