import { createApp } from "vue";
import Loading from "@/components/base/loading/loading.vue";
import { addClass, removeClass } from "@/assets/js/dom";

const relativeCls = 'g-relative'

const loadingDirective = {
	// binding 上绑定的是属性的值
	mounted(el, binding) {
		const {value, } = binding
		const app = createApp(Loading)
		const instance = app.mount(document.createElement("div"))
		el.instance = instance
		const title = binding.arg
		// arg 等于 "title" 的话就有传递值
		if (title !== undefined) {
			instance.setTitle(title)
		}
		if (value) {
			append(el)
		}
	},
	updated(el, binding) {
		const {value, oldValue } = binding
		const title = binding.arg
		// arg 等于 "title" 的话就有传递值
		if (title !== undefined) {
			el.instance.setTitle(title)
		}
		if (value !== oldValue) {
			value ? append(el) : remove(el)
		}
	}
}

function append(el) {
	const style = getComputedStyle(el)
	if (["absolute", "fixed", "relative"].indexOf(style.position) === -1) {
		addClass(el, relativeCls)
	}
	// loading 组件的 el
	el.appendChild(el.instance.$el)
}

function remove(el) {
	removeClass(el, relativeCls)
	// loading 组件的 el
	el.removeChild(el.instance.$el)
}

export default loadingDirective