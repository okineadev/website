<script setup lang="ts">
import { shallowRef, watchEffect } from 'vue'
import { markRaw } from 'vue'

const props = defineProps<{
	name: string
	customPath?: string
}>()

const iconComponent = shallowRef(null)

watchEffect(async () => {
	try {
		const imported = await import(`../../assets/icons/${props.name}.svg`)
		iconComponent.value = markRaw(imported.default)
	} catch (error) {
		console.error(`Failed to load icon: ${props.name}`, error)
		iconComponent.value = null
	}
})
</script>

<template>
	<component :is="iconComponent" v-if="iconComponent" :class="['icon', name]" aria-hidden="true" />
</template>

<style lang="scss" scoped>
.icon {
	display: inline-block;
	width: 1em;
	height: auto;
	aspect-ratio: 1/1;
	vertical-align: -0.125em;
	color: var(--icons-color);
	margin: 0 3px 0 0;
}
</style>
