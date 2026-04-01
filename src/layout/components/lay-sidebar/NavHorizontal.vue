<script setup lang="ts">
import { useNav } from "@/layout/hooks/useNav";
import { responsiveStorageNameSpace } from "@/config";
import { ref, nextTick, computed } from "vue";
import { storageLocal, isAllEmpty } from "@pureadmin/utils";
import { usePermissionStoreHook } from "@/store/modules/permission";
import LaySidebarItem from "../lay-sidebar/components/SidebarItem.vue";
import { useRoute } from "vue-router";

import SystemManagementIcon from "~icons/ri/settings-3-line";
import AccountSettingsIcon from "~icons/ri/user-settings-line";
import LogoutCircleRLine from "~icons/ri/logout-circle-r-line";

const menuRef = ref();
const showLogo = ref(
  storageLocal().getItem<StorageConfigs>(
    `${responsiveStorageNameSpace()}configure`
  )?.showLogo ?? true
);

const route = useRoute();
const {
  title,
  logout,
  username,
  role,
  backTopMenu,
  toAccountSettings,
  toSystemManagement
} = useNav();

const defaultActive = computed(() =>
  !isAllEmpty(route.meta?.activePath) ? route.meta.activePath : route.path
);

nextTick(() => {
  menuRef.value?.handleResize();
});

const getTitle = () => {
  if (route.name == "Dashboard") {
    return title.value + " · " + route.meta.title;
  }

  return route.meta.title;
};
</script>

<template>
  <div
    v-loading="usePermissionStoreHook().wholeMenus.length === 0"
    class="horizontal-header"
    :style="
      route.name == 'Admin'
        ? 'background: #111827'
        : 'background: var(--pure-theme-menu-bg) !important'
    "
  >
    <div v-if="showLogo" class="horizontal-header-left" @click="backTopMenu">
      <span>{{ getTitle() }}</span>
    </div>
    <!-- <el-menu
      ref="menuRef"
      mode="horizontal"
      popper-class="pure-scrollbar"
      class="horizontal-header-menu"
      :default-active="defaultActive"
    >
      <LaySidebarItem
        v-for="route in usePermissionStoreHook().wholeMenus"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu> -->
    <div class="horizontal-header-right">
      <!-- 退出登录 -->
      <el-dropdown trigger="click">
        <span class="el-dropdown-link navbar-bg-hover flex-col justify-center!">
          <p class="dark:text-white">当前用户：{{ username }}（{{ role }}）</p>
          <p class="dark:text-white mt-2!">
            当前用户：{{ username }}（{{ role }}）
          </p>
        </span>
        <template #dropdown>
          <el-dropdown-item @click="toSystemManagement">
            <IconifyIconOffline
              :icon="SystemManagementIcon"
              style="margin: 5px"
            />
            系统管理
          </el-dropdown-item>
          <el-dropdown-item @click="toAccountSettings">
            <IconifyIconOffline
              :icon="AccountSettingsIcon"
              style="margin: 5px"
            />
            账户设置
          </el-dropdown-item>
          <el-dropdown-menu class="logout">
            <el-dropdown-item @click="logout">
              <IconifyIconOffline
                :icon="LogoutCircleRLine"
                style="margin: 5px"
              />
              退出系统
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-loading-mask) {
  opacity: 0.45;
}

.logout {
  width: 120px;

  :deep(.el-dropdown-menu__item) {
    display: inline-flex;
    flex-wrap: wrap;
    min-width: 100%;
  }
}
</style>
