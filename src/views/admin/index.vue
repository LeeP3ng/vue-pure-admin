<script setup lang="ts">
import router from "@/router";

defineOptions({
  name: "Admin"
});
</script>

<template>
  <div>
    <el-button
      @click="
        router.push({
          name: 'Dashboard'
        })
      "
      >业务工作台</el-button
    >
  </div>
</template>

<style lang="scss" scoped></style>
