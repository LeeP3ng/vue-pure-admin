<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";

defineOptions({
  name: "Dashboard"
});
</script>

<template>
  <el-card shadow="never" class="border-none! rounded-xl!">
    <div>
      <el-button
        @click="
          router.push({
            name: 'Step1'
          })
        "
        >go p1</el-button
      >

      <el-button
        @click="
          router.push({
            name: 'Admin'
          })
        "
        >管理工作台</el-button
      >
    </div>
  </el-card>
</template>

<style lang="scss" scoped></style>
