<template>
  <Scroll class="index-list" :probe-type="3" @scroll="onScroll">
    <ul class="groups" ref="groupsRef">
      <template v-for="group in groups" :key="group.title">
        <li class="group">
          <h2 class="title">{{ group.title }}</h2>
          <ul>
            <template v-for="singer in group.list" :key="singer.id">
              <li class="item">
                <img class="avatar" v-lazy="singer.pic" alt="">
                <span class="name">{{ singer.name }}</span>
              </li>
            </template>
          </ul>
        </li>
      </template>
    </ul>
    <li class="fixed-title-wrapper">
      <div class="fixed-title">
        {{fixedTitle}}
      </div>
    </li>
  </Scroll>
</template>

<script setup>
import Scroll from "@/components/base/scroll/scroll.vue";
import useFixed from "@/components/base/index-list/use-fixed";

const props = defineProps({
  groups: {
    type: Array,
    default: () => []
  }
})

// 最外层包裹的ref 用于获取整个列表的高度
const { groupsRef, onScroll, fixedTitle} = useFixed(props)
</script>

<style lang="scss" scoped>
.index-list {
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
  background-color: $color-background;
  .groups {
    .group {
      padding-bottom: 30px;
      .title {
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        font-size: $font-size-small;
        color: $color-text-l;
        background-color: $color-background-highlight;
      }

      .item {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .name {
          margin-left: 10px;
          font-size: $font-size-medium;
          color: $color-text-l;
        }
      }
    }

  }
  .fixed-title-wrapper {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    &::marker {
      display: none !important;
      height: 0;
    }
    .fixed-title {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: $font-size-small;
      color: $color-text-l;
      background-color: $color-background-highlight;
    }
  }
}
</style>