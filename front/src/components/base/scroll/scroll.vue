<template>
  <div ref="rootRef">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, useAttrs } from "vue";
import useScroll from "@/components/base/scroll/use-scroll";

const props = defineProps({
  click: {
    type: Boolean,
    default: true
  }
})

const attrs = useAttrs();
console.log("attrs", attrs);
const rootRef = ref(null)

useScroll(rootRef, props)
</script>

<style lang="scss" scoped>
</style>