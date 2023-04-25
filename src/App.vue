<script setup lang="ts">
import { StyleProvider, Themes } from '@varlet/ui'
const settingStore = useSettingStore()
console.log(settingStore.darkTheme ? Themes.dark : null)
StyleProvider(settingStore.darkTheme ? Themes.dark : null)
</script>

<template>
  <router-view />
</template>

<style>
body {
  transition: background-color 0.25s, color 0.25s;
  color: var(--color-text);
  background-color: var(--color-body);
}
</style>
