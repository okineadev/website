<template>
	<div class="progressive-blur-wrapper">
		<div class="progressive-blur">
			<div v-for="i of filterSteps" :key="i" class="progressive-blur__blur" :style="styleForStep(i)" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getApplicableStylesForStep, getFilterSteps, getGradientCheckpoints } from '../helpers/progressive-blur'

const props = defineProps<{
	src?: string
	blurHeight?: number
	blurDetail?: number
	blurAmount?: number
	scale?: number
}>()

const blurHeight = computed(() => props.blurHeight ?? 50)
const blurDetail = computed(() => props.blurDetail ?? 5)
const blurAmount = computed(() => props.blurAmount ?? 1)
const scale = computed(() => props.scale ?? 1.2)

const wrapperZIndex = computed(() => {
	return blurDetail.value + 1
})

// const wrapperStyle = computed(() => ({
// 	backgroundImage: props.src ? `url(${props.src})` : 'none',
// 	backgroundSize: 'cover',
// 	backgroundPosition: 'center',
// }))

const filterSteps = computed(() => {
	return getFilterSteps(blurDetail.value)
})

const generateGradientCheckpoints = computed(() => {
	return getGradientCheckpoints(blurHeight.value, blurDetail.value)
})

const styleForStep = (step: number) => {
	return getApplicableStylesForStep(step, generateGradientCheckpoints.value, blurAmount.value)
}

const BlurHeightpx = `${blurHeight.value}px`
</script>

<style lang="scss" scoped>
.progressive-blur-wrapper {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: v-bind(BlurHeightpx);
	pointer-events: none;
	z-index: v-bind(wrapperZIndex);
	overflow: hidden;
}

.progressive-blur {
	position: absolute;
	width: 100%;
	height: 100%;
	transform: scale(v-bind(scale));

	&__blur {
		background: linear-gradient(to bottom, rgba(var(--background-raw), 0.1), rgba(var(--background-raw), 1));
		background-size: cover;
		position: absolute;
		inset: 0;
	}
}
</style>
