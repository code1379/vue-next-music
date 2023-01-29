<template>
  <div class="song-list">
    <ul>
      <template v-for="song in songs" :key="song.mid">
        <li class="item">
          <div class="name">
            {{song.name}}
          </div>
          <div class="desc">{{ song.singer}} - {{song.album}} </div>
        </li>
      </template>
    </ul>

  </div>
</template>

<script setup>

defineProps({
  songs: {
    type: Array,
    default: () => []
  }
})

</script>

<style lang="scss" scoped>
.song-list {
  padding: 20px 0;
  .item {
    line-height: 24px;
    padding: 0 20px;
    .name {
      color: $color-text;
      font-size: $font-size-medium-x;
    }
    .desc {
      color: $color-text-d;
      font-size: $font-size-medium;
    }
  }
}
</style>