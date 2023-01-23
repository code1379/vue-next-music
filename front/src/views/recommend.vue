<template>
  <div  class="recommend" v-loading:[loadingText]="loading">
    <Scroll :click="true" class="recommend-content">
      <div>
        <!--  scroll 只针对第一个子节点生效  -->
        <div class="slider-wrapper">
          <div class="slider-content">
            <Slider v-if="slidersRef.length" :sliders="slidersRef"/>
          </div>
        </div>
        <div class="recommend-list">
          <h1 class="title" v-show="!loading">热门歌单推荐</h1>
          <ul>
            <template v-for="album in albumsRef" :key="album.id">
              <li class="item">
                <div class="icon">
<!--                  <img :src="album.pic" alt="">-->
                  <img v-lazy ="album.pic" alt="">
                </div>
                <div class="text">
                  <h2 class="name">{{album.username}}</h2>
                  <p class="title">{{album.title}}</p>
                </div>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script setup>
import { getRecommend } from "@/service/recommend";
import Slider from "@/components/base/slider/slider.vue";
import Scroll from "@/components/base/scroll/scroll.vue";
import { computed, ref } from "vue";

const slidersRef = ref([])
const albumsRef = ref([])
const initGetData = async() => {
  const result = await getRecommend();
  const { sliders, albums } = result
  slidersRef.value = sliders
  albumsRef.value = albums
}

const loading = computed(() => !slidersRef.value.length && !albumsRef.value.length)
const loadingText = '正在载入。。。'
initGetData()
</script>

<style lang="scss" scoped>
.recommend {
  position: fixed;
  top: 88px;
  width: 100%;
  bottom: 0;
  .recommend-content {
    height: 100%;
    overflow: hidden;
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
    .recommend-list {
      .title {
        color:$color-theme;
        text-align: center;
        line-height: 40px;
      }
    ul {
      .item {
        display: flex;
        margin-bottom: 10px;
        .icon {
          width: 60px;
          height: 60px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .text {
          margin-left: 5px;
        }
      }
    }

    }
  }

}
</style>