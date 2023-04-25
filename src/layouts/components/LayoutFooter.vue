<template>
  <var-bottom-navigation v-model:active="active" fixed safe-area border>
    <var-bottom-navigation-item @click="toHome" label="首页" icon="home" />
    <var-bottom-navigation-item
      @click="toAbout"
      label="关于"
      icon="account-circle-outline"
    />
  </var-bottom-navigation>
  <div class="h-[var(--bottom-navigation-height)]"></div>
</template>

<script setup lang="ts">
const active = ref(0)
const route = useRoute()
const router = useRouter()
const settingStore = useSettingStore()
if (route.name === 'index-about') {
  active.value = 1
}
const toAbout = () => {
  settingStore.animationType = 'fade-left'
  router.replace({ name: 'index-about' })
}
const toHome = () => {
  settingStore.animationType = 'fade-right'
  router.replace({ name: 'index-home' })
}
</script>
