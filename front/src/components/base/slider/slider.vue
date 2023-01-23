<template>
  <div class="slide-wrapper" ref="slideRef">
    <div class="slide-content">
      <template v-for="slider in sliders" :key="slider.id">
        <div class="slide-page">
          <a :href="slider.link">
            <img :src="slider.pic" alt="">
          </a>
        </div>
      </template>
    </div>
    <div class="dots-wrapper">
      <span class="dot" v-for="(item, index) in sliders" :key="item.id"
            :class="{'active': index === currentPageIndex}"></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useSlide from "@/components/base/slider/use-slide";

defineProps({
  sliders: {
    type: Array,
    default: () => ([])
  }
})

const slideRef = ref(null)

const {currentPageIndex} = useSlide(slideRef)
</script>

<style lang="scss" scoped>
.slide {
  &-wrapper {
    height: 100%;
    overflow: hidden;
    .dots-wrapper {
      position: absolute;
      bottom: 4px;
      left: 50%;
      transform: translateX(-50%);

      .dot {
        display: inline-block;
        margin: 0 4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #eee;

        &.active {
          width: 20px;
          border-radius: 5px;
        }
      }


    }
  }

  &-content {
    height: 100%;
    white-space: nowrap;
    font-size: 0;
  }

  &-page {
    display: inline-block;
    height: 100%;
    width: 100%;
    line-height: 200px;
    text-align: center;
    font-size: 26px;

    img {
      height: 100%;
      width: 100%;
    }
  }




}
</style>