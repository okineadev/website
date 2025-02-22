<script setup lang="ts">
import { shallowRef, watchEffect } from 'vue'
import { markRaw } from 'vue'

const props = defineProps<{
	name: string
}>()

const emojiPath = shallowRef('')

watchEffect(async () => {
	try {
		const emoji = await import(`../../assets/emojis/${props.name}.webp`)
		emojiPath.value = markRaw(emoji.default)
	} catch (error) {
		console.error(`Failed to load emoji: ${props.name}`, error)
		emojiPath.value = ''
	}
})
</script>

<template>
	<img v-if="emojiPath" :src="emojiPath" :alt="name" :class="['emoji', name]" />
</template>

<style lang="scss" scoped>
.emoji {
	display: inline-block;
	width: 1.2em;
	height: auto;
	aspect-ratio: 1/1;
	// vertical-align: -0.125em;
	margin: 0 3px 0 0;
	user-select: none;
}
</style>
