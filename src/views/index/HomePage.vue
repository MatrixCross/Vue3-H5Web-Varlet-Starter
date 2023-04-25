<template>
  <div>
    <div class="exclude-h-n-s">
      <var-card
        class="m-b-2"
        title="风景"
        subtitle="公园里的风景"
        description="公园的树林也很美。在公园的小山上栽满了树木，梧桐树的叶子随着时间的流逝慢慢变黄，纷纷飘落；枫树的叶子却变红了，公园笼罩在片片红云中，也使秋天增添了一分热情。而柏树的叶子仍是那么青翠欲滴，令你陶醉极了。山上有一群孩子在快乐的嬉戏，不时传来阵阵欢笑声，瞧，他们玩得多起劲呀，给树林增添了活力。"
        src="https://varlet.gitee.io/varlet-ui/cat.jpg"
      >
        <template #extra>
          <div class="w-full text-right">
            <var-button @click="toPage1" type="warning">查看详情</var-button>
          </div>
        </template>
      </var-card>
      <var-card
        title="风景"
        subtitle="公园里的风景"
        description="公园的树林也很美。在公园的小山上栽满了树木，梧桐树的叶子随着时间的流逝慢慢变黄，纷纷飘落；枫树的叶子却变红了，公园笼罩在片片红云中，也使秋天增添了一分热情。而柏树的叶子仍是那么青翠欲滴，令你陶醉极了。山上有一群孩子在快乐的嬉戏，不时传来阵阵欢笑声，瞧，他们玩得多起劲呀，给树林增添了活力。"
        src="https://varlet.gitee.io/varlet-ui/cat.jpg"
      />
    </div>
    <div class="h-8"></div>
  </div>
</template>
<script setup lang="ts">
const router = useRouter()
const settingStore = useSettingStore()
const toPage1 = () => {
  settingStore.animationType = 'fade-in'
  router.push({ name: 'index-page1' })
}
</script>
<style scoped>
.swipe-example {
  height: 160px;
}

.swipe-example-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
</style>
