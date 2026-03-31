<script setup lang="ts">
import router from "@/router";

defineOptions({
  name: "Step2"
});
</script>

<template>
  <div>
    <el-button
      @click="
        router.push({
          name: 'Step3'
        })
      "
      >go p3</el-button
    >
  </div>
</template>

<style lang="scss" scoped></style>
