<template>
  <div class="m-header">
    <img class="logo" alt="">
    <h4 class="title">chicken music</h4>
  </div>
</template>

<script setup>
import { defineComponent } from "vue";

defineComponent({
  name: "m-header"
})
</script>

<style lang="scss" scoped>
.m-header {
  height: 44px;
  text-align: center;
  color: $color-theme;
  font-size: 0;
  .logo {
    display: inline-block;
    vertical-align: top;
    width: 30px;
    height: 32px;
    @include bg-image("./logo");
    background-size: 30px 32px;
    margin-right: 6px;
    margin-top: 6px;
  }
  .title {
    display: inline-block;
    vertical-align: top;
    line-height: 44px;
    font-size: $font-size-large;
  }
}
</style>