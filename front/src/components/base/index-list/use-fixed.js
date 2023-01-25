// 用于获取向上滚动时，顶部吸顶效果的title
// 主要用到 better-scroll 的 probeType
// https://better-scroll.github.io/docs/zh-CN/guide/base-scroll-options.html#probetype
import { ref, watch, nextTick, computed } from "vue";

export default function useFixed(props) {
	const TITLE_HEIGHT = 30
	const groupsRef = ref(null)
	const listHeights = ref([])
	const scrollY = ref(0)
	const currentIndex = ref(0)
	// 每个组的顶部距离顶部的距离，如果距离足够小就偏移
	// 这个组区间的底部，就是下个组区间的顶部
	const distance = ref(0)
	
	const fixedTitle = computed(() => {
		if (scrollY.value < 0) {
			return ""
		}
		const group = props.groups[currentIndex.value]
		return group?.title || ""
	})
	
	const fixedStyle = computed(() => {
		const distanceValue = distance.value
		const diff = (distanceValue > 0 && distanceValue < TITLE_HEIGHT) ? distanceValue - TITLE_HEIGHT : 0;
		return {
			transform: `translate3d(0, ${diff}px, 0)`
		}
	})
	
	watch(() => props.groups, async () => {
		// 数据变化之后，dom并没有立即更新，所以我们要等到 nextTick 之后执行
		await nextTick()
		calculate()
	})
	
	watch(scrollY, (newY) => {
		const listHeightsValue = listHeights.value
		for (let i = 0; i < listHeightsValue.length - 1; i++) {
			const heightTop = listHeightsValue[i]
			const heightBottom = listHeightsValue[i + 1]
			console.log("heightTop", heightTop);
			console.log("heightBottom", heightBottom);
			if (newY >= heightTop && newY < heightBottom) {
				currentIndex.value = i
				distance.value = heightBottom - newY
			}
		}
	})
	
	function calculate() {
		const list = groupsRef.value.children
		const listHeightsValue = listHeights.value
		
		let height = 0;
		// 清空数组
		listHeightsValue.length = 0
		listHeightsValue.push(height)
		for (let i = 0; i < list.length; i++) {
			height += list[i].clientHeight
			listHeightsValue.push(height)
		}
	}
	
	function onScroll(pos) {
		console.log("onScroll scroll change", pos)
		scrollY.value = -pos.y
	}
	
	return {
		groupsRef,
		onScroll,
		fixedTitle,
		distance,
		fixedStyle,
		currentIndex
	}
}