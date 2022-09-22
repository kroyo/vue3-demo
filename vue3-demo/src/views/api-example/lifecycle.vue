<template>
  <div></div>
</template>

<script>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  unMounted,
} from "vue";
export default {
  name: "lifecycle",
  setup() {
    onBeforeMount(() => {
      // 在挂载前执行某些代码
    });

    onMounted(() => {
      // 在挂载后执行某些代码
    });

    onBeforeUpdate(() => {
      // 在更新前前执行某些代码
    });

    onUpdated(() => {
      // 在更新后执行某些代码
    });

    onBeforeUnmount(() => {
      // 在组件销毁前执行某些代码
    });

    unMounted(() => {
      // 在组件销毁后执行某些代码
    });

    return {};
  },
};
</script>

<style></style>
