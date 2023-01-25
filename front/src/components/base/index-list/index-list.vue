<template>
  <Scroll class="index-list" :probe-type="3" @scroll="onScroll" ref="scrollRef">
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
    <div class="fixed-title-wrapper" :style="fixedStyle" v-show="fixedTitle">
      <div class="fixed-title">
        {{fixedTitle}}
      </div>
    </div>
    <div class="shortcut" @touchstart.stop.prevent="onShortcutTouchStart" @touchmove.stop.prevent="onShortcutTouchMove" @touchend.stop.prevent="onShortcutTouchEnd">
      <ul>
        <template v-for="(title, index) in shortcutList" :key="title">
          <li class="item"  :class="{'current': index === currentIndex}" :data-index="index">
            {{title}}
          </li>
        </template>
      </ul>
    </div>
  </Scroll>
</template>

<script setup>
import Scroll from "@/components/base/scroll/scroll.vue";
import useFixed from "@/components/base/index-list/use-fixed";
import useShortcut from "@/components/base/index-list/use-shortcut";
import { ref } from "vue";

const props = defineProps({
  groups: {
    type: Array,
    default: () => []
  }
})
const scrollRef = ref(null)

// 最外层包裹的ref 用于获取整个列表的高度
const { groupsRef, onScroll, fixedTitle, fixedStyle, currentIndex} = useFixed(props)
const { shortcutList,onShortcutTouchStart,
  onShortcutTouchMove,
  onShortcutTouchEnd } = useShortcut(props, groupsRef, scrollRef)
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
  .shortcut {
    position: fixed;
    right: 5px;
    transform: translateY(-50%);
    top: 50%;
    background-color: $color-background-d;
    font-size: $font-size-small;
    padding: 8px 0;
    border-radius: 5px;
    .item {
      text-align: center;
      line-height: 18px;
      width: 20px;
      &.current {
        color: $color-theme;
      }
    }
  }
}
</style>