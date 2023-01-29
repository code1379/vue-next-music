<template>
  <div class="music-list">
    <div class="back" @click="onBack">
      <div class="icon-back"></div>
    </div>
    <h1 class="title">{{title}}</h1>
    <div class="bg-img" :style="bgImageStyle" ref="bgImageRef">
      <div class="mask"></div>
    </div>
    <Scroll class="song-list-wrapper" :style="scrollStyle">
      <SongList :songs="songs" />
    </Scroll>
  </div>
</template>

<script setup>
import SongList from "@/components/base/song-list/song-list.vue";
import Scroll from "@/components/base/scroll/scroll.vue";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()
const props = defineProps({
  songs: {
    type: Array,
    default: () => []
  },
  pic: String,
  title: String
})

const imgHeight = ref(0)
const bgImageRef = ref(null)

onMounted(() => {
  imgHeight.value = bgImageRef.value.clientHeight
})


const bgImageStyle = computed(() => ({
  backgroundImage: `url(${props.pic})`
}))

const scrollStyle = computed(() => ({
  top: `${imgHeight.value}px`
}))

function onBack() {
  router.back()
}

</script>

<style lang="scss" scoped>
.music-list {
  position: relative;
  .back {
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 9;
    color: $color-theme;
  }
  .title {
    position: absolute;
    top: 5px;
    transform: translateX(-50%);
    left: 50%;
    z-index: 9;

  }
  .bg-img {
    height: 0;
    // 这种带 padding-bottom 的，bgimg 要写在一起，不能把 img 弄为子元素
    padding-bottom: 70%;
    width: 100%;
    position: relative;
    background-size: 100%;

    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  .song-list-wrapper {
    //flex: 1;
    // 这里如果用 absolute的话不能滚动
    position: fixed;
    width: 100%;
    bottom: 0;
    overflow: hidden;
  }
}


</style>