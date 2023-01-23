export function addClass(el, className) {
	const elClassList = el.classList;
	if (!elClassList.contains(className)) {
		el.classList.add(className)
	}
}

export function removeClass(el, className) {
	el.classList.remove(className)
}