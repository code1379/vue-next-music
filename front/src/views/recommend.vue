<template>
  <div>
    recommend
  </div>
</template>

<script setup>
import { getRecommend } from "@/service/recommend";
const initGetData = async() => {
  const result = await getRecommend();
  console.log(result);
}

initGetData()
</script>

<style lang="scss" scoped>

</style>