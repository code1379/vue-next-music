// 用于获取向上滚动时，顶部吸顶效果的title
// 主要用到 better-scroll 的 probeType
// https://better-scroll.github.io/docs/zh-CN/guide/base-scroll-options.html#probetype
import { ref, watch, nextTick, computed } from "vue";

export default function useFixed(props){
	const groupsRef = ref(null)
	const listHeights = ref([])
	const scrollY = ref(0)
	const currentIndex = ref(0)
	const fixedTitle = computed(() => {
		const group = props.groups[currentIndex.value]
		return group?.title  || ""
	})
	
	watch(() => props.groups, async() => {
		// 数据变化之后，dom并没有立即更新，所以我们要等到 nextTick 之后执行
		await nextTick()
		calculate()
	})
	
	watch(scrollY, (newY  ) => {
		const listHeightsValue = listHeights.value
		for (let i = 0; i < listHeightsValue.length - 1; i++) {
			const heightTop = listHeightsValue[i]
			const heightBottom = listHeightsValue[i + 1]
			if(newY > heightTop && newY < heightBottom) {
				currentIndex.value = i
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
	function onScroll(pos){
	scrollY.value = -pos.y
	}
	return {
		groupsRef,
		onScroll,
		fixedTitle
	}
}