<template>
  <div class="singer-detail">
    singer-detail
  </div>
</template>

<script setup>

import { getSingerDetail, } from "@/service/singer";
import { processSongs } from "@/service/song";
const props = defineProps({
  singer: {
    type: Object,
    default: () => ({})
  }
})

async function initData() {
  const result = await getSingerDetail(props.singer)
  const songsUrl = await processSongs(result.songs)
  console.log("songsUrl", songsUrl)
}

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