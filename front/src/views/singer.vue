<template>
  <div class="singer" v-loading="loading">
    <index-list :groups="singerGroupRef" @select="selectSinger"></index-list>
    <router-view :singer="selectedSinger"/>
  </div>
</template>

<script setup>

import { getSingerList } from "@/service/singer";
import IndexList from "@/components/base/index-list/index-list.vue";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

const singerGroupRef = ref([])

async function initData() {
  const {singers} = await getSingerList()
  console.log(singers);
  singerGroupRef.value = singers
}

const loading = computed(() => !singerGroupRef.value.length)

initData()

const selectedSinger = ref(null)
const router = useRouter();
function selectSinger(singer) {
  selectedSinger.value = singer;
  router.push(`/singer/${singer.mid}`)
}
</script>

<style lang="scss" scoped>
.singer {
  position: fixed;
  top: 88px;
  width: 100%;
  bottom: 0;
}
</style>