import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'

import { onMounted, onUnmounted, ref } from "vue";
BScroll.use(ObserveDOM)

export default function useScroll(wrapperRef, options, emits) {
	const scroll = ref(null)
	onMounted(()=> {
		const scrollValue = scroll.value = new BScroll(wrapperRef.value, {
			...options,
			observeDOM: true // 开启 observe-dom 插件
		})
		
		if(options.probeType > 0) {
			scrollValue.on("scroll", (pos) => {
				emits("scroll", pos)
			})
		}
	})
	
	onUnmounted(() => {
		scroll.value.destroy()
	})
	return scroll
}