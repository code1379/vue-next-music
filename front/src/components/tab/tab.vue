<template>
  <div class="tabs">
    <template v-for="item in tabs" :key="item.name">
      <router-link :to="item.path" class="tab-item" active-class="tab-active">
        <span class="title">{{item.name}}</span>
      </router-link>
    </template>
  </div>
</template>

<script setup>
const tabs = [
  {
    name: "推荐",
    path: "/recommend"
  },
  {
    name: "歌手",
    path: "/singer"
  },
  {
    name: "排行",
    path: "/top-list"
  },
  {
    name: "搜索",
    path: "/search"
  },
]
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  line-height: 44px;
  height: 44px;
  font-size: $font-size-medium;
  .tab-item {
    flex: 1;
    text-align: center;
    //text-decoration: none;
    //color: $color-text;
    .title {
      padding-bottom: 5px;
      color: $color-text-l;
    }
    &.tab-active {
      .title {
        color: $color-theme;
        border-bottom: 2px solid $color-theme;
      }
    }
  }
}
</style>