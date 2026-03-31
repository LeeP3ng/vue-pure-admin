<script setup lang="ts">
import router from "@/router";

defineOptions({
  name: "Step1"
});
</script>

<template>
  <div>
    <el-button
      @click="
        router.push({
          name: 'Step2'
        })
      "
      >go p2</el-button
    >
  </div>
</template>

<style lang="scss" scoped></style>
