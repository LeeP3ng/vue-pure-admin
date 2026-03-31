<script setup lang="ts">
import "animate.css";
// 引入 src/components/ReIcon/src/offlineIcon.ts 文件中所有使用addIcon添加过的本地图标
import "@/components/ReIcon/src/offlineIcon";
import { setType } from "./types";
import { useLayout } from "./hooks/useLayout";
import { useAppStoreHook } from "@/store/modules/app";
import { useSettingStoreHook } from "@/store/modules/settings";
import { useDataThemeChange } from "@/layout/hooks/useDataThemeChange";
import {
  h,
  ref,
  reactive,
  computed,
  onBeforeMount,
  defineComponent
} from "vue";
import { useDark, useGlobal, useResizeObserver } from "@pureadmin/utils";

import LayContent from "./components/lay-content/index.vue";
import NavHorizontal from "./components/lay-sidebar/NavHorizontal.vue";

const appWrapperRef = ref();
const { isDark } = useDark();
const { layout } = useLayout();
const pureSetting = useSettingStoreHook();
const { $storage } = useGlobal<GlobalPropertiesApi>();

const set: setType = reactive({
  sidebar: computed(() => {
    return useAppStoreHook().sidebar;
  }),

  device: computed(() => {
    return useAppStoreHook().device;
  }),

  fixedHeader: computed(() => {
    return pureSetting.fixedHeader;
  }),

  classes: computed(() => {
    return {
      hideSidebar: !set.sidebar.opened,
      openSidebar: set.sidebar.opened,
      withoutAnimation: set.sidebar.withoutAnimation,
      mobile: set.device === "mobile"
    };
  }),

  hideTabs: computed(() => {
    return $storage?.configure.hideTabs;
  })
});

function setTheme(menuLayout: string) {
  window.document.body.setAttribute("layout", menuLayout);
  $storage.layout = {
    layout: `${menuLayout}`,
    theme: $storage.layout?.theme,
    darkMode: $storage.layout?.darkMode,
    sidebarStatus: $storage.layout?.sidebarStatus,
    epThemeColor: $storage.layout?.epThemeColor,
    themeColor: $storage.layout?.themeColor,
    themeMode: $storage.layout?.themeMode
  };
}

useResizeObserver(appWrapperRef, entries => {
  const entry = entries[0];
  const [{ inlineSize: width, blockSize: height }] = entry.borderBoxSize;
  useAppStoreHook().setViewportSize({ width, height });
  setTheme(useAppStoreHook().layout);
});

onBeforeMount(() => {
  useDataThemeChange().dataThemeChange($storage.layout?.themeMode);
});

const LayHeader = defineComponent({
  name: "LayHeader",
  render() {
    return h(
      "div",
      {
        class: { "fixed-header": set.fixedHeader },
        style: [
          set.hideTabs && layout.value.includes("horizontal")
            ? isDark.value
              ? "box-shadow: 0 1px 4px #0d0d0d"
              : "box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08)"
            : ""
        ]
      },
      {
        default: () => [h(NavHorizontal)]
      }
    );
  }
});
</script>

<template>
  <div ref="appWrapperRef" :class="['app-wrapper', set.classes]">
    <div
      :class="[
        'main-container',
        pureSetting.hiddenSideBar ? 'main-hidden' : ''
      ]"
    >
      <div>
        <LayHeader />
        <!-- 主体内容 -->
        <LayContent :fixed-header="set.fixedHeader" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;

  &::after {
    clear: both;
    display: table;
    content: "";
  }
}
</style>
