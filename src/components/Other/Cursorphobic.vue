<!-- Taken from https://github.com/Mitcheljager/svelte-cursorphobic/blob/97bf1d1fbc3051d733d8ad818ae1f73099d6879f/src/lib/Cursorphobic.svelte 🦊 -->

<template>
	<div ref="element">
		<div class="angler" :style="{ '--angle': `${moveAngle}deg` }">
			<div class="positioner" :style="{ '--distance': `${moveDistance * multiplier}px` }">
				<slot />
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
	range: {
		type: Number,
		default: 200,
	},
	multiplier: {
		type: Number,
		default: 0.1,
	},
	smoothing: {
		type: Number,
		default: 0.25,
	},
})

const element = ref(null)
const moveDistance = ref(0)
const moveAngle = ref(0)

function lerp(start, end, amount) {
	return start + amount * (end - start)
}

function updatePosition(event) {
	if (!element.value) return

	const { left, top } = element.value.getBoundingClientRect()
	const elementCenter = {
		x: left + element.value.firstChild.clientWidth / 2,
		y: top + element.value.firstChild.clientHeight / 2,
	}

	const cursor = { x: event.clientX, y: event.clientY }
	const distance = Math.hypot(cursor.x - elementCenter.x, cursor.y - elementCenter.y)
	const angle = Math.atan2(elementCenter.y - cursor.y, elementCenter.x - cursor.x) * (180 / Math.PI)

	if (distance > props.range) {
		moveDistance.value = 0
		moveAngle.value = 0
		return
	}

	const angleDifference = angle - moveAngle.value
	if (Math.abs(angleDifference) > 180) {
		moveAngle.value += angleDifference > 0 ? 360 : -360
	}

	moveDistance.value = lerp(moveDistance.value, props.range - distance, props.smoothing)
	moveAngle.value = lerp(moveAngle.value, angle, props.smoothing)
}

onMounted(() => {
	window.addEventListener('mousemove', updatePosition)
})

onUnmounted(() => {
	window.removeEventListener('mousemove', updatePosition)
})
</script>

<style scoped>
.angler {
	transform: rotate(var(--angle));
}

.positioner {
	transform: translateX(var(--distance)) rotate(calc(var(--angle) * -1));
}
</style>
