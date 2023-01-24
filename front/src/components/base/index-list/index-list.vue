<template>
  <Scroll class="index-list">
    <ul class="groups">
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
  </Scroll>
</template>

<script setup>
import Scroll from "@/components/base/scroll/scroll.vue";

defineProps({
  groups: {
    type: Array,
    default: () => []
  }
})
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
}
</style>