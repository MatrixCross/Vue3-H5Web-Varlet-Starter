<template>
  <var-style-provider class="min-h-100vh">
    <layout-header v-if="route.meta.showAppBar" />
    <layout-content />
    <layout-footer v-if="route.meta.showBottomBar" />
  </var-style-provider>
</template>

<script lang="ts" setup>
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutContent from './components/LayoutContent.vue'
import LayoutFooter from './components/LayoutFooter.vue'
const route = useRoute()
</script>

<style scoped></style>
