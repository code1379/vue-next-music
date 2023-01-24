<template>
  <div class="singer" v-loading="loading">
    <index-list :groups="singerGroupRef"></index-list>
  </div>
</template>

<script setup>

import { getSingerList } from "@/service/singer";
import IndexList from "@/components/base/index-list/index-list.vue";
import { computed, ref } from "vue";

const singerGroupRef = ref([])
async function initData() {
  const {singers} = await getSingerList()
  console.log(singers);
  singerGroupRef.value = singers
}

const loading = computed(() => !singerGroupRef.value.length)

initData()
</script>

<style lang="scss" scoped>
.singer {
  position: fixed;
  top: 88px;
  width: 100%;
  bottom: 0;
}
</style>