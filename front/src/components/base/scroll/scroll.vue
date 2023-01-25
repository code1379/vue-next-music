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
  },
  probeType: {
    type: Number,
    default: 0
  }
})

const emits = defineEmits(['scroll'])

const attrs = useAttrs();
console.log("attrs", attrs);
const rootRef = ref(null)

const scroll = useScroll(rootRef, props, emits)

defineExpose({
  scroll,
})
</script>

<style lang="scss" scoped>
</style>