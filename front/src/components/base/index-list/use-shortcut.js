import { computed } from "vue";

export default function useShortcut(props, groupsRef, scrollRef) {
	const ANCHOR_HEIGHT = 18
	// 在这里只能获取到初始时候的值
	console.log("useShortcut groupsRef", groupsRef, groupsRef?.value?.children);
	const shortcutList = computed(() => {
		return props.groups.map(group => group.title)
	})
	
	const touch = {}
	const onShortcutTouchStart = (e) => {
		console.log("onShortcutTouchStart" ,e)
		const archorIndex = parseInt(e.target.dataset.index)
		touch.y1 = e.touches[0].pageY
		touch.anchorIndex = archorIndex
		scrollTo(archorIndex)
	}
	const onShortcutTouchMove = (e) => {
		console.log("onShortcutTouchMove" ,e)
		touch.y2 = e.touches[0].pageY
		const delta = (touch.y2 - touch.y1) / 18 | 0
		const archorIndex = touch.anchorIndex + delta
		scrollTo(archorIndex)
	}
	
	function scrollTo(index) {
		if(isNaN(index)) return
		index = Math.max( 0, Math.min(shortcutList.value.length - 1, index))
		const targetEl = groupsRef?.value?.children[index]
		const scroll = scrollRef.value.scroll
		scroll.scrollToElement(targetEl, 0)
	}
	const onShortcutTouchEnd = (e) => {
		console.log("onShortcutTouchEnd" ,e)
		
	}
	return {
		shortcutList,
		onShortcutTouchStart,
		onShortcutTouchMove,
		onShortcutTouchEnd
	}
}