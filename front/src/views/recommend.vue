<template>
  <div  class="recommend">
    <div class="slider-wrapper">
      <div class="slider-content">
        <Slider v-if="slidersRef.length" :sliders="slidersRef"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getRecommend } from "@/service/recommend";
import Slider from "@/components/base/slider/slider.vue";
import { ref } from "vue";

const slidersRef = ref([])
const initGetData = async() => {
  const result = await getRecommend();
  const { sliders } = result
  slidersRef.value = sliders
}

initGetData()
</script>

<style lang="scss" scoped>
.recommend {
  position: fixed;
  top: 88px;
  width: 100%;
  bottom: 0;
  .slider-wrapper {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 40%;
    overflow: hidden;
    .slider-content {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>