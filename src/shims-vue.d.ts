// https://github.com/vuejs/vue-cli/issues/1198#issuecomment-1139752067
declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	const component: DefineComponent
	export default component
}

declare module '*.svg' {
	const content: string
	export default content
}
