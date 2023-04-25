<template>
  <div>
    <var-skeleton title loading>加载的数据</var-skeleton>
    <div class="flex-center w-full">
      <var-button @click="toPage2">前往下一页</var-button>
    </div>
  </div>
</template>
<script setup lang="ts">
const router = useRouter()
const settingStore = useSettingStore()
const toPage2 = () => {
  settingStore.animationType = 'fade-in'
  router.push({ name: 'index-page2' })
}
</script>
