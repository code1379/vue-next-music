<template>
  <div class="loading">
  <div class="loading-content">
    <img src="./loading.gif" width="24" height="24" >
    <p class="desc">{{title}}</p>
  </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const title = ref("正在载入。。。")
const setTitle = (val) => {
  title.value = val
}

defineExpose({
  setTitle
})
</script>

<style lang="scss" scoped>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .loading-content {
    text-align: center;
    .desc {
      line-height: 24px;
      font-size: $font-size-small;
      color: $color-text-l;
    }
  }
}
</style>