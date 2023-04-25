<template>
  <div>
    <div class="fixed left-0 top-0 w-100vw">
      <var-app-bar title-position="center">
        <!-- 左边区域建议放导航相关 -->
        <template #left>
          <var-button
            v-if="route.meta.showBack"
            @click="goBack"
            color="transparent"
            text-color="#fff"
            round
            text
          >
            <i-ic:round-chevron-left class="w-24px h-24px" />
          </var-button>
          <var-button
            v-if="route.meta.showGoHome"
            @click="goHome"
            color="transparent"
            text-color="#fff"
            round
            text
          >
            <i-ic:round-home class="w-24px h-24px" />
          </var-button>
        </template>
        {{ route.meta.title }}
        <!-- 左边区域建议放操作相关 -->
        <template #right>
          <var-button
            v-if="route.meta.showThemeChange"
            color="transparent"
            text-color="#fff"
            round
            text
            @click="darkThemeSwitch"
          >
            <div class="w-24px h-24px">
              <i-line-md:sunny-filled-loop-to-moon-alt-filled-loop-transition
                class="w-24px h-24px"
                v-if="settingStore.darkTheme"
              />
              <i-line-md:moon-filled-alt-to-sunny-filled-loop-transition
                class="w-24px h-24px"
                v-else
              />
            </div>
          </var-button>
          <var-button
            v-if="route.meta.showGithub"
            @click="openGithub"
            color="transparent"
            text-color="#fff"
            round
            text
          >
            <i-line-md:github-twotone class="w-24px h-24px" />
          </var-button>
        </template>
      </var-app-bar>
    </div>
    <div class="h-[var(--app-bar-height)]"></div>
  </div>
</template>
<script lang="ts" setup>
import { emitter } from '@/utils/eventBus'
import { LoadingBar } from '@varlet/ui'
import { StyleProvider, Themes } from '@varlet/ui'
const settingStore = useSettingStore()
const routeStore = useRouteStore()
const route = useRoute()
const router = useRouter()
const openGithub = () => {
  window.open('https://github.com/Wyatex/Vue3-starter')
}
const darkThemeSwitch = () => {
  settingStore.darkTheme = !settingStore.darkTheme
  StyleProvider(settingStore.darkTheme ? Themes.dark : null)
}
// 刷新页面
const { loading, startLoading, endLoading } = useLoading()
const reloadPage = () => {
  startLoading()
  LoadingBar.start()
  routeStore.reloadPage()
  setTimeout(() => {
    endLoading()
    LoadingBar.finish()
  }, 1000)
}
const goBack = () => {
  settingStore.animationType = 'fade-out'
  emitter.emit('appBarBackClick')
  router.back()
}
const goHome = () => {
  settingStore.animationType = 'fade-out'
  router.replace({ name: 'index-home' })
  emitter.emit('appBarGoHomeClick')
}
</script>

<style scoped></style>
