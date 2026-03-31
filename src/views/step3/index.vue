<script setup lang="ts">
import router from "@/router";

defineOptions({
  name: "Step3"
});
</script>

<template>
  <div>
    <el-button
      @click="
        router.push({
          name: 'Step4'
        })
      "
      >go p4</el-button
    >
  </div>
</template>

<style lang="scss" scoped></style>
