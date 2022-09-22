<template>
  
</template>

<script>
import { toRefs } from 'vue'
export default {
  setup() {
    const obj = {
      name: 'zhonglh',
      age: 24,
      gender: 0
    }

    const state = toRefs(obj)

    console.log(state)

    return { state }
  }
}
</script>

<style>

</style>