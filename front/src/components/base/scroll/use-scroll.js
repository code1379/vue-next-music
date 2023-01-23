import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'

import { onMounted, onUnmounted, ref } from "vue";
BScroll.use(ObserveDOM)

export default function useScroll(wrapperRef, option) {
	const scroll = ref(null)
	onMounted(()=> {
		const scrollValue = scroll.value = new BScroll(wrapperRef.value, {
			...option,
			observeDOM: true // 开启 observe-dom 插件
		})
	})
	
	onUnmounted(() => {
		scroll.value.destroy()
	})
}