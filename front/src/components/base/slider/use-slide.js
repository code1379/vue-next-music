import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'
import { onMounted, onUnmounted, ref } from "vue";

BScroll.use(Slide)
export default function useSlide(wrapperRef) {
	const slider = ref(null)
	const currentPageIndex = ref(0)
	
	onMounted(() => {
		const sliderValue = slider.value = new BScroll(wrapperRef.value, {
			click: true,
			scrollX: true,
			scrollY: false,
			momentum: false,
			bounce: false,
			probeType: 2,
			slide: true
		})
		
		console.log('sliderValue', sliderValue);
		
		sliderValue.on('slideWillChange', (page) => {
			currentPageIndex.value = page.pageX
		})
	})
	
	onUnmounted(() => {
		slider.value.destroy()
	})
	
	return {
		slider,
		currentPageIndex
	}
}