<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";

defineOptions({
  name: "Dashboard"
});
</script>

<template>
  <div>
    <el-button
      @click="
        router.push({
          name: 'Step1'
        })
      "
      >go p1</el-button
    >
  </div>
</template>

<style lang="scss" scoped></style>
