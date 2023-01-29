<template>
  <div class="singer-detail">
    <music-list :songs="songsRef" :title="titleRef" :pic="picRef"/>
  </div>
</template>

<script setup>

import { getSingerDetail, } from "@/service/singer";
import { processSongs } from "@/service/song";
import { computed, ref } from "vue";
import MusicList from "@/components/base/music-list/music-list.vue";
const props = defineProps({
  singer: {
    type: Object,
    default: () => ({})
  }
})

const songsRef = ref([]);

async function initData() {
  const result = await getSingerDetail(props.singer)
  const songs = await processSongs(result.songs)
  songsRef.value = songs
}

const picRef = computed(() => props.singer && props.singer.pic)
const titleRef = computed(() => props.singer && props.singer.name)

initData()
</script>

<style lang="scss" scoped>
.singer-detail  {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: $color-background-highlight;
}
</style>